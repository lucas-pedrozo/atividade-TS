interface SuperHeroi {
    nome: string;
    superPoderes: string[];
    raça: string;
    antiheroi: boolean;
    podeVoar: () => boolean;

}

class SuperHeroHumano implements SuperHeroi {
    public nome: string;
    public superPoderes: string[];
    public raça: string = "humano";
    public antiheroi: boolean;

    constructor(nome: string, superPoderes: string[], antiheroi: boolean,) {
        this.nome = nome;
        this.superPoderes = superPoderes;
        this.antiheroi = antiheroi;
    }

    public podeVoar() {

        const heroiPodeVoar = this.superPoderes.includes("voar")
        return heroiPodeVoar;

    }

}

const primeroSuperHeroi = new SuperHeroHumano("Vitor Giese", ["tomar Engineering", "voar"], true);
const podeVoar = primeroSuperHeroi.podeVoar();
console.log("pode voar? ", podeVoar);
const segundoSuperHeroi = new SuperHeroHumano("Igão", ["comer Coxinha"], true);
const segundoPodeVoar = segundoSuperHeroi.podeVoar();
console.log("pode voar? ", segundoPodeVoar);
