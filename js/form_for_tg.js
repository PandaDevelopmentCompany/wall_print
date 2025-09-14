// const token = '7738919764:AAECEuRqdJXpYrEaFIlbd72-xjhlYR_9Ec4';
// const chatIds = ['746586393', '238576207', '254621411', '223387839']; 
// const URL_API = 'https://api.telegram.org/';

// const messageInput = document.getElementById('messageInput');
// const sendButton = document.getElementById('sendButton');
// const fileInput = document.getElementById('fileInput'); 

// sendButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const message = 'Name: ' + sendName.value + 
//                     '\nPhone number: ' + sendTel.value + 
//                     '\nApplication comment: ' + messageInput.value;
    
//     let promises = []; 

//     chatIds.forEach(chatId => {
//         const formData = new FormData();
//         formData.append('chat_id', chatId);
//         if (fileInput.files.length > 0) {
//             formData.append('caption', message);
//             formData.append('document', fileInput.files[0]);
//             promises.push(axios.post(`${URL_API}bot${token}/sendDocument`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             }));
//         } else {
//             promises.push(axios.post(`${URL_API}bot${token}/sendMessage`, {
//                 chat_id: chatId,
//                 text: message,
//             }));
//         }
//     });

   
//     Promise.all(promises)
//         .then(responses => {
//             console.log(responses);
//             alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚');
//         })
//         .catch(error => console.error(error));
// });



// const sendName2 = document.getElementById('sendName2');
// const sendTel2 = document.getElementById('sendTel2');
// const messageInput2 = document.getElementById('messageInput2');
// const sendButton2 = document.getElementById('sendButton2');

// sendButton2.addEventListener('click', (event) => {
//     event.preventDefault();

//     const message = 'Name: ' + sendName2.value + 
//                     '\nPhone number: ' + sendTel2.value + 
//                     '\nApplication comment: ' + messageInput2.value;

//     let promises = chatIds.map(chatId => {
//         return axios.post(`${URL_API}bot${token}/sendMessage`, {
//             chat_id: chatId,
//             text: message,
//         });
//     });

   
//     Promise.all(promises)
//         .then(responses => {
//             console.log(responses);
//             alert('Your message has been successfully sent!✅ \nWe will definitely contact you! \nThank you!💚');
//         })
//         .catch(error => console.error(error));
// });

