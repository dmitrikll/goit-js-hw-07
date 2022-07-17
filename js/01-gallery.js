import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const ClickOnContainer = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();

};

galleryContainer.addEventListener("click", ClickOnContainer);

