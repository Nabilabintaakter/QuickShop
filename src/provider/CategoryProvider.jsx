/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => useContext(CategoryContext);
