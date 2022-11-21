import {createContext, useState} from "react";

export const ContextActive = createContext([false, () => null]);

export const ActiveTags = (props) => {
    const stateActive = useState(false);

    return <ContextActive.Provider value={stateActive}>{props.children}</ContextActive.Provider>
}
