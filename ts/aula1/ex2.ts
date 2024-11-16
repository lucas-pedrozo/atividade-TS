class Veiculo {
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo =  modelo;
    
    }

    detalher() {
        console.log(`marca ${this.marca}, modelo ${this.modelo}`);
    }
}

class Moto extends Veiculo {
    private buzina: string;
    private cilindrada: number;

    constructor(marca: string, modelo: string, buzina: string, cilindrada: number) {
        super(marca,modelo)
        this.buzina = buzina;
        this.cilindrada = cilindrada
    }

    Buzin() {
        console.log(`${this.buzina} eu tenho ${this.cilindrada}`);
        
    }
}
const moto = new Moto("honda", "biz", "funfunufnufuu" , 120)
moto.detalher();
moto.Buzin();
