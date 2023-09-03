let qrcode = document.getElementById("qrimg")
let qrtext = document.getElementById("qrtext");
let qrbtn = document.getElementById("qrbtn");

qrbtn.addEventListener('click' , ()=>{
let size = "1000x1000";
let data = qrtext.value;
let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

let url =  `${baseURL}?data=${data}`;

qrcode.src = url;
});

function select(el){
    return document.querySelector(el);
}
