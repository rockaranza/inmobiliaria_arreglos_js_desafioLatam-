// Importacion de la data
import {propiedades_venta} from './data/propiedades_venta.js'

// Iterar sobre el arreglo de propiedades_venta
propiedades_venta.forEach(function(propiedad, index) {
  // Obtener el contenedor donde se insertará la tarjeta
  const contenedor = document.getElementById('contenedor-tarjetas'); // Asegúrate de tener un elemento con el ID "contenedor-tarjetas" en tu HTML

  // Crear un nuevo elemento div para la tarjeta
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('col-md-4'); // Agregar la clase "card" al nuevo elemento div
  tarjeta.classList.add('mb-4')
  // Construir el contenido de la tarjeta con los datos de la propiedad actual
  tarjeta.innerHTML = `
    
    <div class="card">
      <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
          <i class="fas fa-bath"></i> 2 Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
            ${propiedad.smoke ? '<i class="fas fa-check-circle"></i> Se permite fumar' : '<i class="fas fa-times-circle"></i> No se permite fumar'}
          </p>
          <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
            ${propiedad.pets ? '<i class="fas fa-check-circle"></i> Mascotas permitidas' : '<i class="fas fa-times-circle"></i> No se permiten mascotas'}
          </p>
      </div>
    </div>

  `;

  // Agregar la tarjeta al contenedor
  contenedor.appendChild(tarjeta);
});