//INTERFACE
interface IDispositivo {
  encender(): void;
  apagar(): void;
  obtenerInformacion(): string;
}

// ENCAPSULAMIENTO 
class DispositivoBase implements IDispositivo {
  // Atributos protegidos para que las clases hijas puedan usarlos
  protected marca: string;
  protected modelo: string;
  private encendido: boolean;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
  }

  encender(): void {
    if (!this.encendido) {
      this.encendido = true;
      console.log(`${this.marca} ${this.modelo} se ha encendido.`);
    } else {
      console.log(`${this.marca} ${this.modelo} ya está encendido.`);
    }
  }

  apagar(): void {
    if (this.encendido) {
      this.encendido = false;
      console.log(`${this.marca} ${this.modelo} se ha apagado.`);
    } else {
      console.log(`${this.marca} ${this.modelo} ya estaba apagado.`);
    }
  }

  
  obtenerInformacion(): string {
    return `Dispositivo: ${this.marca} ${this.modelo} - Estado: ${
      this.encendido ? "Encendido" : "Apagado"
    }`;
  }

  // Getters y Setters (acceso controlado)
  getPublicMarca(): string {
    return this.marca;
  }

  setPublicMarca(marca: string): void {
    this.marca = marca;
  }

  getPublicModelo(): string {
    return this.modelo;
  }

  setPublicModelo(modelo: string): void {
    this.modelo = modelo;
  }
  getPublicEstado(): boolean {
    return this.encendido;
  }
}

// HERENCIA Clases hijas

// Clase Celular
class CelularDispositivo extends DispositivoBase {
  private numeroSim: string;

  constructor(marca: string, modelo: string, numeroSim: string) {
    super(marca, modelo); 
    this.numeroSim = numeroSim;
  }

  // POLIMORFISMO
  obtenerInformacion(): string {
    return `📱 Celular ${this.marca} ${this.modelo} | SIM: ${this.numeroSim} | Estado: ${
      this.getPublicEstado() ? "Encendido" : "Apagado"
    }`;
  }
}


class ComputadorDispositivo extends DispositivoBase {
  private memoriaRAM: number;

  constructor(marca: string, modelo: string, memoriaRAM: number) {
    super(marca, modelo);
    this.memoriaRAM = memoriaRAM;
  }

  
  obtenerInformacion(): string {
    return `💻 Computador ${this.marca} ${this.modelo} | RAM: ${this.memoriaRAM} GB | Estado: ${
      this.getPublicEstado() ? "Encendido" : "Apagado"
    }`;
  }
}


const dispositivosLocal: IDispositivo[] = [
  new CelularDispositivo("Samsu
    ng", "Galaxy S24", "3215558888"),
  new ComputadorDispositivo("Lenovo", "ThinkPad X1", 16),
  new CelularDispositivo("Apple", "iPhone 15", "3107776666"),
];

dispositivosLocal[0].encender();
dispositivosLocal[1].encender();

for (const d of dispositivosLocal) {
  console.log(d.obtenerInformacion());
}
