import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", ClickOnContainer);

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

function ClickOnContainer(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {

    const source = event.target.dataset.source;
  
    instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`,
      {
        onShow: () =>
          galleryContainer.addEventListener(
            'keydown',
            onEscClose,
          ),
        onClose: () =>
          galleryContainer.removeEventListener(
            'keydown',
            onEscClose,
          ),
      }
  );
    instance.show();
  };
};

function onEscClose(event) {
    if (event.code === 'Escape') {
      instance.close();
  };
};