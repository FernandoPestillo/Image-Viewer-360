const container = document.querySelector(".container");
const image = document.querySelector(".car-image");

const cursor = {
  isDragging: false,
  initialPosition: 0,
};

let currentImage = 1;

const updateImage = (direction) => {
  if (direction < 0) {
    currentImage = currentImage === 1 ? 12 : currentImage - 1;
  } else if (direction > 0) {
    currentImage = currentImage === 12 ? 1 : currentImage + 1;
  }

  image.src = `./images/${currentImage}.webp`;
};
// Eventos para desktop
container.addEventListener("mousedown", (event) => {
  cursor.isDragging = true;
  cursor.initialPosition = event.clientX;
});

container.addEventListener("mouseup", (event) => {
  cursor.isDragging = false;
});

container.addEventListener("mousemove", ({ clientX }) => {
  if (!cursor.isDragging) return;

  const offset = cursor.initialPosition - clientX;

  if (Math.abs(offset) >= 50) {
    updateImage(offset);
    cursor.initialPosition = clientX;
  }
});

// Eventos para mobile
container.addEventListener("touchstart", (event) => {
  cursor.isDragging = true;
  cursor.initialPosition = event.touches[0].clientX;
});

container.addEventListener("touchend", () => {
  cursor.isDragging = false;
});

container.addEventListener("touchmove", (event) => {
  if (!cursor.isDragging) return;

  const clientX = event.touches[0].clientX;
  const offset = cursor.initialPosition - clientX;

  if (Math.abs(offset) >= 50) {
    updateImage(offset);
    cursor.initialPosition = clientX;
  }
});
