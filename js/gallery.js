const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
let idx = 0;
const galery = document.querySelector(".gallery");
const galeryItems = images
  .map(
    (element, idx) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${element.original}">
            <img
            class="gallery-image"
            src="${element.preview}"
            data-source="${element.original}"
            data-id="${idx + 1}"
            alt="${element.description}"
            />
        </a>
    </li>`
  )
  .join("");
galery.insertAdjacentHTML("beforeend", galeryItems);

document.querySelector(".gallery").onclick = (e) => {
  e.preventDefault();
  if (e.currentTarget != e.target) {
    displayImage(e.target);
  }
};

function displayImage(imageEl) {
  function closeGalery() {
    galeryImage.close();
  }

  function getElement(elId, isNext) {
    let elIdInt = Number(elId);
    const len = images.length;
    if (elIdInt % len === 0 && isNext) {
      elIdInt = 0;
    }
    if (elIdInt === 1 && !isNext) {
      elIdInt = len + 1;
    }
    let newElId = isNext ? elIdInt + 1 : elIdInt - 1;
    console.log("newID:", newElId);
    const tragetElment = document.querySelector(`[data-id="${newElId}"]`);
    return tragetElment;
  }
  function showNext() {
    closeGalery();
    const next = getElement(imageEl.dataset.id, true);
    displayImage(next);
  }

  function showPrev() {
    closeGalery();
    const prev = getElement(imageEl.dataset.id, false);
    displayImage(prev);
  }

  const galeryImage = basicLightbox.create(
    `
      <span class="counter">${imageEl.dataset.id}/${images.length}</span>
      <span class="back-btn js-galery-back-${imageEl.dataset.id}"></span>
      <span class="close-btn js-galery-close-${imageEl.dataset.id}"></span>
      <span class="next-btn js-galery-next-${imageEl.dataset.id}"></span>
      <img class="galery-image" width="1400" height="900" src="${imageEl.dataset.source}">
      <p class="image-description js-galery-desc-${imageEl.dataset.id}">${imageEl.alt}</p>
    `,
    {
      className: "bg-overlay image-container",
      onClose: () => {
        closeButton.removeEventListener("click", closeGalery);
        nextButton.removeEventListener("click", showNext);
        nextButton.removeEventListener("click", showPrev);
      },
    }
  );
  galeryImage.show(() => {
    setTimeout(() => {
      document
        .querySelector(`.js-galery-desc-${imageEl.dataset.id}`)
        .classList.add("is-open");
    }, 300);
  });
  // Get buttons
  const closeButton = document.querySelector(
    `.js-galery-close-${imageEl.dataset.id}`
  );
  const nextButton = document.querySelector(
    `.js-galery-next-${imageEl.dataset.id}`
  );
  const backButton = document.querySelector(
    `.js-galery-back-${imageEl.dataset.id}`
  );
  // add event Listener for every button
  closeButton.addEventListener("click", closeGalery);
  nextButton.addEventListener("click", showNext);
  backButton.addEventListener("click", showPrev);
}
