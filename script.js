// ===== Display Current Time in Milliseconds =====
const timeElement = document.getElementById("time");

function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// ===== Handle Avatar Upload =====
const fileInput = document.getElementById("avatarUpload");
const avatarImg = document.querySelector("[data-testid='test-user-avatar']");

if (fileInput && avatarImg) {
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        avatarImg.src = e.target.result; // display uploaded image
      };
      reader.readAsDataURL(file);
    }
  });
}

// Initial display
updateTime();

// Update every 1 second (1000 ms)
setInterval(updateTime, 1000);
