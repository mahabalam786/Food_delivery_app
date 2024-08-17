import { useContext, useReducer, createContext } from "react";

const contextCart = createContext();
const contextDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          img: action.img,
          id: action.id,
          name: action.name,
          price: action.price,
          quantity: action.quantity,
          size: action.size,
          description:action.description
        },
      ];

      case 'REMOVE':
         let  newarr = [...state]
           newarr.splice(action.index,1)
          return  newarr

          case 'CHECKOUT':
            return []
    default:
      break;
  }
};

export const ContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <contextCart.Provider value={state}>
      <contextDispatch.Provider value={dispatch}>
        {children}
      </contextDispatch.Provider>
    </contextCart.Provider>
  );
};

export const useCart = () => useContext(contextCart);
export const useDispatch = () => useContext(contextDispatch);
