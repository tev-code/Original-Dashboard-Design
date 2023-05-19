  // Generate random data
  function generateRandomData() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 50));
  }

  // Chart configuration 1
  const chartConfig1 = {
    type: 'bar',
    data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
    {
    label: 'Chart 1',
    data: generateRandomData(),
    backgroundColor: '#b30631',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    },
    ],
    },
    options: {
    responsive: true,
    scales: {
    y: {
    beginAtZero: true,
    },
    },
    },
    };

  // Chart configuration 2
  const chartConfig2 = {
  type: 'line',
  data: {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
  {
  label: 'Chart 2',
  data: generateRandomData(),
  backgroundColor: '#b30631',
  borderColor: 'rgba(255, 99, 132, 1)',
  borderWidth: 1,
  },
  ],
  },
  options: {
  responsive: true,
  scales: {
  y: {
  beginAtZero: true,
  },
  },
  },
  };

  // Create the charts
  const ctx1 = document.getElementById('chart1').getContext('2d');
  const ctx2 = document.getElementById('chart2').getContext('2d');

  new Chart(ctx1, chartConfig1);
  new Chart(ctx2, chartConfig2);
