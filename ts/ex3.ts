interface Veiculo {

    marca: string;
    modelo: string;
    acelerar(velocidade: number): void;


}
class Carro implements Veiculo {
    public marca: string;
    public modelo: string;
    public velocidade: number;

    constructor(marca: string, modelo: string, velocidade: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    public acelerar(velocidade: number) {
        velocidade = this.velocidade;
        return this.velocidade
    }

}

const carro1 = new Carro("Fiat", "Uno", 300);
carro1.velocidade = carro1.velocidade;
carro1.acelerar(300);
