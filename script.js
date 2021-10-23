window.onload = function () {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  const color = document.querySelector("#color");
  const range = document.querySelector("#range");
  const clear = document.querySelector("#clear");
  const save = document.querySelector("#save");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let isdrawing = false;
  let brushSize = range.value;
  let colorChoose = color.value;

  function mouseDownHandler(e) {
    // console.log("mouse down");
    isdrawing = true;
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  function mouseUpHandler() {
    // console.log("mouse up");
    isdrawing = false;
  }

  function mouseMoveHandler(e) {
    if (isdrawing) {
      //   console.log("mouse moving");
      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.strokeStyle = colorChoose;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    }
  }
  function colorPickerHandler(e) {
    colorChoose = e.target.value;
  }

  function burshHandler(e) {
    brushSize = e.target.value;
  }

  function clearHandler(e) {
    e.preventDefault();
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function saveHandler() {
    let imagename = prompt("Enter Image Name");
    let data = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = data;
    a.download = imagename || "myPaint";
    a.click();
  }

  canvas.addEventListener("mousedown", mouseDownHandler);
  canvas.addEventListener("mouseup", mouseUpHandler);
  canvas.addEventListener("mousemove", mouseMoveHandler);
  color.addEventListener("change", colorPickerHandler);
  range.addEventListener("change", burshHandler);
  clear.addEventListener("click", clearHandler);
  save.addEventListener("click", saveHandler);
};
