const numero = Number(prompt("digite um numero??"));
const numerotitulo = document.getElementById("numero");
const texto = document.getElementById("texto");

numerotitulo.innerHTML = numero;
numerotitulo.innerHTML = `O numero é ${numero}`
texto.innerHTML = `O seu numero é ${numero}<br>A raiz quadrada é ${Math.sqrt(numero).toFixed(2)}
<br>${numero} é inteiro ${Number.isInteger(numero)} <br> é NaN ? ${isNaN(numero)} 
<br> arredondando para baixo ${Math.floor(numero)} <br> arredondar para cima 
${Math.ceil(numero)}<br> com duas casa decimais ${numero.toFixed(2)}`; 

texto.style.fontSize = "60px";
numerotitulo.style.fontSize = "60px"