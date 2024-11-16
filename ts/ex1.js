var meuComputador = {
    armazenamento: 2,
    memoriaRam: 32,
    processador: "Ryzen 5",
    gpu: "RTX 3060",
    potendiaFontW: 650,
    ligar: function () {
        console.log("beep, porém não muito porque não tá ligando");
    }
};
console.log(meuComputador);
console.log(meuComputador.memoriaRam);
console.log(meuComputador.ligar());
