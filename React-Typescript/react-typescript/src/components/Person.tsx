// typing an object prop
import type {PersonProps} from "./Person.types"  // This is a prop that can accept an object with first and last name

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}