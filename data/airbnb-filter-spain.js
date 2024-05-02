(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

  const files = await fs.readFile('../data/inside-airbnb-filter', 'utf-8')
  const foreigners = JSON.parse(files)

// Devolver los datos que contengan "Spain" con un bucle
  
  // locations.forEach (location => {
  //   if (location.hostLocation && location.hostLocation.includes('Spain')) {
  //     console.log(location)
  //   }
  // })


// Devolver los datos que contengan "Spain" con un filter

  // const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  // return filterSpain;

// Devolver los datos que no contengan "Spain" con un filter

//   const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));

//   return foreigner;
// })()

// Porcentaje de plazas que tienen los Españoles y los extranjeros, con reduce

// const totals = listings.reduce((acc, item) => {
//   const location = item.hostLocation.toLowerCase();
//   const beds = parseInt(item.beds, 10);

//   if (location.includes("spain") || location === "") {
//     acc.spanishBeds += beds;
//   } else {
//     acc.foreignBeds += beds;
//   }

//   return acc;
// }, { spanishBeds: 0, foreignBeds: 0 });

// const totalBeds = totals.spanishBeds + totals.foreignBeds;
// const spanishPercentage = (totals.spanishBeds / totalBeds) * 100;
// const foreignPercentage = (totals.foreignBeds / totalBeds) * 100;

// console.log(`Porcentaje de camas de anfitriones españoles: ${spanishPercentage.toFixed(2)}%`);
// console.log(`Porcentaje de camas de anfitriones extranjeros: ${foreignPercentage.toFixed(2)}%`);

// 1.Filtrar "inside-airb.json" y sacar los que no son de España; 2.Filtrar: host_name y ubicacion; 3.Filtrar la licencia de los nombres de "host_name" y dejarlos en un JSON aparte 4.llamada fetch al CAIB y extraer el nombre del explotador (poner las licencias como un array) - mirar con includes si tiene la licencia y saca el nombre del explotador (la localicación GPS está en el inside, también sacarlo para luego localizarlo en un mapa)

//para punto 1: map

// EJERCICIO
// 1º Partiendo de los gestores extranjeros:


const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));
  return foreigner;
})()

// Busca en el archivo inside-airbnb.json qué propiedades tienen
const propertiesForeigners = foreigners.filter(foreigner => {
  return foreigner.some(foreign => foreign.hostId === property.hostId);
});

console.log(propertiesForeigners);


// una vez hecho esto extrae de esos datos la licencia, latitude, longitude, neighbourhood_cleansed, host_name en nuevo array de objetos

// 2º Conecta via fetch esta url 
// https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD

async loadData () {
  const response = await fetch('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')
  this.data = await response.json()
}

// Y busca por cada licencia de propiedad quién es su explotador (penúltimo dato de cada registro)

// 3º Adjunta el nombre del explotador a el conjunto de datos que has escrito en el punto 1