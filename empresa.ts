// Interfaz
interface IEmpleado {
  nombre: string;
  salarioBase: number;
  calcularSalario(): number;
  mostrarInfo(): void;
}

// Clase base
class Empleado implements IEmpleado {
  private _nombre: string;
  private _salarioBase: number;

  constructor(nombre: string, salarioBase: number) {
    this._nombre = nombre;
    this._salarioBase = salarioBase;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(valor: string) {
    this._nombre = valor;
  }

  get salarioBase(): number {
    return this._salarioBase;
  }

  set salarioBase(valor: number) {
    this._salarioBase = valor;
  }

  calcularSalario(): number {
    return this._salarioBase;
  }

  mostrarInfo(): void {
    console.log(`Empleado: ${this._nombre}`);
    console.log(`Salario base: $${this._salarioBase}`);
    console.log('gfd');
  }

  
}

// Clase h
