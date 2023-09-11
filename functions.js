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
		document.getElementById('numberInput').value = '';
	}
})

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
	const scrollToTopButton = document.getElementById('scrollToTop');
	if (scrollToTopButton.style) {
		if (window.scrollY > 10) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	}
});
