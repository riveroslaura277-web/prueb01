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
// 2️⃣ ENCAPSULAMIENTO (Clase base)
var Dispositivo = /** @class */ (function () {
    function Dispositivo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    // Métodos comunes a todos los dispositivos
    Dispositivo.prototype.encender = function () {
        if (!this.encendido) {
            this.encendido = true;
            console.log("".concat(this.marca, " ").concat(this.modelo, " se ha encendido."));
        }
        else {
            console.log("".concat(this.marca, " ").concat(this.modelo, " ya est\u00E1 encendido."));
        }
    };
    Dispositivo.prototype.apagar = function () {
        if (this.encendido) {
            this.encendido = false;
            console.log("".concat(this.marca, " ").concat(this.modelo, " se ha apagado."));
        }
        else {
            console.log("".concat(this.marca, " ").concat(this.modelo, " ya estaba apagado."));
        }
    };
    // Método genérico que luego será sobreescrito
    Dispositivo.prototype.obtenerInformacion = function () {
        return "Dispositivo: ".concat(this.marca, " ").concat(this.modelo, " - Estado: ").concat(this.encendido ? "Encendido" : "Apagado");
    };
    // Getters y Setters (acceso controlado)
    Dispositivo.prototype.getMarca = function () {
        return this.marca;
    };
    Dispositivo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Dispositivo.prototype.getModelo = function () {
        return this.modelo;
    };
    Dispositivo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Dispositivo.prototype.getEstado = function () {
        return this.encendido;
    };
    return Dispositivo;
}());
// 3️⃣ HERENCIA (Clases hijas)
// Clase Celular
var Celular = /** @class */ (function (_super) {
    __extends(Celular, _super);
    function Celular(marca, modelo, numeroSim) {
        var _this = _super.call(this, marca, modelo) || this; // Llama al constructor de la clase base
        _this.numeroSim = numeroSim;
        return _this;
    }
    // 4️⃣ POLIMORFISMO: Sobrescribimos el método obtenerInformacion()
    Celular.prototype.obtenerInformacion = function () {
        return "\uD83D\uDCF1 Celular ".concat(this.marca, " ").concat(this.modelo, " | SIM: ").concat(this.numeroSim, " | Estado: ").concat(this.encendido ? "Encendido" : "Apagado");
    };
    return Celular;
}(Dispositivo));
// Clase Computador
var Computador = /** @class */ (function (_super) {
    __extends(Computador, _super);
    function Computador(marca, modelo, memoriaRAM) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.memoriaRAM = memoriaRAM;
        return _this;
    }
    // Sobrescribimos también el método
    Computador.prototype.obtenerInformacion = function () {
        return "\uD83D\uDCBB Computador ".concat(this.marca, " ").concat(this.modelo, " | RAM: ").concat(this.memoriaRAM, " GB | Estado: ").concat(this.encendido ? "Encendido" : "Apagado");
    };
    return Computador;
}(Dispositivo));
// 5️⃣ POLIMORFISMO EN ACCIÓN
var dispositivos = [
    new Celular("Samsung", "Galaxy S24", "3215558888"),
    new Computador("Lenovo", "ThinkPad X1", 16),
    new Celular("Apple", "iPhone 15", "3107776666"),
];
dispositivos[0].encender();
dispositivos[1].encender();
for (var _i = 0, dispositivos_1 = dispositivos; _i < dispositivos_1.length; _i++) {
    var d = dispositivos_1[_i];
    console.log(d.obtenerInformacion());
}
