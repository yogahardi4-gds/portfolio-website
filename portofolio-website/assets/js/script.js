// ================= SIMPLE MESSAGE WHEN PAGE IS OPENED =================
alert("Welcome to My Portfolio!");

// ================= PORTOFOLIO CARD HOVER INTERACTION =================
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
    });
});