let btn = document.querySelector(".up");
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".box .num")
let started = false;

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }

    if (window.scrollY >= section.offsetTop - 90) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num)=> {startcount(num)})
        }
        started = true;
    }
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

function startcount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
        e.textContent++
        if (e.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}
