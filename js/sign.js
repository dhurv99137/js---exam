import navbar from "../Components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const isUserExists = async (user) => {
    try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();

        const userExists = data.some(existingUser => {
            return existingUser.username === user.username || existingUser.email === user.email;
        });

        if (!userExists) {
            postData(user, "http://localhost:3000/users");
        } else {
            alert("User already exists");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const postData = async (user, url) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            alert("User created successfully");
        } else {
            alert("Failed to create user");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    isUserExists(user);
};

document.getElementById("userData").addEventListener("submit", handleData);
