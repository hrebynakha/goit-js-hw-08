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
    const galeryImage = basicLightbox.create(
      `
          <span class="counter">${e.target.dataset.id}/${images.length}</span>
          <span class="back-btn">Back</span>
          <span class="close-btn"></span>
          <span class="next-btn">Next</span>
          <img class="galery-image" width="1400" height="900" src="${e.target.dataset.source}">
          <p class="image-description">${e.target.alt}</p>
          
        `,
      {
        className: "bg-overlay image-container",
        closable: false,
      }
    );
    galeryImage.show(() => {
      setTimeout(() => {
        document.querySelector(".image-description").classList.add("is-open");
      }, 300);
    });

    const button = document.querySelector(".close-btn");
    button.addEventListener("click", function () {
      galeryImage.close();
    });
  }
};
