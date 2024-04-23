import { createContext, useState, useContext } from "react";

export const SchedulingContext = createContext();

export const SchedulingProvider = ({ children }) => {
    const [IsScheduled, setIsScheduled] = useState("");

    
}

