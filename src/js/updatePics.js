import cardTpl from '../template/card-template.hbs';

const galleryRef = document.querySelector('.gallery');

function updatePicture(pics) {
    const marcup = cardTpl(pics);

    galleryRef.insertAdjacentHTML('beforeend', marcup);

}

export default updatePicture;


