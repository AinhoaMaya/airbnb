(async () => {

  const fs = require('fs/promises')

  const file = await fs.readFile('../data/inside-airbnb.json', 'utf-8')
  const data = JSON.parse(file)

  const licenses = data.map (element => {
    return{ 
      poblacion: element.host_location,
      licencia: element.license,
    }
  })

  console.log(licenses)
})()