// Discriminated union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }

    return shape.side ** 2;
}

// Exhaustive checking

function findArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default: 
            const _exhaustiveCheck: never = shape; // This will cause a compile-time error if a new shape is added to the Shape type without updating this function
            return _exhaustiveCheck;
    }
}