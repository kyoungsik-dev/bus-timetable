// 버스 시간표 데이터를 busSchedules.js에서 가져옴

const daySelector = document.getElementById('day-selector');
const scheduleBody = document.getElementById('schedule-body');
const routeNameDisplay = document.getElementById('route-name');

// 저장된 노선 번호 불러오기
const savedRoute = localStorage.getItem('selectedRoute') || '3202';
const savedDay = localStorage.getItem('selectedDay') || 'weekday';

// 선택한 노선과 요일에 따라 시간표 로드
function loadSchedule(route, day) {
  const schedule = busSchedules[route][day];
  scheduleBody.innerHTML = ''; // 테이블 초기화

  for (let i = 0; i < schedule.sammi_market.length; i++) {
    const row = document.createElement('tr');
    
    const sammiCell = document.createElement('td');
    sammiCell.textContent = schedule.sammi_market[i];
    row.appendChild(sammiCell);
    
    const pangyoCell = document.createElement('td');
    pangyoCell.textContent = schedule.pangyo[i];
    row.appendChild(pangyoCell);
    
    scheduleBody.appendChild(row);
  }

  routeNameDisplay.textContent = busSchedules[route].name;
}

// 초기 로드 시 저장된 노선과 요일을 불러와서 시간표 표시
const selectedRouteButton = document.querySelector(`[data-route="${savedRoute}"]`);
selectedRouteButton.classList.add('selected');
daySelector.value = savedDay;
loadSchedule(savedRoute, savedDay);

window.addEventListener('load', function() {
  const elem = document.querySelector('.table-container');
  elem.classList.add('loaded');
});

// 요일 선택 시 시간표 변경
daySelector.addEventListener('change', (e) => {
  const selectedDay = e.target.value;
  localStorage.setItem('selectedDay', selectedDay); // 선택한 요일 저장
  loadSchedule(savedRoute, selectedDay);
});

const buttons = document.getElementsByClassName('route-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('selected');
    }
    const route = e.target.getAttribute('data-route');
    e.target.classList.add('selected');
    
    localStorage.setItem('selectedRoute', route); // 선택한 노선 저장
    loadSchedule(route, savedDay);
  });
}

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register("/service-worker.js");
}