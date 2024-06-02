import React, { createContext, useState, useContext, ReactNode } from 'react'

interface blockContextType {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const blockContext = createContext(false)