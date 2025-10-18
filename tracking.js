document.getElementById('trackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const trackID = document.getElementById('trackInput').value.trim();
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  const found = bookings.find(b => b.tracking === trackID);

  const result = document.getElementById('result');
  const progress = document.getElementById('progress');
  const statusText = document.getElementById('statusText');

  if (!found) {
    alert('Tracking number not found.');
    return;
  }

  result.classList.remove('hidden');
  let stages = ['Package Registered', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered'];
  let index = 0;
  statusText.textContent = stages[index];
  progress.style.width = '0%';

  const interval = setInterval(() => {
    index++;
    if (index < stages.length) {
      progress.style.width = `${(index / (stages.length - 1)) * 100}%`;
      statusText.textContent = stages[index];
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
