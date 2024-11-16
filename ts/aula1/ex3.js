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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.mostrarSalario = function () {
        console.log("Sal\u00E1rio: ".concat(this.salario));
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        // Usando 'this' para acessar os métodos da classe base
        return this.getSalario() * 3;
    };
    Gerente.prototype.mostrarBonus = function () {
        console.log("B\u00F4nus: ".concat(this.calcularBonus()));
    };
    Gerente.prototype.getSalario = function () {
        // Método privado para acessar o atributo privado da classe base
        return this.salario;
    };
    return Gerente;
}(Funcionario));
// Exemplo de uso
var funcionario = new Funcionario("Carlos", 5000);
funcionario.mostrarSalario();
var gerente = new Gerente("Ana", 7000);
gerente.mostrarSalario();
gerente.mostrarBonus();
