'use client'
import { useContext, useState, createContext } from "react";

export const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [contentState, setContent] = useState("About");

    const contentSelect = (content) => {
        setContent(content)
    };

    return (
        <StateContext.Provider value={{ contentState, contentSelect }}>
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = () => {
    return useContext(StateContext)
}
