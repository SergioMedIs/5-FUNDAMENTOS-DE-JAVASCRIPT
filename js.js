//////////IMPARES////////////////////
console.log('IMPARES')
const num= [1,2,3,4,5,6,7,8,10];
let imp=num.filter(function(select){
    return select %2;
})
console.log(imp)
imprimeArray=['uno',2, null , 0]
for (let i = 0; i <imprimeArray.leught; i++){
    console.log ('impares', imprimeArray [i]);
}
console.log('---------------------------')
/////////////mult/////////////////
console.log('MULTIPLICACION')
for (let m =1; m <=10; m++){
    console.log(`5 x ${m} = ${m * 5}`)
}
console.log('---------------------------')
////////////ORDENAR/////////////
console.log('ORDENAR')
const numeros = [1,2,45,5,6,7,1,8];
numeros.sort((a, b)=>a-b)
console.log(numeros);
const numeros2 = [100,5,5,8,3,7,8];
numeros2.sort((a, b)=>a-b)
console.log(numeros2);
console.log('---------------------------')

///////////orden sin sort////////////////
let frutero=['naranja', 'fresa' ,'sandia', 'uvas',' cereza', ' manzana' ]
for( let frutero = a,b; frutero <=5; frutero++){
    console.log()
}