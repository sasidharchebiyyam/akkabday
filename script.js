/*==================================================
    PREMIUM BIRTHDAY WEBSITE
    script.js (PART 1)
    Loader • Page Navigation • Typewriter
==================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        showPage("landing");

    }, 2200);

});

/*=========================================
            PAGE NAVIGATION
=========================================*/

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

/*=========================================
          BUTTON REFERENCES
=========================================*/

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

/*=========================================
         LANDING → PHOTO
=========================================*/

openBtn.addEventListener("click",()=>{

    fadeToPage("photo");

});

/*=========================================
          PHOTO → WISH
=========================================*/

nextBtn.addEventListener("click",()=>{

    fadeToPage("wish");

    setTimeout(startTyping,500);

});

/*=========================================
          WISH → FINAL
=========================================*/

finishBtn.addEventListener("click",()=>{

    fadeToPage("final");

});

/*=========================================
        PAGE FADE TRANSITION
=========================================*/

function fadeToPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById(id);

    nextPage.classList.add("active");

    if (id === "wish") {
        setTimeout(startTyping, 300);
    }

}

/*=========================================
          TYPEWRITER EFFECT
=========================================*/

const message=`Happy Birthday, Akka! ❤️✨

Some people simply become a part of our college life...
But a very few become a beautiful memory we carry forever.

You are one of those rare people.

Today is your special day,
and I just wanted to create
a tiny surprise to make you smile.

May this year bring you endless happiness,
great success,
good health,
beautiful memories,
and everything you've ever wished for.

Keep smiling...
Keep shining...
Keep being the amazing person you are.

Once Again...

✨ Happy Birthday Akka ✨
With warm wishes,
Your Sasii❤️`;

const typing=document.getElementById("typing");

let index=0;
let typingStarted=false;

function startTyping(){

    if(typingStarted) return;

    typingStarted=true;

    typeLetter();

}

function typeLetter(){

    if(index<message.length){

        typing.innerHTML+=message.charAt(index);

        index++;

        typing.scrollTop=typing.scrollHeight;

        setTimeout(typeLetter,35);

    }

}

/*=========================================
        BUTTON HOVER EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

/*=========================================
      SMALL CLICK ANIMATION
=========================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(.92)"},

                {transform:"scale(1.05)"},

                {transform:"scale(1)"}

            ],

            {

                duration:250

            }

        );

    });

});

/*=========================================
      KEYBOARD SHORTCUT (OPTIONAL)
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        const active=document.querySelector(".page.active");

        if(active.id==="landing"){

            openBtn.click();

        }

        else if(active.id==="photo"){

            nextBtn.click();

        }

        else if(active.id==="wish"){

            finishBtn.click();

        }

    }

});

/*==================================================
          END OF PART 1
==================================================*/
/*==================================================
    PREMIUM BIRTHDAY WEBSITE
    script.js (PART 2)
    Hearts • Particles • Confetti
==================================================*/

/*=========================================
            FLOATING HEARTS
=========================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";
    heart.style.opacity = 0.4 + Math.random() * 0.6;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 350);

/*=========================================
          GOLDEN PARTICLES
=========================================*/

const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.bottom = "-20px";

    const size = 2 + Math.random() * 5;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    particle.style.opacity =
        0.3 + Math.random() * 0.7;

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 10000);

}

setInterval(createParticle, 180);

/*=========================================
            CONFETTI
=========================================*/

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let confetti = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

class Confetti {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;

        this.size = 4 + Math.random() * 8;

        this.speed = 2 + Math.random() * 4;

        this.angle = Math.random() * Math.PI * 2;

        this.rotate = Math.random() * 360;

        this.color = [

            "#FFD700",
            "#ffffff",
            "#ff5fa2",
            "#ff9500"

        ][Math.floor(Math.random() * 4)];

    }

    update() {

        this.y += this.speed;

        this.x += Math.sin(this.angle);

        this.rotate += 4;

        if (this.y > canvas.height + 20) {

            this.y = -20;
            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotate * Math.PI / 180);

        ctx.fillStyle = this.color;

        ctx.fillRect(
            -this.size / 2,
            -this.size / 2,
            this.size,
            this.size
        );

        ctx.restore();

    }

}

function createConfetti() {

    for (let i = 0; i < 180; i++) {

        confetti.push(new Confetti());

    }

}

createConfetti();

function animateConfetti() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    confetti.forEach(piece => {

        piece.update();
        piece.draw();

    });

    requestAnimationFrame(animateConfetti);

}

