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
.then(response => console.log(response), alert('Ваше сообщение успешно отправлено!✅ \nМы обязательно свяжемся с вами! \nСпасибо!💚'))
.catch(error => console.error(error));
}
});