"use strict";

const gyumolcsNeve = document.querySelector('#gyumolcs-neve');
const mennyiseg = document.querySelector('#mennyiseg');

const warning = document.querySelector('#warning');

document.querySelector('#szamitas').addEventListener('click', () => {
    warning.classList.add('hidden');

    if(gyumolcsNeve.value == -1)
        warnUser('Válasszon egy gyümölcsöt a lenyíló listából.')
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