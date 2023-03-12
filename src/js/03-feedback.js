import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

 

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
 console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  
}

function dataLocalStorage() {
const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
dataLocalStorage();