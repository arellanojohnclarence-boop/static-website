// THE SECRET LIFE OF JOHN CLARENCE ARELLANO
// 1. Live digital clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-PH', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  });
  const date = now.toLocaleDateString('en-PH', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('liveClock').textContent = time;
  document.getElementById('liveDate').textContent = date;
}
updateClock();
setInterval(updateClock, 1000);

// 2. Birthday countdown — February 1, 2027
function updateBirthdayCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 1, 1, 0, 0, 0);
  if (now >= target) target = new Date(now.getFullYear() + 1, 1, 1, 0, 0, 0);

  const difference = target - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateBirthdayCountdown();
setInterval(updateBirthdayCountdown, 1000);

// 3. Interactive welcome button
const welcomeBtn = document.getElementById('welcomeBtn');
const toast = document.getElementById('toast');
let toastTimer;
welcomeBtn.addEventListener('click', () => {
  toast.textContent = 'Hey! Glad you stopped by. Welcome to my little corner of the internet.';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
});

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Back-to-top button
const topButton = document.getElementById('topButton');
window.addEventListener('scroll', () => {
  topButton.classList.toggle('show', window.scrollY > 600);
});
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
