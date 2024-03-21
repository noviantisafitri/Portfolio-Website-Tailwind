const formContact = document.getElementById('form__contact');

// Fungsi untuk menyimpan data ke dalam riwayat
function saveToHistory(name, email, message) {
    let history = JSON.parse(localStorage.getItem('contactHistory')) || [];
    history.push({ name, email, message });
    // Local Storage
    localStorage.setItem('contactHistory', JSON.stringify(history));
}

window.addEventListener('DOMContentLoaded', function() {
    const storedHistory = JSON.parse(localStorage.getItem('contactHistory'));
    if (storedHistory) {
        storedHistory.forEach(item => {
            console.log(`Name: ${item.name}, Email: ${item.email}, Message: ${item.message}`);
        });
    }
});

formContact.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;

    saveToHistory(nameValue, emailValue, messageValue);

    localStorage.setItem('contactName', nameValue);
    localStorage.setItem('contactEmail', emailValue);
    localStorage.setItem('contactMessage', messageValue);

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);

    alert(`Thank you for contacting me\n \nName : ${nameValue}\nEmail : ${emailValue}\nMessage : ${messageValue}`);
});
