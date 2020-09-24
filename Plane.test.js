const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Plane', function () {
    test('has a name', function() {
        const plane = new Plane()
        plane.name = "Condor"
        expect(plane.name).toEqual("Condor")
    })

    test('passenger boarded the plane', () => {
        const plane = new Plane({name: 'Mig'})
        const ben = new Passenger({name: "Ben"})
        plane.board(ben)
        expect(ben).toEqual(plane.boarded_passengers[0])
    })

    test('passengers boarded the plane', () => {
        const plane = new Plane({name: 'Mig'})
        const ben = new Passenger({name: "Ben"})
        const elisa = new Passenger({name: "Elisa"})
        const jen = new Passenger({name: "Jen"})
        plane.board(ben)
        plane.board(elisa)
        plane.board(jen)
        expect(plane.boarded_passengers).toContain(ben)
        expect(plane.boarded_passengers).toContain(elisa)
        expect(plane.boarded_passengers).toContain(jen)
    })

    test('boarding capacity not reached', () => {
        const plane = new Plane()
        plane.capacity = 100
        const ben = new Passenger({name: "Ben"})
        const elisa = new Passenger({name: "Elisa"})
        const jen = new Passenger({name: "Jen"})
        plane.board(ben)
        plane.board(elisa)
        plane.board(jen)
        expect(plane.capacity).toBeGreaterThan(plane.boarded_passengers.length)
    })

})