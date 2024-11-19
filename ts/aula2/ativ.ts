class Veiculo {
    protected placa: string
    protected modelo: string
    protected ano: number
    protected valorDiario: number

    constructor(placa: string, modelo: string, ano: number, valorDiario: number) {
        this.placa = placa
        this.modelo = modelo
        this.ano = ano
        this.valorDiario = valorDiario
    }

    infoVeiculo(): string {
        return `Placa: ${this.placa}, modelo: ${this.modelo}, ano: ${this.ano}, valorDiario: ${this.valorDiario} `;
    }
}

interface Aluguel {
    calcularAluguel: (dias: number) => number
}

class Carro extends Veiculo implements Aluguel {
    public qdtPassageiros?: number = 5

    constructor(placa: string, modelo: string, ano: number, valorDiario: number, qtdPassageiros: number) {
        super(placa, modelo, ano, valorDiario)
        this.qdtPassageiros = qtdPassageiros
    }

    calcularAluguel(dias: number): number {
        const Aluguel = this.valorDiario * dias
        return Aluguel;
    }
}

class Caminhao extends Veiculo implements Aluguel {
    public taxaTonelada: number

    constructor(placa: string, modelo: string, ano: number, valorDiario: number, taxaTonelada: number) {
        super(placa, modelo, ano, valorDiario)
        this.taxaTonelada = taxaTonelada
    }

    calcularAluguel(dias: number, Toneladas: number = 0): number {
        const Aluguel = (dias * this.valorDiario) + (Toneladas * this.taxaTonelada)
        return Aluguel;
    }

}

const carro1 = new Carro("ABC-1234", "Gol", 2020, 60, 5);
const infocarro1 =carro1.infoVeiculo();
const aluguelcarro = carro1.calcularAluguel(5)
console.log(infocarro1);
console.log(aluguelcarro);


const caminhao1 = new Caminhao("DEF-5678", "Caminhão", 1999, 1200, 50);
const infoCaminhao1 = caminhao1.infoVeiculo();
const aluguelcaminha = caminhao1.calcularAluguel(5, 10);
console.log(infoCaminhao1);
console.log(aluguelcaminha);


