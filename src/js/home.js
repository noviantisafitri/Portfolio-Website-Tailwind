document.addEventListener('DOMContentLoaded', function () {
    const text = "Novianti Safitri";
    const typingText = document.getElementById('typing-text').querySelector('span');

    let index = 0;

    function type() {
        typingText.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(timer);
        }
    }

    const timer = setInterval(type, 100);
});
