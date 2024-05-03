(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/airbnb-owner-ranking-last-year.json', 'utf-8')
  const locations = JSON.parse(file)

  // const files = await fs.readFile('../data/inside-airbnb-filter', 'utf-8')
  // const locations = JSON.parse(files)

  const response = await fetch('https://catalegdades.caib.cat/api/views/3q3t-usfm/rows.json?accessType=DOWNLOAD')
  this.data = await response.json()


// Devolver los datos que contengan "Spain" con un bucle
  
  // locations.forEach (location => {
  //   if (location.hostLocation && location.hostLocation.includes('Spain')) {
  //     console.log(location)
  //   }
  // })


// Devolver los datos que contengan "Spain" con un filter

  const filterSpain = locations.filter(location => location.hostLocation && location.hostLocation.includes('Spain'));

  return filterSpain;


// Devolver los datos que no contengan "Spain" con un filter

  // const foreigner = locations.filter(location => location.hostLocation && !location.hostLocation.includes('Spain'));

  // return foreigner;


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

    if (location.host_location && !location.host_location.includes('Spain')) {
      acc.foreingCount++;
    }
    return acc;
  }, { foreingCount: 0, total: 0 });


  if (results.total > 0) {
    const percentage = (results.foreingCount / results.total) * 100;
    return percentage.toFixed(2) + '%';
  } else {
    return '0%';
  }
};

const percentatgeForeignersList = percentatgeForeigners(locations);
console.log(percentatgeForeignersList);

})