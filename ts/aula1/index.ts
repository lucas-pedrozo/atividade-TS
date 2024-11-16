class Pessoa {
    private nome: string;
    private ideda: number;
    private sexo:string;

    constructor(nome: string, idade: number,sexo: string) {
        this.nome = nome;
        this.ideda = idade;
        this.sexo = sexo;
        }

        apresentacao() {
            console.log(`meu nome é ${this.nome}, idade é ${this.ideda}, sexo ${this.sexo}`);
        }
}

class Aluno extends Pessoa  {

    private ra: number;


     constructor(nome: string, idade: number, sexo: string, ra: number) {
        
        super(nome,idade,sexo)

        this.ra = ra;

     }
}

// const aluno1 = new Aluno("lucas", 18, "masculino",12345678);



class Professor extends Pessoa {
    private chapa: string;
    private diciplina: string[];

    constructor(nome: string, idade: number, sexo: string,chapa: string, diciplina:string[] ) {

        super(nome,idade,sexo)

        this.chapa = chapa;
        this.diciplina= diciplina;

    }

    apre() {
        console.log(`${this.chapa}, ${this.diciplina}`);
        
    }
    
}

