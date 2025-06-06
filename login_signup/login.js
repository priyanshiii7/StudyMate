fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => console.log(data));

fetch('http://localhost:3000/users', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Priyanshi", email: "priyanshi@example.com" })
}).then(response => response.text()).then(data => console.log(data));
