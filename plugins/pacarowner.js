let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '0' , 'Whatsapp', m)
  conn.reply(m.chat, `Anjiem Kau akejsjehwubdhejsbwhshbebuehdhsioaosjejsjehhehehehehsh`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
