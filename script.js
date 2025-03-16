// ========== NAVIGATION MENU TOGGLE ==========
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// ========== TOGGLE MEAL PLAN DETAILS ==========
function togglePlan(id) {
    let plan = document.getElementById(id);
    plan.style.display = (plan.style.display === "block") ? "none" : "block";
}

// ========== CONTACT FORM WITH EMAILJS ==========
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formStatus = document.getElementById("formStatus");

    if (name === "" || email === "" || message === "") {
        formStatus.style.color = "red";
        formStatus.textContent = "All fields are required.";
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
