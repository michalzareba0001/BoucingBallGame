const gameboard = document.getElementById('gameboard');
let floor = document.getElementById("floor");
let floorBottom = parseInt(window.getComputedStyle(floor).getPropertyValue("bottom"));
let floorHeight = parseInt(window.getComputedStyle(floor).getPropertyValue("height"));
let ball = document.getElementById("ball");
let ballBottom = parseInt(window.getComputedStyle(ball).getPropertyValue("bottom"));
let ballHeight = parseInt(window.getComputedStyle(ball).getPropertyValue("height"));
let ballRight = parseInt(window.getComputedStyle(ball).getPropertyValue("right"));
let ballWidth = parseInt(window.getComputedStyle(ball).getPropertyValue("width"));
let isJumping = false;
let upTime;
let downTime;


console.log(ballRight);

function jump() {
    if (isJumping) return;
    upTime = setInterval(() => {
        if (ballBottom >= floorHeight +250) {
            clearInterval(upTime);
            downTime = setInterval(() => {
                if (ballBottom <= floorHeight + 10) {
                    clearInterval(downTime);
                    isJumping = false;
                }
                ballBottom -= 10;
                ball.style.bottom = ballBottom + "px";
            }, 20)
           
        }
        ballBottom += 10;
        ball.style.bottom = ballBottom + "px";
        isJumping = true;
}, 20);
}

function moveBallRight() {
    ballRight -= 10;
    ball.style.right = ballRight + "px";
}

function moveBallLeft() {
    ballRight += 10;
    ball.style.right = ballRight + "px";
}

function control(e){
    if (e.key == "ArrowUp" || e.key == " ") {
        jump();
    }
    if (e.key == "ArrowRight") {
        moveBallRight();
    }
    if (e.key == "ArrowLeft") {
        moveBallLeft();
    }
}

document.addEventListener("keydown", control);








