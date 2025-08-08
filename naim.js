module.exports = {
  config: {
    name: "naim",
    version: "1.0",
    author: "Nahidul Islam Naim",
    countDown: 2,
    role: 0,
    shortDescription: "Show Naim's profile & send photo",
    longDescription: "Sends Naim's info or photo on specific keywords",
    category: "info",
    guide: ".naim",
    prefix: true,
  },

  onStart: async function ({ message, event }) {
    const msg = (event.body || "").toLowerCase();

    // আমার ছবি চাইলে
    if (
      msg.includes("pic দাও") ||
      msg.includes("pic dao") ||
      msg.includes("তোমার pic") ||
      msg.includes("tomar pic daw") ||
      msg.includes("tomar pic dao")
    ) {
      return message.send({
        body: "এই নাও আমার একটা ছবি 😊",
        attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/02TdCRdF/Picsart-24-12-04-08-20-42-796.jpg")
      });
    }

    // gf pic চাইলে
    if (
      msg.includes("gf pic") ||
      msg.includes("gfphoto") ||
      msg.includes("জি এফ ছবি") ||
      msg.includes("জি এফ পিক")
    ) {
      return message.send({
        body: "এই নাও আমার GF এর ছবি 💖",
        attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/0QgyWvyM/20250808-014657.jpg")
      });
    }

    // প্রোফাইল ডিটেইলস
    const details = `
═════════════════════
👤 𝗡𝗔𝗠𝗘 : 𝗠𝗗 𝗡𝗔𝗛𝗜𝗗𝗨𝗟 𝗜𝗦𝗟𝗔𝗠 𝗡𝗔𝗜𝗠
🕋 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 : 𝗜𝗦𝗟𝗔𝗠 ☪️
🎓 𝗢𝗖𝗖𝗨𝗣𝗔𝗧𝗜𝗢𝗡 : 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
📅 𝗔𝗚𝗘 : 𝟭𝟳+
📞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 : wa.me/+8801710498589
🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : https://facebook.com/fmz.nobita.955288
✉️ 𝗘𝗠𝗔𝗜𝗟 : inobita179@gmail.com
═════════════════════`;

    return message.send(details);
  }
};
