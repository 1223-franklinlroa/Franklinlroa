// chatbot.js o un archivo separado para el menú
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('visible'); // Alternar la clase visible
});
 
// script.js

// Función para alternar el menú en dispositivos móviles
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Ejemplo básico de integración de un chatbot
const chatbotContainer = document.getElementById('chatbot-container');

// Función para inicializar el chatbot
function initChatbot() {
    const chatbot = document.createElement('div');
    chatbot.classList.add('chatbot');
    chatbot.innerHTML = `
        <h3>Chatbot Asistente</h3>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <input type="text" id="chat-input" placeholder="Escribe tu mensaje..."/>
        <button id="send-message">Enviar</button>
    `;
    chatbotContainer.appendChild(chatbot);

    const sendMessageButton = document.getElementById('send-message');
    sendMessageButton.addEventListener('click', sendMessage);
}

// Función para enviar un mensaje
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    if (message.trim() !== '') {
        const messagesContainer = document.getElementById('chatbot-messages');
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = `Tú: ${message}`;
        messagesContainer.appendChild(userMessage);

        // Aquí puedes agregar la lógica para la respuesta del chatbot
        const botResponse = document.createElement('div');
        botResponse.classList.add('bot-response');
        botResponse.textContent = `Bot: No puedo ayudar con eso todavía.`;
        messagesContainer.appendChild(botResponse);

        chatInput.value = ''; // Limpiar el campo de entrada
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
    }
}

// Inicializar el chatbot al cargar la página
window.onload = initChatbot;
