import { z } from "zod";
import { fromZodError } from "zod-validation-error"

// // enum Hobbies {
// //     Programming = "programming",
// //     Sports = "sports",
// //     Music = "music",
// //     Art = "art"
// // }

// const hobbies = ["programming", "sports", "music", "art"] as const; // as const - makes the array readonly

// const UserSchema = z.object({
//     username: z.string().min(3).max(20),
//     age: z.number().gt(18),
//     birthday: z.date(),
//     isProgrammer: z.boolean().default(true),
//     friends: z.array(z.string()).nonempty(),
//     // hobby: z.enum(["sports", "music", "art"]).optional(),   // enum - allows only specific values
//     // hobby: z.nativeEnum(Hobbies).optional(), // nativeEnum - allows enum values
//     hobby: z.enum(hobbies).optional(), // array - allows specific values
// }).merge(z.object({  // merges two schemas
//     language: z.string(),
// })).passthrough()    // lets additional keys be there while parsing 

// type User = z.infer<typeof UserSchema>;

// const user: User = {
//     username: "ABC",
//     age: 20,
//     birthday: new Date("2000-01-01"),
//     isProgrammer: true,
//     friends: ["A", "B"],
//     hobby: "art",
//     language: "Typescript",
//     name: "Siddharth",
// };

// // const user = UserSchema.parse({       // parse - validates the data
// //     username: "ABC",
// //     age: 20,
// //     birthday: new Date("2000-01-01"),
// //     hobby: "art",
// // });

// console.log(UserSchema.parse(user)); // { username: 'ABC' }

// console.log(UserSchema.safeParse(user).success); // true

// UserSchema.shape.friends.element;  // tells the type of elemenets of the array

// console.log(UserSchema.shape.username); // it will return the schema of username

// console.log(UserSchema.partial().parse(user)); // makes all fields optional


// // nullable - allows null values
// // nullish - allows null and undefined values

// Advanced types
const UserSchema = z.object({
    id: z.union([z.string(), z.number()]), // union - allows either of the types
    // id: z.string().or(z.number()), // or - allows either of the types
    username: z.string().min(3).max(20),
    coords: z.tuple([z.number(), z.string(), z.number().gt(5).int()]),  // tuple - allows array of specific length and types
    details: z.tuple([z.string(), z.date()]).rest(z.number()),   // rest - allows array of specific length and types with rest of the elements of specific type
});

const user = {
    id: 21,
    username: "ABC",
    coords: [1, "2", 6],
    details: ["test", new Date(), 1, 2, 3],
}

console.log(UserSchema.safeParse(user).success);  // true

const ResultSchema = z.object({
    id: z.discriminatedUnion("status", [    // discriminanted Union is used when we have multiple types with a common property
        z.object({status: z.literal('Passed'), data: z.string()}),
        z.object({status: z.literal('Failed'), error: z.instanceof(Error)}),
    ])
}).strict()   // strict - throws error if the data is not valid

const Result = {
    id: {status: "Passed", data: "Random"},
}

console.log(ResultSchema.parse(Result)); // { id: { status: 'Passed', data: 'Random' } }

const UserMap = z.record(z.string());  // defines the type of object with string values
const AdminMap = z.record(z.string(), z.number()); // defines the type of object with and string keys and number values

const userMap = {
    1: "abc",
    3: "def",
    ch: "jkl",
}

console.log(UserMap.parse(userMap));

const DataMap = z.map(z.string(), z.object({name: z.string(), age: z.number()})); // defines the type of object with string keys and object

const data = new Map([
    ["1", {name: "abc", age: 21}],
    ["2", {name: "def", age: 22}],
])

const UniqueSchema = z.set(z.number());
const uniqueData = new Set([1, 1, 2, 2]);  // set - allows unique values

console.log(DataMap.parse(data));
console.log(UniqueSchema.parse(uniqueData)); // Set { 1, 2 }

// Zod does 2 step promise validation, first it checks if it is a promise, then it checks if the data is valid type
const PromiseSchema = z.promise(z.string());   // defines the type of promise with string value

const p = Promise.resolve("msg") // promise with string value

console.log(PromiseSchema.parse(p)); // "msg"

// Custom validation

const brandEmail = z.string()
                    .email()
                    .refine(val => val.endsWith("@zod.com"), {  // refine allows to add customized validations
                        message: "Email must end with @zod.com"
                    })

const email = "abc@zod.com";

const result = brandEmail.safeParse(email);

if(!result.success) {
    console.log(fromZodError(result.error)); // displays understandable error message
}
