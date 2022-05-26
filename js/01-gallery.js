import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


const images = galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
        <a  class="gallery__link" href="${original}">
        <img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'</img>
        </a></div>`
).join('');
    
gallery.insertAdjacentHTML('beforeend',images);

// open
gallery.addEventListener('click', openGallery);

function openGallery(e) {
    e.preventDefault()
    
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
    instance.show()
};

//close
