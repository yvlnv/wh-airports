class Plane {
    constructor({name, capacity, destination}) {
        this.boarded_passengers = []
        this.capacity = capacity
        this.destination = destination
        this.name = name
    }
    board(passenger) {
        this.boarded_passengers.push(passenger)
    }
}

module.exports = Plane