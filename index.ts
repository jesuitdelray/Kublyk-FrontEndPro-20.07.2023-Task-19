class Human {
    name: string
    gender: string

    constructor(name: string, gender: string) {
        this.name = name
        this.gender = gender
    }
}

class Apartment {
    residents: Human[]

    constructor() {
        this.residents = []
    }

    addResident(person: Human): void {
        this.residents.push(person)
    }
}

class House {
    apartments: Apartment[]
    maxApartments: number

    constructor(maxApartments: number) {
        this.apartments = []
        this.maxApartments = maxApartments
    }

    addApartment(apartment: Apartment): void {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment)
        } else {
            console.log("Максимальна кількість квартир у будинку вичерпана.")
        }
    }
}

const person1 = new Human("Анна", "жінка")
const person2 = new Human("Петро", "чоловік")
const person3 = new Human("Олександра", "жінка")
const person4 = new Human("Іван", "чоловік")

const apartment1 = new Apartment()
apartment1.addResident(person1)
apartment1.addResident(person2)

const apartment2 = new Apartment()
apartment2.addResident(person3)
apartment2.addResident(person4)

const house = new House(2)
house.addApartment(apartment1)
house.addApartment(apartment2)
