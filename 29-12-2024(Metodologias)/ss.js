'use strict'

let dates = ['2019-07', '1999-10', '2013-03', '1997-11'];

//fechas luego del 2000
let fc200 = (dates.filter(item => item.substring(0,1)==='2'));

alert(fc200);
//almacenar en variables independientes el resultado anterior
let[f1, f2] = fc200

alert(f1);
alert(f2);
//obtener el mes de cada variables
let variable = f1.split("-"); //[2019,07]
let mes = variable[1];//07
alert(mes);

let variable2 = f2.split("-"); //[2013,03]
let mes2 = variable2[1];
alert(mes2);//03

//mostrar en que semesttre se encuentra cada mes

let primerSemestre = ['01', '02', '03', '04', '05', '06'];

if(primerSemestre.includes (mes)){
    alert('Primer Semestre')
} else{
    alert('Segundo Semestre')
};

if(primerSemestre.includes (mes2)){
    alert('Primer Semestre')
} else{
    alert('Segundo Semestre')
};