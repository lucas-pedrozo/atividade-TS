var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, modelo, ano, valorDiario) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.valorDiario = valorDiario;
    }
    Veiculo.prototype.infoVeiculo = function () {
        return "Placa: ".concat(this.placa, ", modelo: ").concat(this.modelo, ", ano: ").concat(this.ano, ", valorDiario: ").concat(this.valorDiario, " ");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(placa, modelo, ano, valorDiario, qtdPassageiros) {
        var _this = _super.call(this, placa, modelo, ano, valorDiario) || this;
        _this.qdtPassageiros = 5;
        _this.qdtPassageiros = qtdPassageiros;
        return _this;
    }
    Carro.prototype.calcularAluguel = function (dias) {
        var Aluguel = this.valorDiario * dias;
        return Aluguel;
    };
    return Carro;
}(Veiculo));
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(placa, modelo, ano, valorDiario, taxaTonelada) {
        var _this = _super.call(this, placa, modelo, ano, valorDiario) || this;
        _this.taxaTonelada = taxaTonelada;
        return _this;
    }
    Caminhao.prototype.calcularAluguel = function (dias, Toneladas) {
        if (Toneladas === void 0) { Toneladas = 0; }
        var Aluguel = (dias * this.valorDiario) + (Toneladas * this.taxaTonelada);
        return Aluguel;
    };
    return Caminhao;
}(Veiculo));
var carro1 = new Carro("ABC-1234", "Gol", 2020, 60, 5);
var infocarro1 = carro1.infoVeiculo();
var aluguelcarro = carro1.calcularAluguel(5);
console.log(infocarro1);
console.log(aluguelcarro);
var caminhao1 = new Caminhao("DEF-5678", "Caminhão", 1999, 1200, 50);
var infoCaminhao1 = caminhao1.infoVeiculo();
var aluguelcaminha = caminhao1.calcularAluguel(5, 10);
console.log(infoCaminhao1);
console.log(aluguelcaminha);
