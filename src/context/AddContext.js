import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expense: state.expense.filter((exps) => exps.id !== action.payload),
      };

    case "UPDATE_EXPENSE":
      return {
        ...state,
        expense: [action.payload],
      };

    default:
      return state;
  }
};

const initialState = {
  expense: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expense: state.expense,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
