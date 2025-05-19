document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("Ahmod");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view Ahmod's Result:");

        if (password === "ahmod001") {
            window.location.href = "Ahmod.html";
        } else {
            alert("wrong Password!");
        }

    })
})