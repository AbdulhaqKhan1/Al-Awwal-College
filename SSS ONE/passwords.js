document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("Abdulhaq");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view Abdulhaq's Result:");

        if (password === "abdulhaq_") {
            window.location.href = "Abdulhaq.html";
        } else {
            alert("wrong Password!");
        }

    })
})

document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("Abdulmuiz");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view Abdulmuiz's Result:");

        if (password === "abdulmuiz0") {
            window.location.href = "Abdulmuiz.html";
        } else {
            alert("wrong Password!");
        }

    })
})