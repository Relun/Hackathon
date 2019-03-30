const data = window.POKEMON.pokemon;
const pokeFilter = document.getElementById('root'); 


//Mostrar pantalla de filtrado y ocultar home
const button_enter = document.getElementById('btn');

const welcome = document.getElementById('welcome');
const category = document.getElementById('category');

button_enter.addEventListener('click', () => {
  welcome.style.display ="none";
  category.style.display="block";
});
  
//Acá al presionar el botón ingresar me aparezcan las categorias
const btnCategorias = document.getElementById('btn');

btnCategorias.addEventListener('click', () => {
  let username= document.getElementById("name").value;
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += 
  `<div class="username">
  <h1>Busca el empleo de tus sueños</h1>
  <h3>Bienvenida ${username}</h3>
  </div>`

});

 //Mostrar la data con la función filtrado
  window.showData = (data) =>{
    let resultshowdata=" ";
  data.forEach(element => {
    resultshowdata=pokeFilter.innerHTML ='';
    resultshowdata=pokeFilter.innerHTML +=
    ` <div class="card-with-modal">
    <div class="card">
    <div class="img">
    <div class="card-title">
      <h2>${element.name}</h2>
      <p>Empresa: ${element.num}</p>
      <p>Jornada: ${element.weight}</p>
      <p>Fecha publicación: ${element.height}</p>
      </div>
      <div>
      </div>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
  Accede al empleo
</button>

<div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Empresa: ${element.num}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h2>${element.name}</h2>
      <p>Jornada: ${element.weight}</p>
      <p>Fecha publicación: ${element.height}</p>
      <div>
      <p><strong>Descripción:</strong> ${element.candy}</p>
      <p><strong>Requisitos:</strong> ${element.candy}</p>
      <p><strong>Beneficios:</strong> ${element.egg}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-dismiss="modal">CERRAR</button>
        <button type="button" class="btn btn-dark">POSTULAR</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      </div>
      `
       })
  return resultshowdata;
   
  };
  
  let select = document.getElementById("type");
  select.addEventListener("change", () => {
    let condition = select.value;
    let resultFilter = window.filterData( data,condition);
   pokeFilter.innerHTML="";
    resultFilter.forEach(element => {
  
    pokeFilter.innerHTML +=
    ` <div class="card-with-modal">
    <div class="card">
    <div class="img">
    <div class="card-title">
      <h2>${element.name}</h2>
      <p>Empresa: ${element.num}</p>
      <p>Jornada: ${element.weight}</p>
      <p>Fecha publicación: ${element.height}</p>
      </div>
      <div>
      </div>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
 Ver más
</button>

<div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Empresa: ${element.num}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h2>${element.name}</h2>
      <p>Jornada: ${element.weight}</p>
      <p>Fecha publicación: ${element.height}</p>
      <div>
      <p><strong>Descripción:</strong> ${element.candy}</p>
      <p><strong>Requisitos:</strong> ${element.candy}</p>
      <p><strong>Beneficios:</strong> ${element.egg}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-dismiss="modal">CERRAR</button>
        <button type="button" class="btn btn-dark">POSTULAR</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      </div>
      `
       });
      });