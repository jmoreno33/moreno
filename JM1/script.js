// Load Navbar
fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => document.getElementById("navbar").innerHTML = data);

// Load Footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);
    // Search Articles
document.getElementById("searchInput").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        let title = article.querySelector("h2").innerText.toLowerCase();
        if (title.includes(searchValue)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});
// Simulating user login (Replace this with real authentication logic)
let loggedInUser = localStorage.getItem("loggedInUser"); 

document.addEventListener("DOMContentLoaded", function() {
    updateCommentSection();
    loadComments();
});

// Update comment section visibility
function updateCommentSection() {
    let commentSection = document.getElementById("comments");
    let commentForm = document.getElementById("commentForm");

    if (loggedInUser) {
        commentForm.style.display = "block";
    } else {
        commentForm.innerHTML = `<p>You must <a href="login.html">log in</a> to post comments.</p>`;
    }
}

// Add New Comment (Only if logged in)
function addComment() {
    if (!loggedInUser) return;

    let commentInput = document.getElementById("commentInput");
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ user: loggedInUser, text: commentText });
        localStorage.setItem("comments", JSON.stringify(comments));
        commentInput.value = "";
        loadComments();
    }
}

// Load & Display Comments (Only for logged-in users)
function loadComments() {
    let commentList = document.getElementById("commentList");
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    commentList.innerHTML = "";
    comments.forEach(comment => {
        let commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<strong>${comment.user}:</strong> ${comment.text}`;
        commentList.appendChild(commentDiv);
    });
}