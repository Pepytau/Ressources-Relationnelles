const initialState = {
    user: {
        mail: String,
        name: String,
        surname: String,
        profilePic: Blob
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setUser':
        return {
            ...state,
            mail: action.mail,
            name: action.name,
            surname: action.surname
        };
        default:
        return state;
    }
 };

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeConsumerHook = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => (
   <ThemeContext.Provider value={useReducer(reducer, initialState)}>
       {children}
   </ThemeContext.Provider>
);