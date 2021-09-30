import React, { useEffect } from 'react'
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HeaderRight from './containers/navigationstack/HeaderRight';
import HeaderTitle from './containers/navigationstack/HeaderTitle';
import HeaderLeft from './containers/navigationstack/HeaderLeft';
import {
  main_screen,
  initial_screen,
  // welcome_screen,
  other_screen
} from './Screens';
import { connect } from 'react-redux';
import { BODY } from 'theme';
import { Text } from 'components';
import Home from 'modules/home/screens';

const Stack = createStackNavigator();
StatusBar.setHidden(false);

const MainScreen = main_screen.map((screen, idx) => {
  if (screen.header) {
    return (
      <Stack.Screen
        key={idx}
        name={screen.name}
        component={screen.component}
        options={({ route, navigation }) => ({
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: BODY.bg_LIGHT_GRAY,
            borderColor: 'transparent',
            elevation: 0
          },

          headerTitle: () => screen.headerTitle ? <HeaderTitle props={{ nav: navigation, name: screen.text }} /> : null,
          headerLeft: () => screen.headerLeft ? <HeaderLeft props={{ nav: navigation }} /> : null,
          headerRight: () => screen.headerRight ? <HeaderRight props={{ nav: navigation }} /> : null,
        })} />
    )
  } else {
    return (
      <Stack.Screen
        key={idx}
        name={screen.name}
        component={screen.component}
        options={({ route, navigation }) => ({
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })} />
    )
  }
});


const InitialScreen = initial_screen.map((screen, idx) => {
  return (
    <Stack.Screen
    key={idx}
    name={screen.name}
    component={screen.component}
      options={({ route, navigation }) => ({
        header: () => null,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })} />
      )
    });
    

    const OtherScreen = other_screen.map((screen, idx) => {
    
      if (screen.header) {
        return (
          <Stack.Screen
            key={idx}
            name={screen.name}
            component={screen.component}
            options={({ route, navigation }) => ({
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: {
                backgroundColor: BODY.bg_LIGHT_GRAY,
                borderColor: 'transparent',
                elevation: 0
              },
              headerTitle: () => screen.headerTitle ? <HeaderTitle props={{ nav: navigation, name: screen.text }} /> : <Text numberOfLines={1} style={{ fontSize: 18, alignSelf: 'center', marginRight: 30, color: BODY.THEME}}>{screen.text}</Text>,// CAHNGED TO TRANSPARENT  NOT YET DONE SCHHEMING
              headerLeft: () => screen.headerLeft ? <HeaderLeft props={{ nav: navigation }} /> : null,
              headerRight: () => screen.headerRight ? <HeaderRight props={{ nav: navigation }} /> : null,
            })} />
        )
      } else {
        return (
          <Stack.Screen
            key={idx}
            name={screen.name}
            component={screen.component}
            options={({ route, navigation }) => ({
              header: () => null,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            })} />
        )
      }
    });




const Routes = (props) => {
  let is_loggedin = props.login.is_loggedin;
  return (
    <NavigationContainer onStateChange={state => state.index == 0 ? StatusBar.setHidden(false) : StatusBar.setHidden(false)}>
      <Stack.Navigator  
      // headerMode="none"
      headerMode="screen"
      >
        {
          is_loggedin ?
            <>
              {MainScreen}
              {OtherScreen}
            </>
            :
            InitialScreen
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const mapStatetoProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStatetoProps, null)(Routes);