import { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";
import {isMatch} from "lodash"

const monday = mondaySdk();

export function useAppContext() {
    const [appContext, setAppContext] = useState({isLoading: true});

    useEffect(() => {
        const unsubscribe = monday.listen('context', (contextEvent) => {
            console.log("Full context event data from SDK:", contextEvent.data); // Log the whole data object
            const currentTheme = contextEvent.data?.theme; // Safely access theme

            setAppContext((previousContext) => {
                const newContext = {
                    isLoading: false,
                    themeIdentifierString: currentTheme, // Use a clear name
                    ...contextEvent, // Spread the rest of the context
                    data: { ...contextEvent.data } // Ensure data is also spread as per task
                };
                return isMatch(previousContext, newContext) ? previousContext : newContext;
            });
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    return appContext;
}