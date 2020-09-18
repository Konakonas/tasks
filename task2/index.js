let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        acc[i].classList.toggle("active");
        // console.log()
        let panel = acc[i].parentElement.lastElementChild;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function checkTog() {
    let toggle = document.getElementById("tog");
    if (toggle.className.includes("on")) {
        toggle.classList.remove("on");
        toggle.classList.add("off");
        let slid = document.getElementById("slider-text-two");
        slid.style.color = "orange";
        slid = document.getElementById("slider-text-one")
        slid.style.color = "black";
    } else {
        toggle.classList.remove("off");
        toggle.classList.add("on");
        let slid = document.getElementById("slider-text-two")
        slid.style.color = "black";
        slid = document.getElementById("slider-text-one");
        slid.style.color = "orange";
    }
}

function plusOne(number) {
    if (number === 1) {
        let pos = document.querySelector(".count-one");
        pos.innerHTML = Number(pos.innerHTML) + 1;
    } else {
        let pos = document.querySelector(".count-two");
        pos.innerHTML = Number(pos.innerHTML) + 1;
    }
}
function minusOne(number) {
    if (number === 1) {
        let pos = document.querySelector(".count-one");
        if (Number(pos.innerHTML) > 0) pos.innerHTML = Number(pos.innerHTML) - 1;
    } else {
        let pos = document.querySelector(".count-two");
        if (Number(pos.innerHTML) > 0) pos.innerHTML = Number(pos.innerHTML) - 1;
    }
}
