import { useRef, useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);  // useRef is a generic hook that can take a type argument

    useEffect(() => {
        inputRef.current?.focus(); // Focus the input element when the component mounts
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}