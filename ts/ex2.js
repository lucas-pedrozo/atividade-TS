var SuperHeroHumano = /** @class */ (function () {
    function SuperHeroHumano(nome, superPoderes, antiheroi) {
        this.raça = "humano";
        this.nome = nome;
        this.superPoderes = superPoderes;
        this.antiheroi = antiheroi;
    }
    SuperHeroHumano.prototype.podeVoar = function () {
        var heroiPodeVoar = this.superPoderes.includes("voar");
        return heroiPodeVoar;
    };
    return SuperHeroHumano;
}());
// const primeroSuperHeroi = new SuperHeroHumano("Vitor Giese",["tomar Engineering", "voar"], true);
// const podeVoar = primeroSuperHeroi.podeVoar();
// console.log("pode voar? ", podeVoar);
// const segundoSuperHeroi = new SuperHeroHumano("Igão",["comer Coxinha"], true);
// const segundoPodeVoar = segundoSuperHeroi.podeVoar();
// console.log("pode voar? ", segundoPodeVoar);
