document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const sectorCards = document.querySelectorAll(".sector-card");
    const inspectButtons = document.querySelectorAll(".inspect-btn");
    const sectorModal = document.getElementById("sectorModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const htmlRoot = document.documentElement;

    let currentLang = "both"; // 'km', 'en', or 'both'

    // 1. Language Toggle (Khmer / English / Both)
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            if (currentLang === "both") {
                currentLang = "km";
                document.querySelectorAll(".km").forEach(el => el.style.display = "inline-block");
                document.querySelectorAll(".en").forEach(el => el.style.display = "none");
                langToggleBtn.innerText = "🇰🇭 ភាសាខ្មែរ";
            } else if (currentLang === "km") {
                currentLang = "en";
                document.querySelectorAll(".km").forEach(el => el.style.display = "none");
                document.querySelectorAll(".en").forEach(el => el.style.display = "inline-block");
                langToggleBtn.innerText = "🇬🇧 English";
            } else {
                currentLang = "both";
                document.querySelectorAll(".km").forEach(el => el.style.display = "");
                document.querySelectorAll(".en").forEach(el => el.style.display = "");
                langToggleBtn.innerText = "🇰🇭 / EN";
            }
        });
    }

    // 2. Dark / Light Theme Toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlRoot.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlRoot.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                htmlRoot.setAttribute("data-theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    // 3. Sector Category Filtering
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            sectorCards.forEach(card => {
                const category = card.getAttribute("data-cat");
                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden-card");
                } else {
                    card.classList.add("hidden-card");
                }
            });
        });
    });

    // 4. Sector Detail Inspector Modal
    inspectButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("modalTitle").textContent = btn.getAttribute("data-title");
            document.getElementById("modalLead").textContent = btn.getAttribute("data-lead");
            document.getElementById("modalStatus").textContent = btn.getAttribute("data-status");
            document.getElementById("modalDesc").textContent = btn.getAttribute("data-desc");
            sectorModal.classList.remove("hidden");
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            sectorModal.classList.add("hidden");
        });
    }

    if (sectorModal) {
        sectorModal.addEventListener("click", (e) => {
            if (e.target === sectorModal) {
                sectorModal.classList.add("hidden");
            }
        });
    }
});
