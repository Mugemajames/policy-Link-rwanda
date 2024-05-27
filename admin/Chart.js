// Sample data for policy access improvement over the years
const data = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Policy Access Improvement (%)',
        data: [25, 35, 45, 55, 65, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Configuration options for the chart
const config = {
    type: 'line',
    data: data,
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