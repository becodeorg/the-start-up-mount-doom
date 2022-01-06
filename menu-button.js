let menuActive = 0;

const menuButtonElem = document.getElementById("menuButton");
menuButtonElem.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menuActive === 0) {
        document.getElementById("nav").classList.remove("hidden");

        const menuIconLine1 = document.getElementById("line-1");
        menuIconLine1.classList.add("line-1-toggled-form");
        const menuIconLine2 = document.getElementById("line-2");
        menuIconLine2.classList.add("line-2-toggled-form");
        const menuIconLine3 = document.getElementById("line-3");
        menuIconLine3.classList.add("line-3-toggled-form");

        menuActive = 1;
    } else {
        document.getElementById("nav").classList.add("hidden");

        const menuIconLine1 = document.getElementById("line-1");
        menuIconLine1.classList.remove("line-1-toggled-form");
        const menuIconLine2 = document.getElementById("line-2");
        menuIconLine2.classList.remove("line-2-toggled-form");
        const menuIconLine3 = document.getElementById("line-3");
        menuIconLine3.classList.remove("line-3-toggled-form");

        menuActive = 0;
    }
}