import { saludar } from "./strings.components";

describe('Desde pruebas unitarias', () => {
    it('la primera prueba', () =>{
        const nombre = 'Juan';
        expect( saludar(nombre) ).toBe(`Hola ${nombre} desde pruebas unitarias`);
    })
});

it('Contiene hola', () =>{
    const nombre = 'Juan';
    expect(saludar(nombre)).toContain('Hola');
});