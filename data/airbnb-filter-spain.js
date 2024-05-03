(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

  const response = await fetch('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')


  // Devolver los datos que contengan "Spain" con un bucle
  
  // locations.forEach (location => {
  //   if (location.hostLocation && location.hostLocation.includes('Spain')) {
  //     console.log(location)
  //   }
  // })


  // Devolver los datos que contengan "Spain" con un filter

  const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));


  // Devolver los datos que no contengan "Spain" con un filter

  const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));


  // Porcentaje de plazas que tienen los Españoles y los extranjeros con reduce

  const percentatgeSpainPlaces = spanishOwners.reduce((acc, curr) => acc + parseFloat(curr.percentatgeSpainPlaces), 0);

  const percentatgeForeignPlaces = foreignOwners.reduce((acc, curr) => acc + parseFloat(curr.percentatgeForeignPlaces), 0);


  console.log('Spanish owners:', percentatgeSpainPlaces.toFixed(2))
  console.log('Foreign owners:', percentatgeForeignPlaces.toFixed(2))


  // Saber de que País viene cada uno

})()