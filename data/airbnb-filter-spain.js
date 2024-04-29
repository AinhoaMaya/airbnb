(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

// Devolver los datos que contengan "Spain" con un bucle
  
  // locations.forEach (location => {
  //   if (location.hostLocation && location.hostLocation.includes('Spain')) {
  //     console.log(location)
  //   }
  // })


// Devolver los datos que contengan "Spain" con un filter

  // const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  // return filterSpain;

// Devolver los datos que contengan "Spain" con un filter

  const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));

  return foreigner;
})()





// Ejercicios:
// Porcentaje de plazas que tienen los Españoles y los extranjeros, con redux

// 1.Filtrar "inside-airb.json" y sacar los que no son de España; 2.Filtrar: host_name y ubicacion; 3.Filtrar la licencia de los nombres de "host_name" y dejarlos en un JSON aparte 4.llamada fetch al CAIB y extraer el nombre del explotador (poner las licencias como un array) - mirar con includes si tiene la licencia y saca el nombre del explotador (la localicación GPS está en el inside, también sacarlo para luego localizarlo en un mapa)

//para punto 1: map

