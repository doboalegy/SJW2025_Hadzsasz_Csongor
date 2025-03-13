"use strict";

const gyumolcsNeve = document.querySelector('#gyumolcs-neve');
const mennyiseg = document.querySelector('#mennyiseg');

const warning = document.querySelector('#warning');

const zsir = document.querySelector('#zsir');
const rost = document.querySelector('#rost');
const kaloria = document.querySelector('#kaloria');
const feherje = document.querySelector('#feherje');
const szenhidrat = document.querySelector('#szenhidrat');

document.querySelector('#szamitas').addEventListener('click', () => {
    warning.classList.add('hidden');

    if(gyumolcsNeve.value == -1)
    {
        warnUser('Válasszon egy gyümölcsöt a lenyíló listából.')
        return;
    }

    zsir.textContent = fruits.filter(x => x.id == gyumolcsNeve.value)[0].fat * mennyiseg.value + ' g';
    rost.textContent = fruits.filter(x => x.id == gyumolcsNeve.value)[0].fiber * mennyiseg.value + ' g';
    kaloria.textContent = fruits.filter(x => x.id == gyumolcsNeve.value)[0].calory * mennyiseg.value + ' kcal';
    feherje.textContent = fruits.filter(x => x.id == gyumolcsNeve.value)[0].protein * mennyiseg.value + ' g';
    szenhidrat.textContent = fruits.filter(x => x.id == gyumolcsNeve.value)[0].carbohydrate * mennyiseg.value + ' g';
        

});

document.querySelector('#visszaallitas').addEventListener('click', () => {
    zsir.textContent = "";
    rost.textContent = "";
    kaloria.textContent = "";
    feherje.textContent = "";
    szenhidrat.textContent = "";

    mennyiseg.value = 1;
});

for(const fruit of fruits)
{
    const f = document.createElement('option');
    f.textContent = fruit.name;
    f.value = fruit.id;
    gyumolcsNeve.append(f);
}

function warnUser(msg)
{
    warning.classList.remove('hidden')   ;
    warning.textContent = msg;
}