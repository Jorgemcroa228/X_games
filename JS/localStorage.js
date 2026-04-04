const d = document;

const storageInput = d.querySelector('.storage');
const button = d.querySelector('.enviar');
const storedInput = localStorage.getItem('textinput');

const saveToLocalStorage = () => {
  localStorage.setItem('textinput', Text.textContent)
}

if(storageInput) {
  text.textContent = storedInput
}

button.addEventListener('click',  saveToLocalStorage) 