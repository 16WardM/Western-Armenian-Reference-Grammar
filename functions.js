function redirectToSection() {
    var number = document.getElementById('numberInput').value;
    if (!isNaN(number) && number !== '' && number >= 1 && number <= 730) {
        window.location.href = '#section%20' + number;
    } else {
        alert('Please enter a valid number between 1 and 730.');
    }
}

const textBox = document.getElementById("numberInput");

textBox.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		redirectToSection();
	}
})
