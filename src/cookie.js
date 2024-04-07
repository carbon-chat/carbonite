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