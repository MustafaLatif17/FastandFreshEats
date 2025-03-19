// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Toggle Meal Plan Details
function togglePlan(id) {
    let plan = document.getElementById(id);
    document.querySelectorAll('.meal-plan-details').forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });
    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}

// Search Recipes
function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.querySelectorAll(".recipe");
    recipes.forEach(recipe => {
        let recipeName = recipe.getAttribute("data-name").toLowerCase();
        recipe.style.display = recipeName.includes(input) ? "block" : "none";
    });
}

// Toggle Blog Post Content
function toggleBlogPost(id) {
    let content = document.getElementById(id);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

// Search Blog Posts
function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");
    posts.forEach(post => {
        let title = post.querySelector("h2").innerText.toLowerCase();
        post.style.display = title.includes(input) ? "block" : "none";
    });
}

// Contact Form Validation
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

// Download Grocery List
function downloadGroceryList(mealName) {
    let items = document.querySelector(`.grocery-list h2:contains('${mealName}')`).nextElementSibling.innerHTML;
    let groceryText = `Grocery List for ${mealName}\n` + items.replace(/<li>/g, "- ").replace(/<\/li>/g, "\n");
    let blob = new Blob([groceryText], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${mealName}_Grocery_List.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Submit User Review
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("username").value;
    let rating = document.getElementById("rating").value;
    let reviewText = document.getElementById("userReview").value;
    let reviewsList = document.getElementById("reviewsList");
    let newReview = document.createElement("li");
    newReview.innerHTML = `<strong>${name}</strong> - ${"⭐".repeat(rating)}<br>${reviewText}`;
    reviewsList.appendChild(newReview);
    document.getElementById("reviewForm").reset();
});
