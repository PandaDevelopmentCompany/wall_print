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
            formData.append('caption', message); // Добавляем сообщение как подпись
            formData.append('document', fileInput.files[0]);

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




const sendName2 = document.getElementById('sendName2');
const sendTel2 = document.getElementById('sendTel2');
const messageInput2 = document.getElementById('messageInput2');
const sendButton2 = document.getElementById('sendButton2');

sendButton2.addEventListener('click', (event) => {
    event.preventDefault();

    const message = 'Name: ' + sendName2.value + 
                    '\nPhone number: ' + sendTel2.value + 
                    '\nApplication comment: ' + messageInput2.value;

    chatIds.forEach(chatId => {
        // Отправляем текстовое сообщение
        axios.post(`${URL_API}bot${token}/sendMessage`, {
            chat_id: chatId,
            text: message,
        })
        .then(response => {
            console.log(response);
            alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚');
        })
        .catch(error => console.error(error));
    });
});

