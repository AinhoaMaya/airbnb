(async () => {

  const fs = require('fs/promises')

  try {
    
    const file = await fs.readFile('../data/inside-airbnb-filter.json', 'utf-8')
    const data = JSON.parse(file)

    const places = {};

    data.forEach(element => {
      if(element.availability365 == "0") return

      let neighburhood = element.neighburhood;
      neighburhood = neighburhood?.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      const beds = element.beds ? parseInt(element.beds) : 0;

      if (places[neighburhood]) {
        places[neighburhood].places += beds;
        places[neighburhood].stablishments += 1;
      } else {
        places[neighburhood] = {
          plazas: beds,
          establecimientos: 1
        };
      }
    });

    const totalPlaces = Object.values(places).reduce((acum, curr) => acum + curr.places, 0);

    const results = Object.entries(places).map(([key, town]) => {
      const percentatgePlaces = (town.places / totalPlaces) * 100;
      const placesByStablishments = town.places / town.stablishments;

      return {
        town: key,
        stablishments: town.stablishments,
        places: town.places,
        percentatgePlaces: percentatgePlaces.toFixed(2), 
        placesByStablishments: placesByStablishments.toFixed(2) 
      };
    });

    const sortedData = results.sort((a, b) => parseFloat(b.percentatgePlaces) - parseFloat(a.percentatgePlaces));
    
    await fs.writeFile('../data/airbnb-ranking-last-year.json', JSON.stringify(sortedData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()