const propiedades_alquiler = [
  {
    nombre: 'Apartamento 1',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ubicacion: 'Avenida Nombre 123',
    habitaciones: 3,
    costo: 1000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Apartamento 2',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ubicacion: 'Avenida Nombre 123',
    habitaciones: 3,
    costo: 1000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Apartamento 3',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ubicacion: 'Avenida Nombre 123',
    habitaciones: 3,
    costo: 1000,
    smoke: false,
    pets: true
  },
  
]
const propiedades_venta = [
  {
    nombre: 'Casa 1',
    src: '',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa aut aliquam dolore illo!',
    ubicacion: 'Avenida Nombre 123',
    habitaciones: 4,
    costo: 3000,
    smoke: false,
    pets: true
  }
]

// Iterar sobre el arreglo de propiedades_alquiler
propiedades_alquiler.forEach(function(propiedad, index) {
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
        <p class="text-danger">
          <i class="fas fa-smoking-ban"></i> ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}
        </p>
        <p class="text-success">
          <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </p>
      </div>
    </div>

  `;

  // Agregar la tarjeta al contenedor
  contenedor.appendChild(tarjeta);
});
