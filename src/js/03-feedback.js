import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const dataUser = {};

const refs = document.querySelector('.js-feedback-form');

refs.addEventListener('submit', onFormSubmit);
refs.addEventListener('input', throttle(onFormInput, 500));
populateTextarea();

function onFormInput(event) {
    dataUser[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser))
};

function onFormSubmit(event) {
    event.preventDefault();  //  Страница не перезагружаеться
    const dataUserStorage = localStorage.getItem(STORAGE_KEY);
    const dataMessageInform = JSON.parse(dataUserStorage);

    if (!dataMessageInform) {
        return alert("Поля должны быть заполнены");
    }
    if (!dataMessageInform.email) {
        return alert("Поле 'Email' должно быть заполнено");
    }
    if (!dataMessageInform.message) {
        return alert("Поле 'Message' должно быть заполнено");
    }
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataMessageInform);
    refs.reset();
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY)
    
  if (savedMessage) {
    const newUserData = JSON.parse(savedMessage);
      if (newUserData.email) {
          refs.email.value = newUserData.email;
      }
      if (newUserData.message) {
          refs.message.value = newUserData.message;
      }
  }
}