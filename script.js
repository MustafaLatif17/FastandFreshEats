// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Toggle Meal Plan Details (Only one open at a time)
function togglePlan(id) {
    let plan = document.getElementById(id);
    document.querySelectorAll('.meal-plan-details').forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });
    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}

// Search Meal Plans
function searchMeals() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let meals = document.querySelectorAll(".meal-plan");
    meals.forEach(meal => {
        let mealName = meal.getAttribute("data-name").toLowerCase();
        meal.style.display = mealName.includes(input) ? "block" : "none";
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

// Contact Form Validation & Submission
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
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
                contactForm.reset();
            }
        });
    }
});

// Download Recipe as TXT
function downloadRecipe(recipeName) {
    let recipeElement = document.querySelector(`.recipe[data-name="${recipeName.toLowerCase()}"]`);
    if (recipeElement) {
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
    } else {
        alert("Recipe not found.");
    }
}

// Download Grocery List as TXT
function downloadGroceryList(mealName) {
    let groceryListElement = document.querySelector(`.grocery-list[data-name="${mealName.toLowerCase()}"]`);
    if (groceryListElement) {
        let groceryList = groceryListElement.innerText;
        let textContent = `Grocery List for ${mealName}\n\n${groceryList}`;
        let blob = new Blob([textContent], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${mealName}_Grocery_List.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert("Grocery list not found.");
    }
}

// Submit User Review
document.addEventListener("DOMContentLoaded", function () {
    let reviewForm = document.getElementById("reviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("username").value.trim();
            let rating = document.getElementById("rating").value;
            let reviewText = document.getElementById("userReview").value.trim();
            let reviewsList = document.getElementById("reviewsList");

            if (name === "" || reviewText === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            let newReview = document.createElement("div");
            newReview.classList.add("review", "card");
            newReview.innerHTML = `<h3>${name}</h3><p>${"⭐".repeat(rating)}</p><p>${reviewText}</p>`;
            reviewsList.appendChild(newReview);
            reviewForm.reset();
        });
    }
});

// Blog Comment Submission (if implemented later)
document.addEventListener("DOMContentLoaded", function () {
    let commentForm = document.getElementById("commentForm");
    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let username = document.getElementById("username").value.trim();
            let commentText = document.getElementById("userComment").value.trim();
            let commentsList = document.getElementById("commentsList");

            if (username === "" || commentText === "") {
                alert("Please enter both a name and a comment.");
                return;
            }

            let newComment = document.createElement("li");
            newComment.innerHTML = `<strong>${username}:</strong> ${commentText}`;
            commentsList.appendChild(newComment);
            commentForm.reset();
        });
    }
});
