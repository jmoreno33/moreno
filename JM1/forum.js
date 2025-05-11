document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const postButton = document.getElementById("submit-post");

    // SIGN-UP FUNCTION
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let username = "$" + document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            // Store user in localStorage (for now)
            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Account created! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // LOGIN FUNCTION
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let user = JSON.parse(localStorage.getItem("user"));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "profile.html";
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    // PROFILE PAGE
    if (window.location.pathname.includes("profile.html")) {
        let user = JSON.parse(localStorage.getItem("user"));
        document.getElementById("profile-username").innerText = user.username;
        document.getElementById("profile-email").innerText = user.email;
    }

    // FORUM POSTS
    if (postButton) {
        postButton.addEventListener("click", () => {
            let content = document.getElementById("post-content").value;
            let user = JSON.parse(localStorage.getItem("user"));

            if (!user) {
                alert("You must be logged in to post!");
                return;
            }

            let post = `<div class="forum-post">
                <p><strong>${user.username}</strong> - ${new Date().toLocaleString()}</p>
                <p>${content}</p>
            </div>`;

            document.getElementById("forum-posts").innerHTML += post;
            document.getElementById("post-content").value = "";
        });
    }
});