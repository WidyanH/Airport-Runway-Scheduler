// script.js
const planeCount = 20;
const airlineCodes = ['UA', 'DL', 'AA', 'SW', 'BA', 'AF', 'EK', 'LH', 'QF', 'CX'];

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function generateFlightNumber(index) {
  const airline = airlineCodes[index % airlineCodes.length];
  const number = (Math.floor(Math.random() * 900) + 100); // random 3-digit number
  return `${airline}${number}`;
}

function createPlanes() {
  let planes = [];
  for (let i = 0; i < planeCount; i++) {
    planes.push({
      flight: generateFlightNumber(i),
      arrival: 300 + (i * 3),
      type: i % 2 === 0 ? 'Landing' : 'Takeoff',
      runway: i % 2 === 0 ? 'A1' : 'B2'
    });
  }
  return planes;
}

function addToTable(tableId, plane, slot, status) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${plane.flight}</td>
    <td>${plane.type}</td>
    <td>${formatTime(slot)}</td>
    <td>${plane.runway}</td>
    <td>${status}</td>
  `;
  document.getElementById(tableId).appendChild(row);
}

function inefficientSchedule(planes, tableId) {
  let slots = new Array(1440).fill(0);
  let delay = 0;
  planes.forEach((plane) => {
    for (let t = plane.arrival; t < 1440; t++) {
      if (slots[t] === 0) {
        slots[t] = 1;
        setTimeout(() => addToTable(tableId, plane, t, 'Scheduled'), delay);
        break;
      }
    }
    delay += 200;
  });
}

function optimizedSchedule(planes, tableId) {
  let slots = new Array(1440).fill(0);
  let nextSlot = 300;
  let delay = 0;
  planes.forEach((plane) => {
    let slot = Math.max(plane.arrival, nextSlot);
    slots[slot] = 1;
    setTimeout(() => addToTable(tableId, plane, slot, 'Scheduled'), delay);
    nextSlot = slot + 1;
    delay += 100;
  });
}

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('inefficientTable').innerHTML = '';
  document.getElementById('optimizedTable').innerHTML = '';
  const planes = createPlanes();
  inefficientSchedule(planes, 'inefficientTable');
  optimizedSchedule(planes, 'optimizedTable');
});