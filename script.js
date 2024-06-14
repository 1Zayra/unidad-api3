//buscar datos del pokemon dependiendo su numero o nombre
function buscarPokemon(contenedorNumero){
  let inputId="pokemonInput$(contenedorNumero)";
  let nombrePokemon=document.getElementBynd(inputId).value.trim().tolowerCase();
  let urlApi='https://pokeapi.co/api/v2/pokemon/${nombrePokemon}'

  
  fetch(urlApli)
  .then(Response => Response.json())
  .then(datosPokemon => mostrarPokemon(datospokemon, contenedorNumero))
  .catch(() => mostrarErrror(contenedorNumeeo))
}

//Mostrar informacion del pokemon

function mostrarPokemon( datospokemon, contenedorNumero){
  let infoDivd="pokemonInput$(contenedorNumero)";
  let infoDiv = document.getElementBynd (infoDivd);
  
  infoDiv.innerHtml = ''
<h2 class="pk-name">${datospokemon.name.toUperCase()}</h2>
  <img class="pk-img" src="${datosPokemon.sprites.other[oficial-artwork.form];</>
  <p>Numero:${datosPokemon.id}</p>
  <p>Weight:${datosPokemon.weight/}kg</p>
  <p>height:${datosPokemon.height/}m</p>
  
  '
}

//Error de busqueda  de Pokemon

fuction mostrarEror(contenedorNumero){
  let infoDivd='pokemonInfo$(contenedorNumero)';
  let infoDiv = document.getElementBynd (infoDivd);
  <p class="pk-ms>pokemon no encontradp. <br> busque otro nombre o numero</p>
  
}

//  Mostrar Pokemon Inicial

windows.onld=function(){
  document.getElementById("pokemonInpunt1").value = "5";
  buscarpokemon(1)
  document.getElementById("pokemonInpunt2").value = "6";
  buscarpokemon(2)
}