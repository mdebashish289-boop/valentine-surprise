const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const main = document.getElementById("main");
const success = document.getElementById("success");

let isMoving = false;

// Detect finger or cursor getting close
document.addEventListener("mousemove", evade);
document.addEventListener("touchmove", (e) => evade(e.touches[0]));

function evade(e) {
  if (isMoving) return;

  const btnRect = noBtn.getBoundingClientRect();
  const dx = e.clientX - (btnRect.left + btnRect.width / 2);
  const dy = e.clientY - (btnRect.top + btnRect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    isMoving = true;

    const moveX = (Math.random() - 0.5) * 220;
    const moveY = (Math.random() - 0.5) * 120;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    setTimeout(() => {
      isMoving = false;
    }, 300);
  }
}

// Absolute block on NO click 😈
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

// YES logic
yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  success.classList.remove("hidden");
});