// calculadora de media com 4 notas.
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);
  const nota4 = Number(document.getElementById("nota4").value);
  let media = (nota1+nota2+nota3+nota4) / 4;

  function cond(){
  if(media > 80){
    return `parabéns!!! você está Aprovado.`;
  }else if(media < 80 && media > 60) {
    return `você ficou de recuperação.`;
  }else{
    return `você está reprovado.`;
  }
}
  document.querySelector(".demo").innerHTML = `resultado:<br> ${nome}, a sua média foi: ${media}<br> ${cond()}`
});


