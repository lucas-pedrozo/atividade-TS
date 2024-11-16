var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function (velocidade) {
        velocidade = this.velocidade;
        return this.velocidade;
    };
    return Carro;
}());
var carro1 = new Carro("Fiat", "Uno", 300);
carro1.velocidade = carro1.velocidade;
carro1.acelerar(300);
