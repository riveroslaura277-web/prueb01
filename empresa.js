// Clase base
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salarioBase) {
        this._nombre = nombre;
        this._salarioBase = salarioBase;
    }
    Object.defineProperty(Empleado.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (valor) {
            this._nombre = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "salarioBase", {
        get: function () {
            return this._salarioBase;
        },
        set: function (valor) {
            this._salarioBase = valor;
        },
        enumerable: false,
        configurable: true
    });
    Empleado.prototype.calcularSalario = function () {
        return this._salarioBase;
    };
    Empleado.prototype.mostrarInfo = function () {
        console.log("Empleado: ".concat(this._nombre));
        console.log("Salario base: $".concat(this._salarioBase));
    };
    return Empleado;
}());
// Clase h
