const d = document;

const storageInputs = d.querySelectorAll('.storage');
const button = d.querySelector('.enviar');

storageInputs.forEach((input, index) => {
  const storedValue = localStorage.getItem(`textinput${index}`);
  if (storedValue) {
    input.value = storedValue;
  }
});

const saveToLocalStorage = () => {
  storageInputs.forEach((input, index) => {
    localStorage.setItem(`textinput${index}`, input.value);
  });
};

button.addEventListener('click', saveToLocalStorage);

button.addEventListener('click', function(){
  button.textContent = 'Registrado';
  button.style.backgroundColor = 'red';
  button.disabled = true;
  button.style.borderBottom = '4px solid #6d0000';

  setTimeout(() => {
    window.location.href = "store.html";
  }, 2000);
})
