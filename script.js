
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


function togglePlan(id) {
    let plan = document.getElementById(id);

    // showing the selected one
    document.querySelectorAll('.meal-plan-details').forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });

    // Toggle visibility for the clicked meal plan
    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}


function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        let recipeName = recipe.getAttribute("data-name").toLowerCase();
        recipe.style.display = recipeName.includes(input) ? "block" : "none";
    });
}


function toggleBlogPost(id) {
    let content = document.getElementById(id);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}


function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h2").innerText.toLowerCase();
        post.style.display = title.includes(input) ? "block" : "none";
    });
}


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
