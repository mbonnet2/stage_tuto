import React, {createContext, useReducer} from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const Context = createContext();

const Default = {
    darkmode: false
};

/*function Reducer(state, action) {
  switch(action.type) {
  case "setValue": return ({...state, [action.key]: action.value});
  case "setState": return ({...state, ...action.state});
  default: return ({...state});
  }
}*/

const Provider = ({children}) => {
    const [ctx, uptCtx] = useState({...Default});

    return (
        <Context.Provider value={[ctx, uptCtx]}>
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {children: PropTypes.element};

const useContext = () => React.useContext(Context);

export default useContext;
export {Provider};