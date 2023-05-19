import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup.join(""));

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const openModal = basicLightbox.create(
    `<img src=${event.target.dataset.source} >`
  );

  openModal.show();
}
