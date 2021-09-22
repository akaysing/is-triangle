const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const message = document.querySelector(".display-message");

const buttonCheck = document.querySelector(".btn-check");

buttonCheck.addEventListener("click", function checkTriangle(){
    hideMessage();
    const sumOfAngles = firstAngle.value + secondAngle.value + thirdAngle.value ;
    if(sumOfAngles > 180){
          showMessage("Yayy, the angles form a triangle");
    }
    else {
        showMessage("Oh! no, the angles do not form a triangle");
    }

    function hideMessage(){
        message.style.display = "none";
    }

    function showMessage(msg){
        message.style.display = "block";
        message.innerText = msg;
    }

    
})