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

    const continueBtn = document.getElementById('continue-btn');

    continueBtn.addEventListener('click', () => {
        if (!server) {
            window.location.href = '/setserver';
        } else {
            window.location.href = '/login';
        }
    });
});
