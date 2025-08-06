const fs = require("fs");
const path = require("path");

// প্রশ্ন JSON ফাইল লোড
const questions = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/questions.json"))
);

let quizSession = {}; // userId অনুযায়ী কুইজ সেশন

module.exports.config = {
  name: "quiz",
  version: "1.0",
  author: "Naim",
  cooldowns: 5,
  role: 0,
  prefix: true,
  shortDescription: {
    en: "Start a quiz!"
  },
  longDescription: {
    en: "Start an interactive quiz with timer."
  },
  category: "fun",
  guide: {
    en: ".quiz"
  }
};

module.exports.run = async function ({ api, event }) {
  const userId = event.senderID;
  const threadId = event.threadID;

  if (quizSession[userId]) {
    return api.sendMessage(
      "❗ তুমি ইতোমধ্যেই কুইজে আছো! উত্তর দাও A/B/C/D দিয়ে।",
      threadId
    );
  }

  quizSession[userId] = {
    current: 0,
    score: 0
  };

  sendQuestion(api, event, userId);
};

function sendQuestion(api, event, userId) {
  const session = quizSession[userId];
  const question = questions[session.current];

  if (!question) {
    api.sendMessage(
      `🎉 কুইজ শেষ! আপনার স্কোর: ${session.score}/${questions.length}`,
      event.threadID
    );
    delete quizSession[userId];
    return;
  }

  let msg = `📍 প্রশ্ন ${session.current + 1}: ${question.question}\n\n`;
  for (const [key, val] of Object.entries(question.options)) {
    msg += `${key}. ${val}\n`;
  }
  msg += "\n⏳ ১০ সেকেন্ডের মধ্যে উত্তর দিন (A/B/C/D)";

  api.sendMessage(msg, event.threadID, (err, info) => {
    global.client.handleReply.push({
      name: module.exports.config.name,
      messageID: info.messageID,
      userID: userId,
      threadID: event.threadID
    });
  });

  session.timeout = setTimeout(() => {
    if (quizSession[userId]) {
      api.sendMessage("⏰ সময় শেষ! পরের প্রশ্নে যাচ্ছি...", event.threadID);
      session.current++;
      sendQuestion(api, event, userId);
    }
  }, 10000);
}

module.exports.handleReply = async function ({ api, event, handleReply }) {
  const userId = event.senderID;
  const threadId = event.threadID;
  const answer = event.body.trim().toUpperCase();

  if (userId !== handleReply.userID) return;
  if (!quizSession[userId]) return;

  const session = quizSession[userId];
  const currentIndex = session.current - 1;
  const correctAnswer = questions[currentIndex].answer;

  clearTimeout(session.timeout);

  if (answer === correctAnswer) {
    api.sendMessage("✅ সঠিক উত্তর!", threadId);
    session.score++;
  } else {
    api.sendMessage(`❌ ভুল! সঠিক উত্তর: ${correctAnswer}`, threadId);
  }

  session.current++;
  sendQuestion(api, event, userId);
};
