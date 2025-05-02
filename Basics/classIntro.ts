class Coder {

    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'TypeScript') {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return this.age
    }
}

const siddharth = new Coder("Siddharth", "Rock", 20)
// console.log(siddharth.age) // not allowed;
// console.log(siddharth.lang) // not allowed;
console.log(siddharth.getAge()) // allowed;

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return this.lang
    }

    public getAge() {
        // return this.age // not allowed;
        return this.getAge() // allowed; 
        return super.getAge() // allowed;

    }
}

const Sara = new WebDev("Mac", "Sara", "Pop", 22)
console.log(Sara.getLang()) // allowed;
console.log(Sara.getAge()) // allowed;

class Peeps {
    static count: number = 0
    getCount() {
        return Peeps.count
    }

    public id: number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Siddharth = new Peeps("Siddharth")
const Sara1 = new Peeps("Sara")
console.log(Peeps.count) // 2;
console.log(Siddharth.getCount()) // 2;

class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = []
    }

    public get data() : string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (!Array.isArray(value)) {
            throw new Error("Invalid data")
        }
        this.dataState = value
        return
    }
}

const myBand = new Bands()
myBand.data = ["Band1", "Band2"] // set data
console.log(myBand.data) // ["Band1", "Band2"] get data
// myBand.data = 3 // not allowed;
myBand.data = [...myBand.data, "Band3"] // set data
console.log(myBand.data) // ["Band1", "Band2", "Band3"] get data;

//abstract class

abstract class TakePhoto {
    constructor(public name: string) {
        this.name = name
    }

    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }
}

// const myPhoto = new TakePhoto("Siddharth") // not allowed;

class Instagram extends TakePhoto {
    constructor(name: string, public reels: number) {
        super(name)
        this.reels = reels
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const myPhoto = new Instagram("Siddharth", 3);
myPhoto.getReelTime() // 8


export {}