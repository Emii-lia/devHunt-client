import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { queryClient } from "../libs";


type AppProviderProps = {
    children: React.ReactNode
}


export  const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                {children}
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}