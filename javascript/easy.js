async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const ip = await fetch("https://api.ipify.org?format=json")

    fetch('https://api-login.onmi-tech.com/login/api', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
            username: username,
            password: password,
            ip: ip.json().ip
        })

    }).then((response => response.json()))
        .then(data => {
            if (data.valid == true) {
                window.location.href = "../logined.html"
            } else {
                alert("Login Failed");
            }
        }).catch(error => alert("404"));
}

