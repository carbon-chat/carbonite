document.addEventListener('DOMContentLoaded', () => {
    server = getCookie("server");

    if (server) {
        window.location.href = '/login';
    } else {
        server = "";
    }

    const root = document.getElementById('root');
    const serverInput = document.getElementById('custom-server-input');
    const customServerBtn = document.getElementById('custom-server-btn');
    const defaultServer = document.getElementById('use-default');

    defaultServer.addEventListener('click', () => {
        server = "carbon-server.proplayer919.dev";
        setCookie("server", server, 1000 * 60 * 60 * 24 * 7);
        root.style.display = 'none';
        window.location.href = '/login';
    });

    customServerBtn.addEventListener('click', () => {
        server = serverInput.value;
        setCookie("server", server, 1000 * 60 * 60 * 24 * 7);
        root.style.display = 'none';
        window.location.href = '/login';
    });
});
