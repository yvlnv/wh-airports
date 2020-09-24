const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Airport', function () {
    test('has a name', function() {
        const LHR = new Airport({name: 'Heathrow'})
        expect(LHR.name).toBe("Heathrow")
    })

    test('plane landed at the airport', () => {
        const DME = new Airport({name: "Domodedovo"})
        const plane = new Plane()
        DME.landPlane(plane)
        expect(plane).toEqual(DME.planes[0])
    })

    test('passenger boarded the plane at the airport', () => {
        const SVO = new Airport({name: "Sheremetyevo"})
        const plane = new Plane()
        const passenger = new Passenger({name: "Anna"})
        SVO.landPlane(plane)
        plane.board(passenger)
        expect(plane.boarded_passengers).toContain(passenger)
        expect(SVO.planes).toContain(plane)
    })

    test('each airport knows about all the others', () => {
        expect(Airport.airports.length).toBe(3)
        const LAX = new Airport({name: 'LAX'})
        expect(Airport.airports.length).toBe(4)
        expect(Airport.airports).toBeTruthy()
    })

    test('an airport has planes', () => {
        const plane1 = new Plane()
        const [LHR, LAX] = Airport.airports
        LHR.landPlane(plane1)
        expect(plane1.location).toBe('Heathrow')
        plane1.setDestination('LAX')
        LHR.departPlane(plane1)
        expect(LHR.planes.length).toBe(0)
        expect(LAX.planes.length).toBe(1)
    })

    test('two planes departet from aiport1 to airport2', () => {
        const plane1 = new Plane()
        const plane2 = new Plane()
        const [LHR, DME] = Airport.airports
        LHR.landPlane(plane1)
        LHR.landPlane(plane2)
        expect(plane1.location).toBe('Heathrow')
        expect(plane2.location).toBe('Heathrow')
        expect(LHR.planes.length).toBe(2)
        // already has a plane from test 2
        expect(DME.planes.length).toBe(1)
        plane1.setDestination('Domodedovo')
        plane2.setDestination('Domodedovo')
        LHR.departPlane(plane1)
        LHR.departPlane(plane2)
        expect(LHR.planes.length).toBe(0)
        expect(DME.planes.length).toBe(3)
        console.log(plane1)
        expect(plane1.location).toBe(DME.name)
        expect(plane1.location).toBe('Domodedovo')
    })

})