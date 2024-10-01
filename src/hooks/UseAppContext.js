import { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";
import {isMatch} from "lodash"

const monday = mondaySdk();

export function useAppContext() {
    const [appContext, setAppContext] = useState({isLoading: true});

    useEffect(() => {
        const unsubscribe = monday.listen('context', (contextEvent) => {
            setAppContext((previousContext) =>
                isMatch(previousContext, contextEvent) ? previousContext : {isLoading: false, ...contextEvent}
            );
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    return appContext;
}