document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("Abdulwasiu");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view Abdulwasiu's Result:");

        if (password === "abdulwasiu10") {
            window.location.href = "Abdulwasiu.html";
        } else {
            alert("wrong Password!");
        }

    })
})