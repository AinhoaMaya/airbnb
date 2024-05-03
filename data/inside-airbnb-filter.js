(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/inside-airbnb.json', 'utf-8')
  const locations = JSON.parse(file)

  // 2º Conecta via fetch esta url 
  const fileData = await fs.readFile('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')
  const data = JSON.parse(file)


  // EJERCICIO
  // Devolver los datos que contengan "Spain" con un filter

  // const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  // return filterSpain;


  // Devolver los datos que no contengan "Spain" con un filter
  // 1º Partiendo de los gestores extranjeros:

  // const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));

  // return foreigner;


  // 1.1 Busca en el archivo inside-airbnb.json qué propiedades tienen
  const propertiesForeigners = foreigners.filter(foreigner => {
    return foreigner.some(foreign => foreign.hostId === property.hostId);
  });

  console.log(propertiesForeigners);


  // 1.2 Una vez hecho esto extrae de esos datos la licencia, latitude, longitude, neighbourhood_cleansed, host_name en nuevo array de objetos
  const licenses = data.map (element => {
    return{ 
      poblacion: element.host_location,
      licencia: element.license,
      longitude: element.longitude,
      neighbourhood_cleansed: element.neighbourhood_cleansed,
      host_name: host_name
    }
  })

  console.log(licenses)


  // 1.3 Y busca por cada licencia de propiedad quién es su explotador (penúltimo dato de cada registro)

  // 3º Adjunta el nombre del explotador a el conjunto de datos que has escrito en el punto 1
})()