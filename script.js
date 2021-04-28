var z = document.querySelector("#reqnumber");
var y = z.textContent;

function addButton(element) {
    console.log(element);
    element.parentElement.parentElement.remove();
    
    // line below lower connection request number
    z.innerText = y - 1;
    y -= 1;
    
    // lines below increase Your Connections number
    var x = document.querySelector("#totalconNumber");
    var j = x.textContent;
    var temp = parseInt(j) // j kept turning into a string, did this to fix it

    x.innerText = temp + 1;
    temp += 1;
    console.log(temp);
}

function remButton(element) {
    console.log(element);
    element.parentElement.parentElement.remove();
    z.innerText = y - 1;
    y -= 1;
}

function editName() {
    newname.style.display = "flex";

}

function addNewName() {
    var change = document.querySelector("#newnamebox").value;
    document.querySelector(".username").innerText = change;
    newname.style.display = "none";
}