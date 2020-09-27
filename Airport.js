const fs = require('fs')
const path = require('path')

class Airport {
    static airports = []

    constructor({name}) {
        this.planes = []
        this.name = name
        this.constructor.airports.push(this)
    }
    landPlane(plane) {
        this.planes.push(plane)
        plane.setLocation(this.name)
    }
    departPlane(plane) {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
        const destinationAirport = Airport.airports.find(airport => airport.name === plane.destination)
        destinationAirport.landPlane(plane)
        plane.destination = undefined
    }

    // Callback function
    getInfo(onInfo) {
        const airportName = this.name
        const locationOfFile = path.join(__dirname, 'airports.json')
        const callback = function (err, buffer) {
            const data = JSON.parse(String(buffer))
            // Add these lines to read from airports_initial.json instead
            // const arrayOfAirports = Object.keys(data).map(key => {
            //     return data[key]
            // })
            // Replace 'data' with 'arrayOfAirports' for airports_initial.json
            const result = data.find(airport => airport.iata === airportName)
            onInfo(err, result)
        }
        fs.readFile(locationOfFile, callback)
    }

    // function with Promises
    getInfoPromiseOrAwait() {
        return new Promise((resolve, reject) => {
            fs.readFile('./airports_initial.json', (err, data) => {
                if (err) return reject(err)
                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports)
                    .filter(airportCode => airports[airportCode].iata === this.name)
                    .map(airportCode => airports[airportCode])
                
                resolve(airport)
            })
        })
    }
}

module.exports = Airport