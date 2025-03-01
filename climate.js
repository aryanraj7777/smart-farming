// script.js

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('climateChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Average Temperature (°C)",
                data: [10, 12, 15, 20, 25, 30, 32, 31, 28, 22, 16, 12],
                borderColor: "blue",
                fill: false
            }, {
                label: "Rainfall (mm)",
                data: [50, 40, 60, 100, 150, 200, 250, 220, 180, 120, 80, 60],
                borderColor: "green",
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});

