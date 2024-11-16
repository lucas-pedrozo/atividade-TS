class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public mostrarSalario(): void {
        console.log(`Salário: ${this.salario}`);
    }
}

class Gerente extends Funcionario {

    public calcularBonus(): number {
        // Usando 'this' para acessar os métodos da classe base
        return this.getSalario() * 3;
    }

    public mostrarBonus(): void {
        console.log(`Bônus: ${this.calcularBonus()}`);
    }

    private getSalario(): number {
        // Método privado para acessar o atributo privado da classe base
        return (this as any).salario;
    }
}

// Exemplo de uso
const funcionario = new Funcionario("Carlos", 5000);
funcionario.mostrarSalario();

const gerente = new Gerente("Ana", 7000);
gerente.mostrarSalario();
gerente.mostrarBonus();
