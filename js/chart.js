google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    let data = google.visualization.arrayToDataTable([
        ['Risco', 'Porcentagem', { role: 'style' }],
        ['Físico', 6, '#b87333'],            // RGB value
        ['Acidentes', 32, 'silver'],            // English color name
        ['Biológico', 10, 'gold'],
        ['Ergonômico', 31, 'silver' ]
        ['Platinum', 21, 'color: #e5e4e2' ], // CSS-style declaration
     ]);

    // Instantiate and draw the chart.
    let chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, null);
}