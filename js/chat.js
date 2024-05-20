function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user');
        userMessageElement.innerHTML = `<p>${userMessage}</p>`;
        chatBody.appendChild(userMessageElement);
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot');
            botMessageElement.innerHTML = `<p>Esto es una respuesta automática.</p>`;
            chatBody.appendChild(botMessageElement);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        chatInput.value = '';
    }
}
