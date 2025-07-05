// Dark Mode Toggle
const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Toggle icon
  if (document.body.classList.contains('dark')) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Optional: Contact form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting!");
});
