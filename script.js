
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


function toggleRecipe(id) {
    let recipe = document.getElementById(id);
    recipe.style.display = (recipe.style.display === "block") ? "none" : "block";
}


function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        let title = recipe.querySelector("h3").innerText.toLowerCase();
        recipe.style.display = title.includes(input) ? "block" : "none";
    });
}

function filterRecipes() {
    let category = document.getElementById("categoryFilter").value;
    let recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        let recipeCategory = recipe.getAttribute("data-category");
        recipe.style.display = (category === "all" || recipeCategory === category) ? "block" : "none";
    });
}


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


function downloadGroceryList() {
    let groceryList = document.getElementById("groceryList").innerText;
    let blob = new Blob([groceryList], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "grocery_list.txt";
    a.click();
}


function toggleBlogPost(id) {
    let content = document.getElementById(id);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}


function searchBlogPosts() {
    let input = document.getElementById("searchBlog").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        post.style.display = title.includes(input) ? "block" : "none";
    });
}


function filterBlogPosts() {
    let category = document.getElementById("blogCategoryFilter").value;
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let postCategory = post.getAttribute("data-category");
        post.style.display = (category === "all" || postCategory === category) ? "block" : "none";
    });
}


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


window.onload = loadComments;


document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
});

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


    let params = {
        user_name: name,
        user_email: email,
        message: message
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(response => {
            formStatus.style.color = "green";
            formStatus.textContent = "Message sent successfully!";
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            formStatus.style.color = "red";
            formStatus.textContent = "Error sending message. Please try again.";
        });
});


function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
