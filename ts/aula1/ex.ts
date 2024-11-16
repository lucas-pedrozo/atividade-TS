class Pessoa {
    protected nome: string;
    protected idade: number;
    private endereco: string;


    constructor(nome: string, idade: number, endereco: string) {
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
    }

    protected apresentacao() {
        console.log(`nome ${this.nome}, idade ${this.idade},}`);

    }

    private apresentarEnderenco() {
        console.log(`meu endereco ${this.endereco}`);

    }
}


class Aluno extends Pessoa {
    private ra: number;

    constructor(nome: string, idade:number,endereco:string,ra:number) {
        super(nome,idade,endereco)
        this.ra = ra
    }

    public apresentar() {
        console.log(`o ra do aluno é ${this.ra}`);
        
    }
}
const pessoa1 = new Pessoa("lucas",18,"juranda")

const aluno1 = new Aluno("viado",120,"juranda",9034750943)
aluno1.apresentar()


