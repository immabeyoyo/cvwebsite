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