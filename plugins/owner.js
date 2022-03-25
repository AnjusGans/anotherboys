function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6283144570377', 'RakuChan', m)
stc = conn.sendContact(m.chat, '1681252914906', 'Juss', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer Bot*', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler