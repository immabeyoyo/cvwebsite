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
    document.querySelector("#submitted #star1").pointer

}
function button1(){
    console.log("Button 1 pressed");
    const button1 = document.getElementById('star1');
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.getElementById('star2');
    button2.style.backgroundImage = "url('star.png')";
    const button3 = document.getElementById('star3');
    button3.style.backgroundImage = "url('star.png')";
    const button4 = document.getElementById('star4')
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.getElementById('star5')
    button5.style.backgroundImage = "url('star.png')";
}
function button2(){
    const button1 = document.getElementById('star1');
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.getElementById('star2');
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.getElementById('star3');
    button3.style.backgroundImage = "url('star.png')";
    const button4 = document.getElementById('star4')
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.getElementById('star5')
    button5.style.backgroundImage = "url('star.png')";
}
function button3(){
    const button1 = document.getElementById('star1');
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.getElementById('star2');
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.getElementById('star3');
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.getElementById('star4')
    button4.style.backgroundImage = "url('star.png')";
    const button5 = document.getElementById('star5')
    button5.style.backgroundImage = "url('star.png')";
}
function button4(){
    const button1 = document.getElementById('star1');
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.getElementById('star2');
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.getElementById('star3');
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.getElementById('star4')
    button4.style.backgroundImage = "url('star (1).png')";
    const button5 = document.getElementById('star5')
    button5.style.backgroundImage = "url('star.png')";
}
function button5(){
    const button1 = document.getElementById('star1');
    button1.style.backgroundImage = "url('star (1).png')";
    const button2 = document.getElementById('star2');
    button2.style.backgroundImage = "url('star (1).png')";
    const button3 = document.getElementById('star3');
    button3.style.backgroundImage = "url('star (1).png')";
    const button4 = document.getElementById('star4')
    button4.style.backgroundImage = "url('star (1).png')";
    const button5 = document.getElementById('star5')
    button5.style.backgroundImage = "url('star (1).png')";
}
