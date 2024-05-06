(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

  const files = await fs.readFile('../data/property-transmissions.json', 'utf-8')
  const property = JSON.parse(files)


  // Devolver los datos que contengan "Spain" con un bucle
  
  // locations.forEach (location => {
  //   if (location.hostLocation && location.hostLocation.includes('Spain')) {
  //     console.log(location)
  //   }
  // })


  // Devolver los datos que contengan "Spain" con un filter

  // const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));
  // console.log(filterSpain)


  // // Devolver los datos que no contengan "Spain" con un filter

  // const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));
  // console.log(foreigner)


  // Porcentaje de plazas que tienen los Españoles y los extranjeros con reduce

  // const percentatgeSpainPlaces = spanishOwners.reduce((acc, curr) => acc + parseFloat(curr.percentatgeSpainPlaces), 0);

  // const percentatgeForeignPlaces = foreignOwners.reduce((acc, curr) => acc + parseFloat(curr.percentatgeForeignPlaces), 0);

  // console.log('Spanish owners:', percentatgeSpainPlaces.toFixed(2))
  // console.log('Foreign owners:', percentatgeForeignPlaces.toFixed(2))


  // Saber de qué País viene cada uno
  
  // const foreignOwnerByCountry = foreigner.reduce((acc, owner) => {
  //   const country = owner.hostLocation.split(', ')[1]

  //   if (!acc[country]) {
  //     acc[country] = parseFloat(owner.percentatgePlaces)
  //   } else {
  //     acc[country] += parseFloat(owner.percentatgePlaces)
  //   }

  //   return acc
  // }, {})

  // console.log(foreignOwnerByCountry)


  // Ordenar por hostLocation

  // const ownerBedRankings = data.sort((a, b) => a.hostLocation.localeCompare(b.hostLocation))

  // console.log(ownerBedRankings)


  // Recorrer el array, y crear un objeto donde cada una de las claves sea la fecha y hacer la suma total de los valores de los años con "forEach"

  const dataProperty = properties => {
    const resultado = {};

    properties.alaior.forEach(property => {
      const year = property.date.split('-')[0];
      const value = parseInt(property.value, 10);

      if (!resultado[year]) {
        resultado[year] = 0;
      }

      resultado[year] += value;
    });

    return { alaior: resultado };
  }

  const resultadoFinal = dataProperty(property);
  console.log(resultadoFinal);

  // Recorrer el array, y crear un objeto donde cada una de las claves sea la fecha y hacer la suma total de los valores de los años con "reduce"

})()