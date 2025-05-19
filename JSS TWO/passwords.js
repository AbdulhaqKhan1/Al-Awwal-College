document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("Mahmud");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view Mahmud's Result:");

        if (password === "Mahmud657") {
            window.location.href = "Mahmud.html";
        } else {
            alert("wrong Password!");
        }

    })
})