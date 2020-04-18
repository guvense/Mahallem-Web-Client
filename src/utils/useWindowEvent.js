import { useEffect } from "react";

export const useWindowEvent = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);

        return () => {

            window.removeEventListener(event, callback)
        };
    }, [ event, callback]);
};
