import './styles.css';
import updatePicture from './js/updatePics.js';
import fetchPics from './js/apiService.js';

const formRef = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
const inputRef = document.querySelector('input[name=query]');
const btnRef = document.querySelector('.more-btn');

let searchQuery = '';
let page = 1;

formRef.addEventListener('submit', event => {
  event.preventDefault();
  searchQuery = inputRef.value;

  galleryRef.innerHTML = '';

  page = 1;
  
  fetchPics(searchQuery, page).then(pics => {
    updatePicture(pics);
    page = page + 1;
  });

  if (searchQuery) {
    btnRef.classList.add('btn_visibility');
  } else {
    galleryRef.innerHTML = '';
    btnRef.classList.remove('btn_visibility');
  }
});

btnRef.addEventListener('click', event => {
  fetchPics(searchQuery, page).then(pics => {
    updatePicture(pics);
    page = page + 1;

    scroll()
  });
})

function scroll() {
  const coordY = btnRef.scrollY + btnRef.innerHeight - 98;

     window.scrollTo({
    top: coordY,
    behavior: 'smooth',
  });
}
