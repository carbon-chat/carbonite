document.addEventListener('DOMContentLoaded', () => {
    server = getCookie("server");

    if (!server) {
        window.location.href = '/setserver';
    }

    const api = new API(server);

    const root = document.getElementById('root');
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const loginBtn = document.getElementById('login-btn');
    const signupText = document.getElementById('signup-text');

    const loginTitle = document.getElementById('login-title');

    loginTitle.innerText = "Login to " + server;

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            return;
        }

        const res = api.login(username, password);

        if (!res.authCode || !res.expiry || !res.uuid) {
            return;
        }

        setCookie("authCode", res.authCode, res.expiry);
        setCookie("uuid", res.uuid, res.expiry);
        root.style.display = 'none';
        window.location.href = '/app';
    });

    signupText.addEventListener('click', () => {
        window.location.href = '/signup';
    });
});
