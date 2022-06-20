list=[]
carta1="n"
carta2=" n n"
pontos = 0
jogadas = 0
qtdcartas= -1
function colocarcartas (){
    qtdcartas = prompt("Quantas cartas vc deseja? (min: 4 max: 14)")
   console.log(qtdcartas)
   if(qtdcartas < 4|| qtdcartas >14 || qtdcartas % 2 !== 0){
      colocarcartas ()
   }
   else{
      const cartas = document.querySelector(".cartas")
      for(let i = 0; i<qtdcartas; i++){
         if(i <= (qtdcartas-1)/2){
            list.push(i+1)
            list.push(i+1)
         }
      }
      list.sort(comparador);
      for (let a = 0; a< qtdcartas; a++){
         cartas.innerHTML =  cartas.innerHTML + `            
         <div class="carta" onclick="virarcarta(this)">
         <div class="back"><img src="imagens/${list[a]}.gif"></div>
         <div class="front"><img src="imagens/front.png"></div>
     </div>`;
      }
      console.log(list)
   }



  
}
colocarcartas ()

function finalizar(){
   if (Number(qtdcartas )=== Number(pontos)){
      alert(`vc terminou o jogo em ${jogadas} jogadas`)
   }
}

function virarcarta(par){
   if(par.getAttribute('src')===null){
      let virada = par.getAttribute("class");

      if(virada !== "carta flip" && virada !== "carta clicada"){
         const elemento = document.querySelector(".flip");
         jogadas = jogadas + 1
         if(document.querySelector(".clicado")!==null){
            par.classList.toggle("flip");
            par.classList.add("clicado");
            carta1 =  par.childNodes[1].childNodes[0].getAttribute("src")
            if(carta1 === carta2 ){
               document.querySelector(".clicado").classList.add("certo")
               document.querySelector(".clicado").classList.remove("clicado")
               document.querySelector(".clicado").classList.add("certo")
               document.querySelector(".clicado").classList.remove("clicado")
               pontos = pontos + 2
               finalizar()
               console.log(pontos)
               console.log(qtdcartas)
            }
            else{
               setTimeout(function(){  
               document.querySelector(".clicado").classList.remove("flip")
               document.querySelector(".clicado").classList.remove("clicado")
               document.querySelector(".clicado").classList.remove("flip")
               document.querySelector(".clicado").classList.remove("clicado")
               }, 1000);
            }
         }
         else{
            par.classList.toggle("flip");
            par.classList.add("clicado");
            carta2 = par.childNodes[1].childNodes[0].getAttribute("src")
         }
      
   
      }

   }

}



function comparador() { 
	return Math.random() - 0.5; 
}


function compararcartas (elemento){
   if(elemento.getAttribute('src') === null) {
      let flipUP = elemento.getAttribute('class');

      if(flipUP !== ""){}
   }
   elemento.childNodes[1].childNodes[1].getAttribute('src')
}
