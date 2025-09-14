let kirbyAnimation = document.getElementById("kirby-animation");
let startButton = document.getElementById("start-button-beginning");
let startButtonTwo = document.getElementById("start-button-second");
let headerText = document.getElementById("header-text");
let colon = document.getElementById("colon");
let timerMinutes = document.getElementById("timer-minutes");
let controlTimer = document.getElementById("control-timer");
let backButton = document.getElementById("back-button-beginning");
let pauseButton = document.getElementById("pause-button-beginning");

let interval;

function subtractTimeLogic() {
    if (interval) return;
    
    interval = setInterval(() => {
        let minutes = Number(headerText.textContent);
        let seconds = Number(timerMinutes.textContent);

        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            interval = null;
            headerText.textContent = "Done! Start studying?";
            timerMinutes.style.display = "none";
            colon.style.display = "none";
            startButtonTwo.style.display = "block"
            controlTimer.style.display = "none";
            stopKirbyAnimation()
            kirbyAnimation.setAttribute("src", "./Img/kirby1.png")
        } else {
            if (seconds === 0) {
                minutes -= 1;
                seconds = 59;
            } else {
                seconds -= 1;
            }

            headerText.textContent = minutes.toString().padStart(2, "0");
            timerMinutes.textContent = seconds.toString().padStart(2, "0");
        }
    }, 1000);
}

function subtractTimeLogicTwo() {
    if (interval) return;
    
    interval = setInterval(() => {
        let minutes = Number(headerText.textContent);
        let seconds = Number(timerMinutes.textContent);

        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            interval = null;
            headerText.textContent = "Done! Start studying?";
            timerMinutes.style.display = "none";
            colon.style.display = "none";
            startButton.style.display = "block"
            controlTimer.style.display = "none";
            stopKirbyAnimation()
            kirbyAnimation.setAttribute("src", "./Img/kirby1.png")

        } else {
            if (seconds === 0) {
                minutes -= 1;
                seconds = 59;
            } else {
                seconds -= 1;
            }

            headerText.textContent = minutes.toString().padStart(2, "0");
            timerMinutes.textContent = seconds.toString().padStart(2, "0");
        }
    }, 1000);
}

let animationInterval = null;

function startKirbyAnimation() {
    if (animationInterval) return;
    
    animationInterval = setInterval(() => {
        if (kirbyAnimation.getAttribute("src") === "./Img/kirby3.png") {
            kirbyAnimation.setAttribute("src", "./Img/kirby5.png");
        } else {
            kirbyAnimation.setAttribute("src", "./Img/kirby3.png");
        }
    }, 1000);
}

function stopKirbyAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
}


startButton.addEventListener('click', () => {
    headerText.textContent = 25
    colon.textContent = ":"
    timerMinutes.textContent = 0
    startKirbyAnimation()
    startButton.style.display = "none"
    kirbyAnimation.setAttribute("src", "./Img/kirby3.png")


    timerMinutes.textContent = timerMinutes.textContent.toString().padStart(2, "0")
    headerText.textContent = headerText.textContent.toString().padStart(2, "0")

    timerMinutes.style.display = "block";
    colon.style.display = "block";

    kirbyAnimation.style.display = "block"
    backButton.style.display = "block"
    controlTimer.style.display = "flex"
    subtractTimeLogic()
})

startButtonTwo.addEventListener('click', () => {
    headerText.textContent = 5
    colon.textContent = ":"
    timerMinutes.textContent = 0
    startKirbyAnimation()
    startButton.style.display = "none"
    startButtonTwo.style.display = "none"

    kirbyAnimation.setAttribute("src", "./Img/kirby3.png")

    timerMinutes.textContent = timerMinutes.textContent.toString().padStart(2, "0")
    headerText.textContent = headerText.textContent.toString().padStart(2, "0")

    timerMinutes.style.display = "block";
    colon.style.display = "block";

    kirbyAnimation.style.display = "block"
    backButton.style.display = "block"
    controlTimer.style.display = "flex"
    subtractTimeLogicTwo()
})

backButton.addEventListener('click', () => {
    headerText.textContent = "Pomodoro Timer";
    kirbyAnimation.style.display = "block";
    startButton.style.display = "block";
    controlTimer.style.display = "none";
    timerMinutes.style.display = "none";
    colon.style.display = "none";
    isPaused = false;

    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    stopKirbyAnimation()
});

let isPaused = false;

pauseButton.addEventListener("click", () => {
  const hasStarted = interval !== null || isPaused === true;
  if (!hasStarted) return;

  if (!isPaused) {
    if (interval) { clearInterval(interval); interval = null; }
    stopKirbyAnimation();
    isPaused = true;
    kirbyAnimation.setAttribute("src", "./Img/kirby2.png");
    pauseButton.setAttribute("src", "./Img/Frame 10.svg");
  } else {
    // Resume
    subtractTimeLogic();
    startKirbyAnimation();
    isPaused = false;
    kirbyAnimation.setAttribute("src", "./Img/kirby3.png");
    pauseButton.setAttribute("src", "./Img/Frame 11.svg");
  }
});