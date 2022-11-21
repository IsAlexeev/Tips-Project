import {createContext, useState} from "react";


export const ViewIdContext = createContext([null, () => null]);

export const IdViewTags = (props) => {
    const state = useState(null);


    return <ViewIdContext.Provider value={state}>{props.children}</ViewIdContext.Provider>
}
