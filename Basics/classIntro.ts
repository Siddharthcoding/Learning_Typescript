class Coder {
    name: string 
    music!: string // ! means that this property will be initialized later
    age: number
    lang: string

    constructor(name: string, age: number, lang: string) {
        this.name = name
        this.age = age
        this.lang = lang
    }
}