// ========== NAVIGATION MENU TOGGLE ==========
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// ========== TOGGLE MEAL PLAN DETAILS ==========
function togglePlan(id) {
    let plan = document.getElementById(id);

    // Hide all other meal plan details before showing the selected one
    document.querySelectorAll('.meal-plan-details').forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });

    // Toggle visibility for the clicked meal plan
    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}

// ========== TOGGLE RECIPE DETAILS ==========
function toggleRecipe(id) {
    let recipe = document.getElementById(id);
    recipe.style.display = (recipe.style.display === "block") ? "none" : "block";
}

// ========== CONTACT FORM VALIDATION ==========
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

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
