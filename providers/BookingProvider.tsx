import { createContext } from "react";

export const BookingContext = createContext({});

const BookingProvider = ({ children }) => {
    return (
        <BookingContext.Provider value={{ items: [], onAddItem: () => {} }}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;
