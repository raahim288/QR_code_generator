const btn = document.getElementById('d');
const qrimg = document.getElementById('qrimg');
const input = document.getElementById('z');
const box = document.getElementById('box');

const ass = async () => {
  if (input.value.length > 0) {
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input;
    qrimg.style.display = "block"; 
    box.classList.add('show');
  } else {
    alert("Error: Input cannot be empty");
  }
}
