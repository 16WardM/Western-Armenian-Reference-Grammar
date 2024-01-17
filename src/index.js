const MIN_SECTION = 1;
const MAX_SECTION = 730;

const scrollToTopButton = document.getElementById('scrollToTop');
const inputField = document.getElementById('numberInput');
const navigationPanel = document.getElementById("mySidenav");;
const navigationPanelButton = document.getElementById("contentsbtn");


const toggleButton = document.getElementById('toggleButton');
const bodyContainer = document.querySelector('.doc-content');

document.addEventListener("click", (event) => {
  if (navigationPanel.hidden) return; 

  let target = event.target;
  do {
    if (target == navigationPanel || target == navigationPanelButton) return;

    target = target.parentNode;
  } while (target);

  navigationPanel.hidden = true;
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

inputField.addEventListener("keydown", (event) => {
	if (event.keyCode === 13) {
		redirectToSection();
		inputField.value = '';
	}
})

function redirectToSection() {
  const index = Number(inputField.value);
  if (!(Number.isSafeInteger(index) && index >= MIN_SECTION && index <= MAX_SECTION)) {
    alert(`Please enter a valid number between ${MIN_SECTION} and ${MAX_SECTION}.`);
    return;
  }

  window.location.href = `#section ${index}`;
  inputField.value = '';
}

function openNav() {
  navigationPanel.removeAttribute("hidden");
}

function closeNav() {
  navigationPanel.setAttribute("hidden", "hidden");
}

document.addEventListener('DOMContentLoaded', function () {

  toggleButton.addEventListener('change', function () {
    if (toggleButton.checked) {
      bodyContainer.classList.remove('hide-hover');
    } else {
      bodyContainer.classList.add('hide-hover');
    }
  });
});