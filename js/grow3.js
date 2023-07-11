$( document ).ready( function() {
  AOS.init();
} );

let countA = 0;
let countB = 0;

// 카운트 업데이트 함수
function updateCounts() {
  // countA 업데이트
  if (countA < 66) {
    countA++;
    document.getElementById("count-a").textContent = countA + "%";
  }

  // countB 업데이트
  if (countB < 33) {
    countB++;
    document.getElementById("count-b").textContent = countB + "%";
  }

  // 66과 33에 도달하면 멈춤
  if (countA === 66 && countB === 33) {
    clearInterval(interval);
  }
}

// 1초마다 updateCounts 함수 호출
const interval = setInterval(updateCounts,30);

const studentCtx = document.querySelector('#radarChartExample').getContext('2d');
const studentRadar = new Chart(studentCtx, {
    type: 'radar',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: '학생 A',
            data: [13, 13, 15, 20, 31],
            backgroundColor: 'rgba(160,208,222,0.7)',
            borderColor: 'rgba(160,208,222, 1)',
            borderWidth: 1
        },
        {
            label: '학생 B',
            data: [32, 30, 28, 13, 11],
            backgroundColor: 'rgba(177,197,232,0.7)',
            borderColor: 'rgba(177,197,232,1)',
            borderWidth: 1
        }]
    },
    options: {
      scales: {
        r: {
            ticks: {
                stepSize: 5,
                maxTicksLimit: 25,
            },
            beginAtZero: true,
            grid: {
                color: 'rgba(235, 235, 235, 1)'
            },  
                     
        }
    },
    plugins: {
      legend: {
        display: false,
      }
    },
    elements: {
      point:{
          radius: 0
      }
  }
    }
});

