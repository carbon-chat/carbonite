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
