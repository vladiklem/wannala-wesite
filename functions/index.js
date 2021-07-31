const { Telegraf } = require('telegraf')

const functions = require('firebase-functions')
const bot = new Telegraf(functions.config().telegram.token)

const leadFormTypes = {
  regular: "Головна сторінка",
  it:  "IT курс"
};

bot.launch();

exports.sendLeadsToTelegram = functions.firestore
  .document('leads/{leadId}')
  .onWrite((change, context) => {
    let userInfo = {}

    if (change.after.data()) {
      userInfo = {
        name: change.after.data().name,
        phoneNumber: change.after.data().phoneNumber,
        description: leadFormTypes[change.after.data().type]
      }

      bot.telegram.sendMessage(-1001504957712, `Ім'я: ${userInfo.name} \nТелефон: ${userInfo.phoneNumber} \nЗвідки: ${userInfo.description}`)
    }
    console.log('change after', change.after.data())
   });