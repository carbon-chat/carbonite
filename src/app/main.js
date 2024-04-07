const api = null;

document.addEventListener('DOMContentLoaded', () => {
    server = getCookie("server");
    authCode = getCookie("authCode");

    let currentChatId = "";

    if (!server) {
        window.location.href = '/setserver';
    }

    if (!authCode) {
        window.location.href = '/login';
    }

    api = new API(server);

    const root = document.getElementById('root');
    const sidebar = document.getElementById('sidebar');
    const secondSidebar = document.getElementById('second-sidebar');
    const chatsBtn = document.getElementById('chats-btn');
    const app = document.getElementById('app');
    const chatBtns = [];
    const messageBox = document.getElementById('message-box');
    const empty = document.getElementById('empty');
    const sendBtn = document.getElementById('send-btn');

    chatsBtn.addEventListener('click', () => {
        empty.style.display = 'none';

        const chats = api.getInvlovedChats(authCode);
        const templateButton = `<button class="chat-btn" chatid=$chatid title=$chatid>💬</button>`;

        chats.forEach(chat => {
            html = templateButton.replace('$chatid', chat);
            secondSidebar.innerHTML += html;
        });

        chatBtns = document.getElementsByClassName('chat-btn');
    });

    chatsBtn.forEach(chatBtn => {
        chatBtn.addEventListener('click', () => {
            const chatId = chatBtn.getAttribute('chatid');
            currentChatId = chatId;
            messages = api.getMessages(authCode, chatId);
            messageTemplate = `<div class="message"><b>$sender</b>: $message</div></div>`

            messages.forEach(message => {
                messageBox.innerHTML += messageTemplate.replace('$sender', message.authorId).replace('$message', message.content);
            });

            messageBox.style.display = 'block';
            app.style.display = 'none';
        });
    });

    sendBtn.addEventListener('click', () => {
        const message = document.getElementById('message-input').value;
        api.sendMessage(authCode, currentChatId, message);
        document.getElementById('message-input').value = '';
    });
});