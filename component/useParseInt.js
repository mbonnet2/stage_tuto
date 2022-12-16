import React, {useState, useEffect} from "react";

const useParseInt = (str) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (!str) {setValue(null); return;}
        try {
            setValue(parseInt(str));
        } catch (e) {
            console.error(e);
            setValue(null);
        }
    }, [str])
    
    return value;
}

export default useParseInt;