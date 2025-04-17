const hamburger = document.querySelector('.toggle-btn');
const toggler = document.querySelector('#icon');

hamburger.addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('expand');
    toggler.classList.toggle('bxs-chevrons-left');
    toggler.classList.toggle('bxs-chevrons-right');
});


// chart
const ctx = document.getElementById('lineChart').getContext('2d');

  const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Premium Production',
          data: [38, 58, 75, 50, 40, 68, 80, 66, 34, 47, 97, 80],
          borderColor: '#DC0032',
          backgroundColor: '#DC0032',
          fill: false,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#DC0032'
        },
        {
          label: 'Premium Production',
          data: [58, 96, 70, 44, 60, 55, 60, 95, 49, 46, 60, 55],
          borderColor: '#FF780F',
          backgroundColor: '#FF780F',
          fill: false,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#FF780F'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Premium Production',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            callback: function(value) {
              return value;
            }
          }
        },
        x: {
            title: {
              display: true,
              text: 'Months',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
      }
    }
  });


  $(document).ready(function () {
    $('#myTabletwo').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        info: true
    });
});