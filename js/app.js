let inputs = document.querySelectorAll(".input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", function (event) {
        if ((event.charCode >= 48 && event.charCode <= 57)) {
            event.preventDefault();
        }
    });
}