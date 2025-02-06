const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const errorMessage = document.getElementById("error-message");

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <h1>Obviously! 😏 I knew you would say YES! 💖</h1>
        <p>You're the best! 🥺💞</p>
    `;
});

noBtn.addEventListener("click", () => {
    noBtn.style.display = "none"; // Hide "No" button
    errorMessage.classList.remove("hidden"); // Show message
});
