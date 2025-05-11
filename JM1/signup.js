document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("All fields are required!");
        return;
    }

    // Simulate user registration (this should be connected to a database)
    console.log("User registered:", { username, email, password });

    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "login.html";
});

    // Ensure "$" is always at the beginning
    usernameInput.addEventListener("input", function() {
        if (!usernameInput.value.startsWith("$")) {
            usernameInput.value = "$" + usernameInput.value.replace(/^\$+/, "");
        }
    });

        // Get input values
        const username = usernameInput.value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username.trim() === "$" || email.trim() === "" || password.trim() === "") {
            alert("All fields are required!");
            return;
        }