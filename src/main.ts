//atv
let computador: Number = 25;
let corSala: String = 'Branca';
let luzLigada: Boolean = true;
let notaFinal: undefined;

interface Projetor {
    marca: string;
    quantidade: number;
}

let projetor: Projetor = {
    marca: 'acer',
    quantidade: 1,
};

 console.log('A sala tem ' + computador +' computadores');
 console.log('A cor da sala é ' + corSala);
 console.log('A luz da sala está ligada ' +luzLigada);
 console.log('A nota da sala está ' + notaFinal);
 console.log('O projetor é da marca '+ projetor['marca'] +' e na sala tem '+projetor['quantidade']);
 