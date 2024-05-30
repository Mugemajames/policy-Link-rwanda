// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://policy-link-rwanda-client-project-with.onrender.com/institution/increase_over_time/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to update the chart with fetched data
async function updateChart() {
    const data = await fetchData();
    if (!data) {
        return; // Exit if data fetching failed
    }

    // Update chart data with fetched data
    policyChart.data.labels = data.labels;
    policyChart.data.datasets[0].data = data.data;

    // Update chart
    policyChart.update();
}

// Initial chart configuration
const config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Policy Access Improvement (%)',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Improvement (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        }
    }
};

// Create the chart
const policyChart = new Chart(
    document.getElementById('policyChart'),
    config
);

// Update chart with fetched data on page load
updateChart();
