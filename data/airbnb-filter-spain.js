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

  const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  return filterSpain;

})()

// Porcentaje de plazas que tienen los Españoles y los estrangeros, con redux

