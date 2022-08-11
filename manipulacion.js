const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const input3=document.querySelector('#calculo3');
const input4=document.querySelector('#calculo4');
const btn1=document.querySelector('#btnCalcular1');
const btn2=document.querySelector('#btnCalcular2');
const pResult1 =document.querySelector('#result1');
const pResult2 =document.querySelector('#result2');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    
    const sumaInputs_2 = parseInt(input1.value)+parseInt(input2.value);
    pResult1.innerText="Resultado: " + sumaInputs_2;

}
btn2.addEventListener('click', btnOnClick);

function btnOnClick(){
    //console.log('escuchando el evento click');
    console.log(input3.value+input4.value);

    console.log(parseInt(input3.value)+parseInt(input4.value));
    const sumaInputs = input3.value+input4.value;
    pResult2.innerText="Resultado: " + sumaInputs;

}