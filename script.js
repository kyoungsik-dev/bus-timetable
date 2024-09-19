// 버스 시간표 데이터를 busSchedules.js에서 가져옴

const routeSelector = document.getElementById('route-selector');
const daySelector = document.getElementById('day-selector');
const scheduleBody = document.getElementById('schedule-body');

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
}

// 초기 로드 시 저장된 노선과 요일을 불러와서 시간표 표시
routeSelector.value = savedRoute;
daySelector.value = savedDay;
loadSchedule(savedRoute, savedDay);

// 노선 선택 시 시간표 변경
routeSelector.addEventListener('change', (e) => {
  const selectedRoute = e.target.value;
  localStorage.setItem('selectedRoute', selectedRoute); // 선택한 노선 저장
  loadSchedule(selectedRoute, daySelector.value);
});

// 요일 선택 시 시간표 변경
daySelector.addEventListener('change', (e) => {
  const selectedDay = e.target.value;
  localStorage.setItem('selectedDay', selectedDay); // 선택한 요일 저장
  loadSchedule(routeSelector.value, selectedDay);
});
