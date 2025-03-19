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

// Filter Meal Plans
function filterMeals(category) {
    let meals = document.querySelectorAll(".meal-plan");
    meals.forEach(meal => {
        meal.style.display = (category === "all" || meal.getAttribute("data-category") === category) ? "block" : "none";
    });
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

// Download Recipe as TXT
function downloadRecipe(recipeName) {
    let recipeElement = document.querySelector(`.recipe[data-name='${recipeName.toLowerCase()}']`);
    let ingredients = recipeElement.querySelector("ul").innerText;
    let instructions = recipeElement.querySelector("ol").innerText;
    let textContent = `Recipe: ${recipeName}\n\nIngredients:\n${ingredients}\n\nInstructions:\n${instructions}`;
    let blob = new Blob([textContent], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${recipeName}_Recipe.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Download Grocery List
function downloadGroceryList(mealName) {
    let groceryList = document.querySelector(`.grocery-list h2:contains('${mealName}')`).nextElementSibling.innerText;
    let textContent = `Grocery List for ${mealName}\n\n${groceryList}`;
    let blob = new Blob([textContent], { type: "text/plain" });
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
    let newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<h3>${name}</h3><p>${"⭐".repeat(rating)}</p><p>${reviewText}</p>`;
    reviewsList.appendChild(newReview);
    document.getElementById("reviewForm").reset();
});

// Submit Blog Comment
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let commentText = document.getElementById("userComment").value;
    let commentsList = document.getElementById("commentsList");
    let newComment = document.createElement("li");
    newComment.innerHTML = `<strong>${username}:</strong> ${commentText}`;
    commentsList.appendChild(newComment);
    document.getElementById("commentForm").reset();
});
