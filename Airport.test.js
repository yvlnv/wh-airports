const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Airport', function () {
    test('has a name', function() {
        const airport = new Airport({name: 'Heathrow'})
        expect(airport.name).toEqual("Heathrow")
    })

    test('plane landed at the airport', () => {
        const airport = new Airport({name: "Domodedovo"})
        const plane = new Plane({name: "Mig"})
        airport.land(plane)
        expect(plane).toEqual(airport.planes[0])
    })

    test('passenger boarded the plane at the airport', () => {
        const airport = new Airport({name: "Domodedovo"})
        const plane = new Plane({name: "Mig"})
        const passenger = new Passenger({name: "Anna"})
        airport.land(plane)
        plane.board(passenger)
        expect(plane.boarded_passengers).toContain(passenger)
        expect(airport.planes).toContain(plane)
    })

})