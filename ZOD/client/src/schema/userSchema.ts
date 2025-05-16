import { z } from "zod";

// enum Hobbies {
//     Programming = "programming",
//     Sports = "sports",
//     Music = "music",
//     Art = "art"
// }

const hobbies = ["programming", "sports", "music", "art"] as const; // as const - makes the array readonly

const UserSchema = z.object({
    username: z.string().min(3).max(20),
    age: z.number().gt(18),
    birthday: z.date(),
    isProgrammer: z.boolean().default(true),
    friends: z.array(z.string()).nonempty(),
    // hobby: z.enum(["sports", "music", "art"]).optional(),   // enum - allows only specific values
    // hobby: z.nativeEnum(Hobbies).optional(), // nativeEnum - allows enum values
    hobby: z.enum(hobbies).optional(), // array - allows specific values
}).merge(z.object({  // merges two schemas
    language: z.string(),
})).passthrough()    // lets additional keys be there while parsing 

type User = z.infer<typeof UserSchema>;

const user: User = {
    username: "ABC",
    age: 20,
    birthday: new Date("2000-01-01"),
    isProgrammer: true,
    friends: ["A", "B"],
    hobby: "art",
    language: "Typescript",
    name: "Siddharth",
};

// const user = UserSchema.parse({       // parse - validates the data
//     username: "ABC",
//     age: 20,
//     birthday: new Date("2000-01-01"),
//     hobby: "art",
// });

console.log(UserSchema.parse(user)); // { username: 'ABC' }

console.log(UserSchema.safeParse(user).success); // true

UserSchema.shape.friends.element;  // tells the type of elemenets of the array

console.log(UserSchema.shape.username); // it will return the schema of username

console.log(UserSchema.partial().parse(user)); // makes all fields optional


// nullable - allows null values
// nullish - allows null and undefined values