(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

  // const files = await fs.readFile('../data/inside-airbnb-filter', 'utf-8')
  // const locations = JSON.parse(files)

  const response = await fetch('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')
  this.data = await response.json()

// Devolver los datos que contengan "Spain" con un bucle
  
  locations.forEach (location => {
    if (location.hostLocation && location.hostLocation.includes('Spain')) {
      console.log(location)
    }
  })


// Devolver los datos que contengan "Spain" con un filter y los que no contengan "Spain" con un filter

  // const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  // return { filterSpain, foreigner };

// Devolver los datos que no contengan "Spain" con un filter

//   const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));

//   return foreigner;
// })()

// Porcentaje de plazas que tienen los Españoles con reduce

const percentatgeSpain = (locations) => {
  const results = locations.reduce((acc, location) => {
    acc.total++;

    if (location.host_location && location.host_location.includes('Spain')) {
      acc.spainCount++;
    }
    return acc;
  }, { spainCount: 0, total: 0 });


  if (results.total > 0) {
    const percentage = (results.spainCount / results.total) * 100;
    return percentage.toFixed(2) + '%';
  } else {
    return '0%';
  }
};

const percentatgeSpainList = percentatgeSpain(locations);
console.log(percentatgeSpainList);


// Porcentaje de plazas que tienen los extranjeros con reduce
const percentatgeForeigners = (locations) => {
  const results = locations.reduce((acc, location) => {
    acc.total++;

    if (location.host_location && location.host_location.includes('Spain')) {
      acc.spainCount++;
    }
    return acc;
  }, { spainCount: 0, total: 0 });


  if (results.total > 0) {
    const percentage = (results.spainCount / results.total) * 100;
    return percentage.toFixed(2) + '%';
  } else {
    return '0%';
  }
};

const percentatgeForeignersList = percentatgeForeigners(locations);
console.log(percentatgeForeignersList);

})


// 1.Filtrar "inside-airb.json" y sacar los que no son de España; 2.Filtrar: host_name y ubicacion; 3.Filtrar la licencia de los nombres de "host_name" y dejarlos en un JSON aparte 4.llamada fetch al CAIB y extraer el nombre del explotador (poner las licencias como un array) - mirar con includes si tiene la licencia y saca el nombre del explotador (la localicación GPS está en el inside, también sacarlo para luego localizarlo en un mapa)

//para punto 1: map

// EJERCICIO
// 1º Partiendo de los gestores extranjeros:


// const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));
//   return foreigner;
// })()

// // Busca en el archivo inside-airbnb.json qué propiedades tienen
// const propertiesForeigners = foreigners.filter(foreigner => {
//   return foreigner.some(foreign => foreign.hostId === property.hostId);
// });

// console.log(propertiesForeigners);


// una vez hecho esto extrae de esos datos la licencia, latitude, longitude, neighbourhood_cleansed, host_name en nuevo array de objetos

// 2º Conecta via fetch esta url 
// https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD

  

// Y busca por cada licencia de propiedad quién es su explotador (penúltimo dato de cada registro)

// 3º Adjunta el nombre del explotador a el conjunto de datos que has escrito en el punto 1