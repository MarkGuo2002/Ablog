import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
