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
    
    const root = document.getElementById('root');
    const serverInput = document.getElementById('custom-server-input');
    const customServerBtn = document.getElementById('custom-server-btn');
    const defaultServer = document.getElementById('use-default');

    defaultServer.addEventListener('click', () => {
        server = "carbon.proplayer919.dev";
        addCookie("server", server, 1000 * 60 * 60 * 24 * 7);
        root.style.display = 'none';
        window.location.href = '/login';
    });

    customServerBtn.addEventListener('click', () => {
        server = serverInput.value;
        addCookie("server", server, 1000 * 60 * 60 * 24 * 7);
        root.style.display = 'none';
        window.location.href = '/login';
    });
});
