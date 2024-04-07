function addCookie(name, value, expires) {
    document.cookie = `${name}=${value}; expires=${expires}; SameSite=None; Secure`;
}

function getCookie(name) {
    const cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`));
    if (cookie) {
        return cookie.split('=')[1];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    server = getCookie("server");

    if (!server) {
        window.location.href = '/setserver';
    }

    const api = new API(server);

    const root = document.getElementById('root');
    const usernameInput = document.getElementById('signup-username');
    const passwordInput = document.getElementById('signup-password');
    const signupBtn = document.getElementById('signup-btn');
    const loginText = document.getElementById('login-text');

    const signupTitle = document.getElementById('signup-title');

    signupTitle.innerText = "Signup to " + server;

    signupBtn.addEventListener('click', () => {
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

    loginText.addEventListener('click', () => {
        window.location.href = '/login';
    });
});
