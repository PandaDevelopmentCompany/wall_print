const token = '7738919764:AAECEuRqdJXpYrEaFIlbd72-xjhlYR_9Ec4';
const chatIds = ['746586393', '6329995011']; // Замените на реальные ID чатов
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const fileInput = document.getElementById('fileInput'); // Добавьте элемент для выбора файла

sendButton.addEventListener('click', (event) => {
    event.preventDefault();

    const message = 'Name: ' + sendName.value + 
                    '\nPhone number: ' + sendTel.value + 
                    '\nApplication comment: ' + messageInput.value;
    
    chatIds.forEach(chatId => {
        // Если файл выбран, отправляем его
        if (fileInput.files.length > 0) {
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('document', fileInput.files[0]);
            formData.append('caption', message); // Добавляем сообщение как подпись

            axios.post(`${URL_API}bot${token}/sendDocument`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response);
                alert('Your message and file have been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚');
            })
            .catch(error => console.error(error));
        } else {
            // Отправляем только текстовое сообщение, если файл не выбран
            axios.post(`${URL_API}bot${token}/sendMessage`, {
                chat_id: chatId,
                text: message,
            })
            .then(response => {
                console.log(response);
                alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚');
            })
            .catch(error => console.error(error));
        }
    });
});
