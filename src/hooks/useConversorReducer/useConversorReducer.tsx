/* eslint-disable react-hooks/exhaustive-deps */
import { conversoresReducer } from "@/reducers/index";
import { useEffect, useReducer } from "react";

function useConversorReducer(slug: string) {
    const [state, dispatch] = useReducer(conversoresReducer, {slug});
    useEffect(() => {
      dispatch({type: slug})
    }, [])
  
    const nomesDasUnidades: string[] = Object.keys(state);
    const valoresDasUnidades: string[] = Object.values(state);

    return {
        nomesDasUnidades,
        valoresDasUnidades,
        state
    }
}

export default useConversorReducer;