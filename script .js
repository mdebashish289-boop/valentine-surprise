const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const main = document.getElementById("main");
const success = document.getElementById("success");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    main.classList.add("hidden");
    success.classList.remove("hidden");
    launchConfetti();
});

function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}