document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.querySelector('.main-content');

    toggleButton.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        mainContent.classList.toggle('shifted');
        toggleButton.classList.toggle('active');
    });

    const Logout = document.getElementById('Logout');

    Logout.addEventListener('click', function () {
        fetch('https://api-login.onmi-tech.com/login/logout', {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response => response.json()))
            .then(data => {
                if (data.valid == true) {
                    window.location.href = "https://login.onmi-tech.com"
                } else {
                    alert("Logout Failed");
                }
            }).catch(error => alert("404"));
    })
});
