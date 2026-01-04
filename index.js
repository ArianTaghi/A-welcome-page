let userName;

document.getElementById("myButton").onclick = function() {
    userName = document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("sih").textContent = `Hello ${userName}`
}
