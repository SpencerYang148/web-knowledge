window.onload = init;
let canvasE: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
const btnE = document.querySelector<HTMLDivElement>("#btn-import");
const inputE = document.querySelector<HTMLInputElement>("#input-import");

function init() {
  initCanvas();
  initFileReader();
}

function initCanvas() {
  canvasE = document.querySelector("#canvas");
  ctx = canvasE.getContext("2d");
  const img = new Image();
  img.src = "./images/示例图片.png";
  img.addEventListener("load", () => {
    console.log("img", img.height);
    canvasE.width = img.naturalWidth;
    canvasE.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    grayscale();
    toDataURL();
  });
}

function grayscale() {
  const imageData = ctx.getImageData(0, 0, canvasE.width, canvasE.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }
  const newCanvasE = document.createElement("canvas");
  newCanvasE.width = canvasE.width;
  newCanvasE.height = canvasE.height;
  const newCtx = newCanvasE.getContext("2d");
  newCtx.putImageData(imageData, 0, 0);
  document.body.appendChild(newCanvasE);
}

function toDataURL() {
  const dataURL = canvasE.toDataURL();
  console.log("dataURL", dataURL);
  const img = new Image();
  img.src = dataURL;
  document.body.appendChild(img);
}

function initFileReader() {
  inputE.addEventListener("change", readFile);
}
function readFile(event) {
  const img = new Image();
  img.src = URL.createObjectURL(event.target.files[0]);
  document.body.appendChild(img);

  return;
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    const img = new Image();
    img.src = fileReader.result as string;
    document.body.appendChild(img);
  });
  fileReader.readAsDataURL(event.target.files[0]);
}
