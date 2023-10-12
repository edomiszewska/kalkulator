const num1 = document.getElementById(`1`)
const num2 = document.getElementById(`2`)
const num3 = document.getElementById(`3`)
const num4 = document.getElementById(`4`)
const num5 = document.getElementById(`5`)
const num6 = document.getElementById(`6`)
const num7 = document.getElementById(`7`)
const num8 = document.getElementById(`8`)
const num9 = document.getElementById(`9`)
const num0 = document.getElementById(`0`)
const numdod = document.getElementById(`+`)
const numodej = document.getElementById(`-`)
const nummnoz = document.getElementById(`*`)
const numdziel = document.getElementById(`/`)
const numwynik = document.getElementById(`=`)
const p = document.getElementById(`p`)
const c = document.getElementById(`c`)


const form= document.querySelector(`form`)
form.addEventListener(`click`, function(evt)
{
evt.preventDefault();

})
 
let liczba = ''
let operacja = ''
let liczba2 = ''
    
c.addEventListener(`click`, function(evt){
    p.innerHTML=''
    liczba=''
    liczba2=''
    operacja=''
console.log(c)
})


num1.addEventListener(`click`, function(evt)
{
p.innerHTML+=num1.value

if(operacja==''){
    liczba+=num1.value
}else{
    liczba2+=num1.value
}
console.log(liczba, liczba2)

})

num2.addEventListener(`click`, function(evt)
{
p.innerHTML+=num2.value
if(operacja==''){
    liczba+=num2.value
}else{
    liczba2+=num2.value
}
})
num3.addEventListener(`click`, function(evt)
{
p.innerHTML+=num3.value
if(operacja==''){
    liczba+=num3.value
}else{
    liczba2+=num3.value
}
})
num4.addEventListener(`click`, function(evt)
{
p.innerHTML+=num4.value
if(operacja==''){
    liczba+=num4.value
}else{
    liczba2+=num4.value
}
})
num5.addEventListener(`click`, function(evt)
{
p.innerHTML+=num5.value
if(operacja==''){
    liczba+=num5.value
}else{
    liczba2+=num5.value
}
})
num6.addEventListener(`click`, function(evt)
{
p.innerHTML+=num6.value
if(operacja==''){
    liczba+=num6.value
}else{
    liczba2+=num6.value
}
})
num7.addEventListener(`click`, function(evt)
{
p.innerHTML+=num7.value
if(operacja==''){
    liczba+=num7.value
}else{
    liczba2+=num7.value
}
})
num8.addEventListener(`click`, function(evt)
{
p.innerHTML+=num8.value
if(operacja==''){
    liczba+=num8.value
}else{
    liczba2+=num8.value
}
})
num9.addEventListener(`click`, function(evt)
{
p.innerHTML+=num9.value
if(operacja==''){
    liczba+=num9.value
}else{
    liczba2+=num9.value
}
})
num0.addEventListener(`click`, function(evt)
{
p.innerHTML+=num0.value
if(operacja==''){
    liczba+=num0.value
}else{
    liczba2+=num0.value
}
})
numdod.addEventListener(`click`, function(evt)
{
operacja = numdod.value

p.innerHTML+=numdod.value


})
numodej.addEventListener(`click`, function(evt)
{
    operacja = numodej.value
p.innerHTML+=numodej.value

})
nummnoz.addEventListener(`click`, function(evt)
{
    operacja = nummnoz.value
p.innerHTML+=nummnoz.value

})
numdziel.addEventListener(`click`, function(evt)
{
    operacja = numdziel.value
p.innerHTML+=numdziel.value

})


numwynik.addEventListener(`click`, function(evt)
{

p.innerHTML+=numwynik.value


if(operacja==`+`){
    p.innerHTML+=eval(liczba)+eval(liczba2)
}else if(operacja=='-'){
    p.innerHTML+=eval(liczba)-eval(liczba2)
}else if(operacja=='/'){
    if(liczba2==0){
        p.innerText='nie da sie dzielić przez 0'
    }else
    p.innerHTML+=eval(liczba)/eval(liczba2)
}else if(operacja=='*'){
    p.innerHTML+=eval(liczba)*eval(liczba2)
}













})







