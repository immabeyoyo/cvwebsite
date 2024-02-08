function uploadreview() {
    document.querySelector("#reviewmaker #reviewtitle").contentEditable = 'false';
    document.querySelector("#reviewmaker #review").contentEditable = 'false';

    var sourceElement = document.getElementById("reviewmaker");
    var clonedElement = sourceElement.cloneNode(true);
    clonedElement.id = "submitted";
    var targetElement = document.getElementById('reviews');
    targetElement.appendChild(clonedElement);

    document.querySelector("#reviewmaker #reviewtitle").contentEditable = 'true';
    document.querySelector("#reviewmaker #review").contentEditable = 'true';
    document.querySelector("#submitted #star1").disabled = true;
    document.querySelector("#submitted #star2").disabled = true;
    document.querySelector("#submitted #star3").disabled = true;
    document.querySelector("#submitted #star4").disabled = true;
    document.querySelector("#submitted #star5").disabled = true;

}
function button1(){
    console.log("Button 1 pressed");
    const button1 = document.querySelector("#reviewmaker #star1")
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.querySelector("#reviewmaker #star2")
    button2.style.backgroundImage = "url('star.png')";
    const button3 = document.querySelector("#reviewmaker #star3")
    button3.style.backgroundImage = "url('star.png')";
    const button4 = document.querySelector("#reviewmaker #star4")
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.querySelector("#reviewmaker #star5")
    button5.style.backgroundImage = "url('star.png')";
}
function button2(){
    const button1 = document.querySelector("#reviewmaker #star1")
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.querySelector("#reviewmaker #star2")
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.querySelector("#reviewmaker #star3")
    button3.style.backgroundImage = "url('star.png')";
    const button4 = document.querySelector("#reviewmaker #star4")
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.querySelector("#reviewmaker #star5")
    button5.style.backgroundImage = "url('star.png')";
}
function button3(){
    const button1 = document.querySelector("#reviewmaker #star1")
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.querySelector("#reviewmaker #star2")
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.querySelector("#reviewmaker #star3")
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.querySelector("#reviewmaker #star4")
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.querySelector("#reviewmaker #star5")
    button5.style.backgroundImage = "url('star.png')";
}
function button4(){
    const button1 = document.querySelector("#reviewmaker #star1")
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.querySelector("#reviewmaker #star2")
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.querySelector("#reviewmaker #star3")
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.querySelector("#reviewmaker #star4")
    button4.style.backgroundImage = "url('star (1).png')";
    const button5 = document.querySelector("#reviewmaker #star5")
    button5.style.backgroundImage = "url('star.png')";
}
function button5(){
    const button1 = document.querySelector("#reviewmaker #star1")
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.querySelector("#reviewmaker #star2")
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.querySelector("#reviewmaker #star3")
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.querySelector("#reviewmaker #star4")
    button4.style.backgroundImage = "url('star (1).png')";
    const button5 = document.querySelector("#reviewmaker #star5")
    button5.style.backgroundImage = "url('star (1).png')";
}
