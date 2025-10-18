document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const confirmation = document.getElementById('confirmation');
  const trackingSpan = document.getElementById('trackingNumber');

  if (!form) {
    console.error('Booking form not found.');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const sender = document.getElementById('sender').value.trim();
    const receiver = document.getElementById('receiver').value.trim();
    const address = document.getElementById('address').value.trim();
    const pkg = document.getElementById('package').value.trim();

    if (!sender || !receiver || !address || !pkg) {
      alert('Please fill out all fields.');
      return;
    }

    const tracking = 'EXC-' + Math.floor(100000 + Math.random() * 900000);
    const booking = { sender, receiver, address, pkg, tracking, status: 'Registered' };

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    confirmation.classList.remove('hidden');
    trackingSpan.textContent = tracking;
    form.reset();
  });
});
