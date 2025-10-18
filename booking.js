document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  const address = document.getElementById('address').value;
  const pkg = document.getElementById('package').value;
  const tracking = 'EXC-' + Math.floor(100000 + Math.random() * 900000);

  const booking = { sender, receiver, address, pkg, tracking, status: 'Registered' };
  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  document.getElementById('confirmation').classList.remove('hidden');
  document.getElementById('trackingNumber').textContent = tracking;
  this.reset();
});
