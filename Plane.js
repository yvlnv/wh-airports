class Plane {
    constructor() {
        this.boarded_passengers = []
        this.capacity = undefined
        this.destination = undefined
        this.name = undefined
    }
    board(passenger) {
        this.boarded_passengers.push(passenger)
    }

    setDestination(destination) {
        this.destination = destination
    }

    setLocation(location) {
        this.location = location
    }
}

module.exports = Plane