import {createContext, useState} from "react";


export const Context = createContext([false, () => null]);

export const SettingContext = (props) => {
    const state = useState(false);

    return <Context.Provider value={state}>
        {props.children}
    </Context.Provider>
}
