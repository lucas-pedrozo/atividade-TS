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
    function Veiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Veiculo.prototype.detalher = function () {
        console.log("marca ".concat(this.marca, ", modelo ").concat(this.modelo));
    };
    return Veiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, buzina, cilindrada) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.buzina = buzina;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.Buzin = function () {
        console.log("".concat(this.buzina, " eu tenho ").concat(this.cilindrada));
    };
    return Moto;
}(Veiculo));
var moto = new Moto("honda", "biz", "funfunufnufuu", 120);
moto.detalher();
moto.Buzin();
