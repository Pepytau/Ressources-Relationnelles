import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './src/components/Menu';
import Login from './src/components/Login';

const Stack = createStackNavigator();

const defaultGlobalState = {
  mail: String,
  name: String,
  surname: String,
  firstName: String
};

const GlobalStateContext = React.createContext(defaultGlobalState);
const DispatchStateContext = React.createContext(undefined);

export const useGlobalState = () => [
  React.useContext(GlobalStateContext),
  React.useContext(DispatchStateContext)
];

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default function App() {
  const [state, dispatch] = useGlobalState();
  console.log(state.mail)
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}
