let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link) {
 m.reply(`*「 LINK DETECTED 」*\n\nLink Terdeteksi, *${name}* telah mengirim link group!\n\nKamu Akan Di Kick`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
