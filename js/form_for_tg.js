const token = '7393898003:AAHyOAVTkz8-kpx7zFhBu62C6GqO23Knlz4';
const chatId = '746586393';
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Имя : ' + sendName.value + '\nНомер телефона: ' + " " + sendTel.value + '\nКомментарии к заявке: ' + messageInput.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚'))
.catch(error => console.error(error));
}
});




const messageInput1 = document.getElementById('messageInput1');
const sendButton1 = document.getElementById('sendButton1');

sendButton1.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Имя : ' + sendName1.value + '\nНомер телефона: ' + " " + sendTel1.value + '\nКомментарии к заявке: ' + messageInput1.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚'))
.catch(error => console.error(error));
}
});