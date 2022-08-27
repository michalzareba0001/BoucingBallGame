var gameboard = document.getElementById('gameboard');
var floor = document.getElementById("floor");
var floorBottom = parseInt(window.getComputedStyle(floor).getPropertyValue("bottom"));
var floorHeight = parseInt(window.getComputedStyle(floor).getPropertyValue("height"));
var floor1 = document.getElementById("floor1");
var floor1Bottom = parseInt(window.getComputedStyle(floor1).getPropertyValue("bottom"));
var floor1Height = parseInt(window.getComputedStyle(floor1).getPropertyValue("height"));
var floor1Right = parseInt(window.getComputedStyle(floor1).getPropertyValue("right"));
var floor1Width = parseInt(window.getComputedStyle(floor1).getPropertyValue("width"));
var floor2Bottom = parseInt(window.getComputedStyle(floor2).getPropertyValue("bottom"));
var floor2Height = parseInt(window.getComputedStyle(floor2).getPropertyValue("height"));
var floor2Right = parseInt(window.getComputedStyle(floor2).getPropertyValue("right"));
var floor2Width = parseInt(window.getComputedStyle(floor2).getPropertyValue("width"));
var floor3Bottom = parseInt(window.getComputedStyle(floor3).getPropertyValue("bottom"));
var floor3Height = parseInt(window.getComputedStyle(floor3).getPropertyValue("height"));
var floor3Right = parseInt(window.getComputedStyle(floor3).getPropertyValue("right"));
var floor3Width = parseInt(window.getComputedStyle(floor3).getPropertyValue("width"));
var ball = document.getElementById("ball");
var ballBottom = parseInt(window.getComputedStyle(ball).getPropertyValue("bottom"));
var ballHeight = parseInt(window.getComputedStyle(ball).getPropertyValue("height"));
var ballRight = parseInt(window.getComputedStyle(ball).getPropertyValue("right"));
var ballWidth = parseInt(window.getComputedStyle(ball).getPropertyValue("width"));
var isJumping = false;
var upTime;
var downTime;
var floorPosChange = 7;
var floor2PosChange = 15;
var floor3PosChange = 10;
var floor1Interval = setInterval(moveFloor1, 20);
var floor2Interval = setInterval(moveFloor2, 20);
var floor3Interval = setInterval(moveFloor3, 20);
function jump() {
    if (isJumping)
        return;
    upTime = setInterval(function () {
        if (ballBottom >= floorHeight + 250) {
            clearInterval(upTime);
            downTime = setInterval(function () {
                if (ballBottom <= floor1Bottom + floor1Height && ballRight >= floor1Right && ballRight <= floor1Right + floor1Width) {
                    ballBottom = floor1Bottom + floor1Height + 10;
                }
                else if (ballBottom <= floorHeight + 10) {
                    clearInterval(downTime);
                    isJumping = false;
                }
                ballBottom -= 10;
                ball.style.bottom = ballBottom + "px";
            }, 20);
        }
        ballBottom += 10;
        ball.style.bottom = ballBottom + "px";
        isJumping = true;
    }, 20);
    ballOnfloor1();
}
function moveBallRight() {
    ballRight -= 10;
    ball.style.right = ballRight + "px";
    if (ballRight <= 0) {
        ballRight = 0;
        ball.style.right = ballRight + "px";
    }
}
function moveBallLeft() {
    ballRight += 10;
    ball.style.right = ballRight + "px";
    if (ballRight >= gameboard.offsetWidth - ballWidth) {
        ballRight = gameboard.offsetWidth - ballWidth;
        ball.style.right = ballRight + "px";
    }
}
function ballOnfloor1() {
    {
        return false;
    }
}
function control(e) {
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
function moveFloor1() {
    floor1Right = floor1Right - floorPosChange;
    floor1.style.right = floor1Right + "px";
    if (floor1Right <= 0) {
        floorPosChange = -floorPosChange;
        floor1.style.right = floor1Right + "px";
    }
    if (floor1Right >= gameboard.offsetWidth - floor1Width) {
        floorPosChange = -floorPosChange;
        floor1.style.right = floor1Right + "px";
    }
}
function moveFloor2() {
    floor2Right = floor2Right - floor2PosChange;
    floor2.style.right = floor2Right + "px";
    if (floor2Right <= 0) {
        floor2PosChange = -floor2PosChange;
        floor2.style.right = floor2Right + "px";
    }
    if (floor2Right >= gameboard.offsetWidth - floor2Width) {
        floor2PosChange = -floor2PosChange;
        floor2.style.right = floor2Right + "px";
    }
}
function moveFloor3() {
    floor3Right = floor3Right - floor3PosChange;
    floor3.style.right = floor3Right + "px";
    if (floor3Right <= 0) {
        floor3PosChange = -floor3PosChange;
        floor3.style.right = floor3Right + "px";
    }
    if (floor3Right >= gameboard.offsetWidth - floor3Width) {
        floor3PosChange = -floor3PosChange;
        floor3.style.right = floor3Right + "px";
    }
}
document.addEventListener("keydown", control);
