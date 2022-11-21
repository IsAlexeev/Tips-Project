import {createContext, useState} from "react";

export const TagsContextRouters = createContext([null, () => null]);


export const TagsContextRouter = (props) => {
    const state = useState(null);


    return <TagsContextRouters.Provider value={state}>{props.children}</TagsContextRouters.Provider>
}
