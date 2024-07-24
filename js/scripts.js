const container = document.querySelector(".container")
const btnGeraQr = document.querySelector("#qr-form button")
const qrInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// gera o QR CODE
function geraQrCode() {
    const qrCodeValue = qrInput.value

    if (!qrCodeValue) return;

    btnGeraQr.innerText = "Gerando codigo....";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue} `

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("ativo");
        btnGeraQr.innerText = "Gerando codigo criado!";
    });
}

btnGeraQr.addEventListener("click", () => {
    geraQrCode();
});

qrInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        geraQrCode();
    }
});

// limpar qrcode 
qrInput.addEventListener("keyup", (e) => {
    if(!qrInput.value){
        container.classList.remove("ativo")
        btnGeraQr.innerText = "Gerar QR Code"
    }
});
