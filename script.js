document.addEventListener("DOMContentLoaded", function () {
    // Home Page: Fetch News
    if (document.getElementById("news-container")) {
        fetchNews();
    }

    // Climate Page: Generate Climate Chart
    if (document.getElementById("climateChart")) {
        generateClimateChart();
    }

    // Contact Form Submission
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            form.reset();
        });
    }
});

// Function to Fetch and Display News (Dummy Data)
function fetchNews() {
    let newsContainer = document.getElementById("news-container");
    let newsItems = [
        "Farmers adopting AI-based solutions for better yield.",
        "Government launches new schemes for organic farming.",
        "New irrigation techniques improving crop productivity.",
    ];

    newsContainer.innerHTML = newsItems.map(news => `<p>${news}</p>`).join("");
}

// Function to Generate Climate Chart
function generateClimateChart() {
    let ctx = document.getElementById("climateChart").getContext("2d");

    let climateChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Average Temperature (°C)",
                data: [15, 18, 22, 28, 32, 35, 37, 36, 30, 25, 20, 16],
                borderColor: "#3498db",
                fill: false
            }]
        }
    });
}
