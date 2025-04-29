function addTwo(num : number): number {
    return num + 2;
    // return "hello";
}

addTwo(8);

let signUpUser = (name: string, email: string, isPaid: boolean = false) => {}
signUpUser("abc", "abc@def.com");

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero):string => {
    return `hero is ${hero}`;
    // return 1;
})

function consoleError(errMsg: string):void {
    console.log(errMsg);
    // return 1;
}

function handleError(errMsg:string) :never {
    throw new Error(errMsg);
}

export {}