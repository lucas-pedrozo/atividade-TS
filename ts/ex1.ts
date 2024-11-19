ctype Computador = {
    armazenamento: number;
    memoriaRam: number;
    processador: string;
    gpu: string;
    potendiaFontW: number;
    ligar: () => void;
}

const meuComputador: Computador = {
    armazenamento: 2,
    memoriaRam: 32,
    processador: "Ryzen 5",
    gpu: "RTX 3060",
    potendiaFontW: 650,
    ligar: () => {console.log("beep, porém não muito porque não tá ligando");
    }
}

console.log(meuComputador); 
console.log(meuComputador.memoriaRam);
console.log(meuComputador.ligar());

