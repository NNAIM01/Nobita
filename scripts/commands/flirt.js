module.exports = {

  config: {

    name: "flirt",

    aliases: ["flirt @mention"],

    version: "1.0",

    author: "nobita",

    countDown: 5,

    role: 0,

    description: "Send a fun romantic line to charm someone 😉",

    category: "fun"

  },

  onStart: async function ({ api, event }) {

    const flirtLines = [

      "তোমার হাসি তো কফির চেয়েও বেশি নেশা ধরায় ☕😉",

      "তুমি কি ম্যাজিক জানো? কারন তোমাকে দেখলেই সময় থেমে যায়!",

      "তোমাকে দেখার পর থেকে আমি আর কারো দিকে তাকাই না।",

      "তুমি কি WiFi? কারন আমি তোমার দিকে সবসময় কানেক্টেড থাকি 😍",

      "তোমার চোখে ডুবে যেতে ইচ্ছে করে 🌊💙"

    ];

    const randomLine = flirtLines[Math.floor(Math.random() * flirtLines.length)];

    api.sendMessage(randomLine, event.threadID, event.messageID);

  }

};
