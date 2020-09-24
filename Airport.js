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
}

module.exports = Airport