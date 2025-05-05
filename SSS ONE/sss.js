document.addEventListener("DOMContentLoaded", function () {

    const johnLink = document.getElementById("john-link");

    johnLink.addEventListener("click", function (event) {
        event.preventDefault();
        const password = prompt ("Enter Password to view john:");

        if (password === "john") {
            window.location.href = "Abdulhaq.html";
        } else {
            alert("wrong");
        }

    })
})