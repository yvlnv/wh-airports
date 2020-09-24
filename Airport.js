class Airport {
    constructor({name}) {
        this.planes = []
        this.name = name
    }
    land(plane) {
        this.planes.push(plane)
    }
}

module.exports = Airport