function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Testimonial Slider
let index = 0;
function showTestimonial() {
    let testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach(t => t.style.display = "none");
    testimonials[index].style.display = "block";
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000);
showTestimonial();
// Toggle Recipe Details
function toggleRecipe(id) {
    let recipe = document.getElementById(id);
    if (recipe.style.display === "block") {
        recipe.style.display = "none";
    } else {
        recipe.style.display = "block";
    }
}

// Search Functionality
function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        let title = recipe.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}

// Filter Recipes by Category
function filterRecipes() {
    let category = document.getElementById("categoryFilter").value;
    let recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        let recipeCategory = recipe.getAttribute("data-category");
        if (category === "all" || recipeCategory === category) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}
// Load Pre-Made Grocery Lists
function loadPreMadeList(plan) {
    let groceryList = document.getElementById("groceryList");
    groceryList.innerHTML = "";

    let items = {
        weightLoss: ["Chicken Breast", "Quinoa", "Spinach", "Almonds", "Greek Yogurt"],
        vegan: ["Tofu", "Lentils", "Spinach", "Almond Milk", "Quinoa"],
        keto: ["Eggs", "Avocados", "Cheese", "Almond Flour", "Olive Oil"]
    };

    items[plan].forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        groceryList.appendChild(li);
    });
}

// Update Grocery List Based on Selected Recipes
function updateGroceryList() {
    let checkboxes = document.querySelectorAll(".recipe-selection input:checked");
    let groceryList = document.getElementById("groceryList");
    groceryList.innerHTML = "";

    checkboxes.forEach(checkbox => {
        let items = checkbox.value.split(", ");
        items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            groceryList.appendChild(li);
        });
    });
}

// Download Grocery List as Text File
function downloadGroceryList() {
    let groceryList = document.getElementById("groceryList").innerText;
    let blob = new Blob([groceryList], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "grocery_list.txt";
    a.click();
}
// Toggle Blog Post Content
function toggleBlogPost(id) {
    let content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Search Blog Posts
function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Filter Blog Posts by Category
function filterBlogPosts() {
    let category = document.getElementById("blogCategoryFilter").value;
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let postCategory = post.getAttribute("data-category");
        if (category === "all" || postCategory === category) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
// Toggle Blog Post Content
function toggleBlogPost(id) {
    let content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Search Blog Posts
function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Filter Blog Posts by Category
function filterBlogPosts() {
    let category = document.getElementById("blogCategoryFilter").value;
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let postCategory = post.getAttribute("data-category");
        if (category === "all" || postCategory === category) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Add Comment to Blog Post
function addComment(inputId, listId) {
    let input = document.getElementById(inputId);
    let commentText = input.value.trim();

    if (commentText === "") return;

    let commentList = document.getElementById(listId);
    let li = document.createElement("li");
    li.textContent = commentText;

    commentList.appendChild(li);
    input.value = "";

    // Save to localStorage
    let comments = JSON.parse(localStorage.getItem(listId)) || [];
    comments.push(commentText);
    localStorage.setItem(listId, JSON.stringify(comments));
}

// Load Comments from localStorage
function loadComments() {
    let lists = document.querySelectorAll(".comment-section ul");

    lists.forEach(list => {
        let listId = list.id;
        let savedComments = JSON.parse(localStorage.getItem(listId)) || [];

        savedComments.forEach(comment => {
            let li = document.createElement("li");
            li.textContent = comment;
            list.appendChild(li);
        });
    });
}

// Load comments on page load
window.onload = loadComments;
// Validate and Submit Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formStatus = document.getElementById("formStatus");

    if (name === "" || email === "" || message === "") {
        formStatus.style.color = "red";
        formStatus.textContent = "All fields are required.";
        return;
    }

    if (!validateEmail(email)) {
        formStatus.style.color = "red";
        formStatus.textContent = "Please enter a valid email address.";
        return;
    }

    formStatus.style.color = "green";
    formStatus.textContent = "Message sent successfully!";
    
    // Clear fields after submission
    document.getElementById("contactForm").reset();
});

// Email Validation Function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
