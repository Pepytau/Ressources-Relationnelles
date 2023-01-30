import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';

import Menu from './src/components/Menu';
import Login from './src/components/Login';
import Search from './src/components/Search';
import Discover from './src/components/Discover';
import Favorite from './src/components/Favorite';
import Account from './src/components/Account';
import Register from './src/components/Register';
import RessourceDetail from './src/components/RessourceDetail';

const Stack = createStackNavigator();

const defaultGlobalState = {
  mail: '',
  name: '',
  surname: '',
  firstName: ''
};

const animation = {
  animation: 'timing',
  config: {
    duration:0
  },
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

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
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, transitionSpec: { open : animation, close : animation },cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false, transitionSpec: { open : TransitionSpecs.TransitionIOSSpec, close : TransitionSpecs.TransitionIOSSpec }, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} />
          <Stack.Screen name="RessourceDetail" component={RessourceDetail} options={{ headerShown: false, transitionSpec: { open : TransitionSpecs.TransitionIOSSpec, close : TransitionSpecs.TransitionIOSSpec }, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false, transitionSpec: { open : animation, close : animation },cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Discover" component={Discover} options={{ headerShown: false, transitionSpec: { open : animation, close : animation },cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false, transitionSpec: { open : animation, close : animation },cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Account" component={Account} options={{ headerShown: false, transitionSpec: { open : animation, close : animation },cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false, transitionSpec: { open : TransitionSpecs.TransitionIOSSpec, close : TransitionSpecs.TransitionIOSSpec },cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}
