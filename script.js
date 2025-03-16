// ========== NAVIGATION MENU TOGGLE ==========
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// ========== TOGGLE MEAL PLAN DETAILS ==========
function togglePlan(id) {
    let plan = document.getElementById(id);

    document.querySelectorAll('.meal-plan-details').forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });

    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}

// ========== TOGGLE RECIPE DETAILS ==========
function toggleRecipe(id) {
    let recipe = document.getElementById(id);
    recipe.style.display = (recipe.style.display === "block") ? "none" : "block";
}

// ========== TOGGLE BLOG POST DETAILS ==========
function toggleBlogPost(id) {
    let content = document.getElementById(id);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

// ========== SEARCH & FILTER BLOG POSTS ==========
function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        post.style.display = title.includes(input) ? "block" : "none";
    });
}

// ========== CONTACT FORM VALIDATION ==========
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formStatus = document.getElementById("formStatus");

    if (name === "" || email === "" || message === "") {
        formStatus.style.color = "red";
        formStatus.textContent = "All fields are required.";
    } else {
        formStatus.style.color = "green";
        formStatus.textContent = "Your message has been received!";
        document.getElementById("contactForm").reset();
    }
});
