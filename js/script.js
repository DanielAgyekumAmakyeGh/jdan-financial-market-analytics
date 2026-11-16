
/* ==========================================================
   JDAN FINANCIAL MARKET ANALYTICS
   MAIN JAVASCRIPT FILE
   Version: 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       1. MOBILE NAVIGATION MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";

        });

        // Close menu when a navigation link is clicked

        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = "&#9776;";

            });

        });

        // Close menu when clicking outside navigation

        document.addEventListener("click", function (event) {

            const clickedInsideMenu = navigation.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = "&#9776;";

            }

        });

    }


    /* ==========================================
       2. AUTOMATIC COPYRIGHT YEAR
    ========================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* ==========================================
       3. ACTIVE NAVIGATION HIGHLIGHTING
    ========================================== */

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const allNavigationLinks = document.querySelectorAll(
        ".navigation a"
    );

    allNavigationLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* ==========================================
       4. SMOOTH SCROLLING FOR INTERNAL SECTIONS
    ========================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ==========================================
       5. WEBSITE INITIALIZATION
    ========================================== */

    console.log(
        "JDan Financial Market Analytics website initialized successfully."
    );

});
