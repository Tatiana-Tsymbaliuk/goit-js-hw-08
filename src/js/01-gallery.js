// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryItemsList = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryItemsList);

function createGalleryItems(galleryItems){
return galleryItems
        .map(({ preview, original, description }) => {
return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`; }).join('');        
};
const lightbox = new SimpleLightbox(`.gallery__item`, { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });