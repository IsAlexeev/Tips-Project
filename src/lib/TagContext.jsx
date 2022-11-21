import {createContext, useState} from "react";


export const ContextId = createContext([false, () => null]);

export const TagContext = (props) => {
    const stateId = useState(null);

  return  <ContextId.Provider value={stateId}>
        {props.children}
    </ContextId.Provider>
}
