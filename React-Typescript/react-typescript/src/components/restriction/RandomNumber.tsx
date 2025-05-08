type RandomNumberType = {
    value: number,
}

type Positive = RandomNumberType & {
    isPositive: boolean
    isNegative?: never  // this property should not be present if isPositive is true
    isZero?: never // this property should not be present if isPositive is true
}

type Negative = RandomNumberType & {
    isNegative: boolean
    isPositive?: never  
    isZero?: never 
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = Positive | Negative | Zero

export const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => { // destructuring props
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}  
        </div>
    ) // returning a div with the value and the type of number
}