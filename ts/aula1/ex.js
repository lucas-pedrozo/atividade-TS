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
    function Pessoa(nome, idade, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }
    Pessoa.prototype.apresentacao = function () {
        console.log("nome ".concat(this.nome, ", idade ").concat(this.idade, ",}"));
    };
    Pessoa.prototype.apresentarEnderenco = function () {
        console.log("meu endereco ".concat(this.endereco));
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, endereco, ra) {
        var _this = _super.call(this, nome, idade, endereco) || this;
        _this.ra = ra;
        return _this;
    }
    Aluno.prototype.apresentar = function () {
        console.log("o ra do aluno \u00E9 ".concat(this.ra));
    };
    return Aluno;
}(Pessoa));
var pessoa1 = new Pessoa("lucas", 18, "juranda");
var aluno1 = new Aluno("viado", 120, "juranda", 9034750943);
aluno1.apresentar();