animateConfetti();

/*=========================================
      FINAL PAGE CONFETTI BOOST
=========================================*/

finishBtn.addEventListener("click", () => {

    for (let i = 0; i < 120; i++) {

        confetti.push(new Confetti());

    }

});

/*=========================================
      RANDOM GLOW ON BUTTONS
=========================================*/

setInterval(() => {

    document.querySelectorAll("button").forEach(btn => {

        btn.animate(

            [
                {
                    boxShadow:
                        "0 0 20px rgba(255,215,0,.2)"
                },
                {
                    boxShadow:
                        "0 0 45px rgba(255,215,0,.8)"
                },
                {
                    boxShadow:
                        "0 0 20px rgba(255,215,0,.2)"
                }

            ],

            {

                duration: 1800

            }

        );

    });

}, 2500);

/*==================================================
              END OF PART 2
==================================================*/
/*==================================================
    PREMIUM BIRTHDAY WEBSITE
    script.js (PART 3)
    Final Polish • Effects • Optimization
==================================================*/

/*=========================================
        SMOOTH SCROLL PREVENTION
=========================================*/

document.addEventListener("wheel", (e) => {

    if (document.body.style.overflow === "hidden") {

        e.preventDefault();

    }

}, { passive: false });

/*=========================================
        CARD FLOAT EFFECT
=========================================*/

document.querySelectorAll(".glass, .wishCard, .finalCard").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*=========================================
        PHOTO PULSE
=========================================*/

const photo = document.querySelector(".photoRing");

if (photo) {

    setInterval(() => {

        photo.animate(

            [
                { transform: "scale(1)" },
                { transform: "scale(1.05)" },
                { transform: "scale(1)" }

            ],

            {
                duration: 1800
            }

        );

    }, 2500);

}

/*=========================================
        FINAL TITLE GLOW
=========================================*/

const finalTitle = document.querySelector(".finalCard h1");

if (finalTitle) {

    setInterval(() => {

        finalTitle.animate(

            [

                {
                    letterSpacing: "2px",
                    filter: "drop-shadow(0 0 10px gold)"
                },

                {
                    letterSpacing: "6px",
                    filter: "drop-shadow(0 0 35px gold)"
                },

                {
                    letterSpacing: "2px",
                    filter: "drop-shadow(0 0 10px gold)"
                }

            ],

            {

                duration: 2500

            }

        );

    }, 2600);

}

/*=========================================
        PAGE FADE-IN
=========================================*/

pages.forEach(page => {

    page.addEventListener("transitionend", () => {

        page.style.willChange = "auto";

    });

});

/*=========================================
        MOBILE TOUCH FEEDBACK
=========================================*/

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("touchstart", () => {

        btn.style.transform = "scale(.95)";

    });

    btn.addEventListener("touchend", () => {

        btn.style.transform = "";

    });

});

/*=========================================
        CELEBRATION MESSAGE
=========================================*/

finishBtn.addEventListener("click", () => {

    setTimeout(() => {

        const note = document.createElement("div");

        note.innerHTML = "🎉 Have a Wonderful Birthday! 🎂";

        note.style.position = "fixed";
        note.style.top = "40px";
        note.style.left = "50%";
        note.style.transform = "translateX(-50%)";

        note.style.padding = "15px 28px";
        note.style.borderRadius = "50px";

        note.style.background = "rgba(255,255,255,.12)";
        note.style.backdropFilter = "blur(10px)";
        note.style.color = "#FFD700";
        note.style.fontSize = "20px";
        note.style.fontWeight = "600";
        note.style.zIndex = "99999";

        document.body.appendChild(note);

        setTimeout(() => {

            note.animate(

                [

                    {
                        opacity: 1,
                        transform: "translateX(-50%) translateY(0)"
                    },

                    {
                        opacity: 0,
                        transform: "translateX(-50%) translateY(-40px)"
                    }

                ],

                {

                    duration: 1200,
                    fill: "forwards"

                }

            );

            setTimeout(() => {

                note.remove();

            }, 1200);

        }, 2500);

    }, 600);

});

/*=========================================
        PERFORMANCE CLEANUP
=========================================*/

window.addEventListener("beforeunload", () => {

    document.querySelectorAll(".heart").forEach(el => el.remove());
    document.querySelectorAll(".particle").forEach(el => el.remove());

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(
`🎂 Premium Birthday Website Loaded Successfully
Made with ❤️ using HTML, CSS & JavaScript`
);

/*==================================================
              END OF SCRIPT.JS
==================================================*/