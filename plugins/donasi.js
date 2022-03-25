let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085718366706]
┣➥ *Dana:* [085718366706]
┣➥ *Gopay:* [085718366706]
┣➥ *Ovo:* [085718366706]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285718366706*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
