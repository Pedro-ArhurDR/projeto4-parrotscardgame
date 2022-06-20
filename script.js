list=[]
carta1="n"
carta2=" n n"

function virarcarta(par){
   const elemento = document.querySelector(".flip");

   
   if(document.querySelector(".clicado")!==null){
      par.classList.toggle("flip");
      par.classList.add("clicado");
      carta1 =  par.childNodes[1].childNodes[0].getAttribute("src")
      if(carta1 === carta2 ){
         document.querySelector(".clicado").classList.add("certo")
         document.querySelector(".clicado").classList.remove("clicado")
         document.querySelector(".clicado").classList.add("certo")
         document.querySelector(".clicado").classList.remove("clicado")
      }
      else{
         document.querySelector(".clicado").classList.remove("flip")
         document.querySelector(".clicado").classList.remove("clicado")
         document.querySelector(".clicado").classList.remove("flip")
         document.querySelector(".clicado").classList.remove("clicado")
      }
   }
   else{
      par.classList.toggle("flip");
      par.classList.add("clicado");
      carta2 = par.childNodes[1].childNodes[0].getAttribute("src")
   }

}



function comparador() { 
	return Math.random() - 0.5; 
}

function colocarcartas (){
   const qtdcartas = prompt("Quantas cartas vc deseja? (min: 4 max: 14)")
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



function compararcartas (elemento){
   if(elemento.getAttribute('src') === null) {
      let flipUP = elemento.getAttribute('class');

      if(flipUP !== ""){}
   }
   elemento.childNodes[1].childNodes[1].getAttribute('src')
}
