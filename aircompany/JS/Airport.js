const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {
    
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        let passangerPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) passangerPlanes.push(plane);
        }
        return passangerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof MilitaryPlane) militaryPlanes.push(plane);
        }
        return militaryPlanes;
    }

    getExperimentalPlanes(){
        let experimentalPlanes  = [];
        for (let plane of this.planes) {
            if (plane instanceof ExperimentalPlane) experimentalPlanes.push(plane);
        }
        return experimentalPlanes;
    }

    getPassengerPlaneWithMaxPassengerCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 1; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].passengersCapacity > planeWithMaxCapacity.passengersCapacity) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].militaryType === MilitaryType.transport) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes(){
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].militaryType === MilitaryType.bomber) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.maxFlightDistance > b.maxFlightDistance) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.maxSpeed > b.maxSpeed) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.maxLoadCapacity > b.maxLoadCapacity) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
