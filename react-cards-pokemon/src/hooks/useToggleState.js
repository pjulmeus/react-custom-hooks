import React, {useState} from "react";

const useToggleState = () => {
    const [state, setState] = useState();
    const toggleState = () =>{
        setState(state => !state)
    }
    return [state, toggleState]
}

export default useToggleState