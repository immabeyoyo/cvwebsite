function uploadreview() {
    console.log("Disabling contentEditable...");
    document.querySelector("#revieuwmaker #revieuwtitle").contentEditable = 'false';
    document.querySelector("#revieuwmaker #revieuw").contentEditable = 'false';

    var sourceElement = document.getElementById("revieuwmaker");
    var clonedElement = sourceElement.cloneNode(true);
    clonedElement.id = "submitted";
    var targetElement = document.getElementById('revieuws');
    targetElement.appendChild(clonedElement);

    document.querySelector("#revieuwmaker #revieuwtitle").contentEditable = 'true';
    document.querySelector("#revieuwmaker #revieuw").contentEditable = 'true';

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
