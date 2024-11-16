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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo) {
        this.nome = nome;
        this.ideda = idade;
        this.sexo = sexo;
    }
    Pessoa.prototype.apresentacao = function () {
        console.log("meu nome \u00E9 ".concat(this.nome, ", idade \u00E9 ").concat(this.ideda, ", sexo ").concat(this.sexo));
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, sexo, ra) {
        var _this = _super.call(this, nome, idade, sexo) || this;
        _this.ra = ra;
        return _this;
    }
    return Aluno;
}(Pessoa));
// const aluno1 = new Aluno("lucas", 18, "masculino",12345678);
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, sexo, chapa, diciplina) {
        var _this = _super.call(this, nome, idade, sexo) || this;
        _this.chapa = chapa;
        _this.diciplina = diciplina;
        return _this;
    }
    Professor.prototype.apre = function () {
        console.log("".concat(this.chapa, ", ").concat(this.diciplina));
    };
    return Professor;
}(Pessoa));
