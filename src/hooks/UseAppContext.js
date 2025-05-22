import { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";
import {isMatch} from "lodash"

const monday = mondaySdk();

export function useAppContext() {
    const [appContext, setAppContext] = useState({isLoading: true});

    useEffect(() => {
        const unsubscribe = monday.listen('context', (contextEvent) => {
            console.log("Received context event data:", contextEvent.data); // Log data structure
            setAppContext((previousContext) => {
                const newContext = {isLoading: false, ...contextEvent, theme: contextEvent.data.theme };
                return isMatch(previousContext, newContext) ? previousContext : newContext;
            });
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    return appContext;
}