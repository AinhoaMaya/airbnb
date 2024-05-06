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

  // const dataProperty = properties => {
  //   const resultado = {};

  //   properties.alaior.forEach(property => {
  //     const year = property.date.split('-')[0];
  //     const value = parseInt(property.value, 10);

  //     if (!resultado[year]) {
  //       resultado[year] = 0;
  //     }

  //     resultado[year] += value;
  //   });

  //   return { alaior: resultado };
  // }

  // const resultadoFinal = dataProperty(property);
  // console.log(resultadoFinal);

  // Recorrer el array, y crear un objeto donde cada una de las claves sea la fecha y hacer la suma total de los valores de los años con "reduce"
  // try{
  //   const towns = {}

  //   Object.entries(data).forEach(([key, value]) => {
  //     const years = value.reduce((acc, element) => {
  //       const year = element.data.split('-')[0]
        
  //       if (!acc[year]) {
  //         acc[year] = parseFloat(element.value)
  //       } else {
  //         acc[year] += parseFloat(element.value)
  //       }

  //       return acc
  //     }, {})

  //     towns[key] = years // en cada vuelta de towns, se crea una clave, cuyo valor es "years"

  //     console.log(years)
  //     console.log(key)
  //   })


  // } catch (error) {
  //   console.log(error)
  // }

  const dataProperty = properties => {
    // Utilizamos reduce para acumular los resultados en un objeto
    const resultado = properties.alaior.reduce((acc, property) => {
      const year = property.date.split('-')[0]; // Extraemos el año de la fecha
      const value = parseInt(property.value, 10); // Convertimos el valor a número

      // Inicializamos el año en el acumulador si no existe aún
      if (!acc[year]) {
          acc[year] = 0;
      }

      acc[year] += value; // Sumamos el valor al total del año correspondiente
      return acc; // Retornamos el acumulador actualizado para la siguiente iteración
    }, {}); // El objeto vacío {} es el valor inicial del acumulador acc

    return { alaior: resultado };
  };

  const resultadoFinal = dataProperty(property);
  console.log(resultadoFinal);

  // Crear un nuevo json a partir de los resultados
  try {
    await fs.writeFile('../data/result-years.json', JSON.stringify(resultadoFinal, null, 2), 'utf8');
    console.log("El archivo JSON fue guardado correctamente.");
  } catch (error) {
    console.error("Error al escribir el archivo JSON:", error);
  }

})()