  
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Settings from '../screens/settings';
import styles from '../styles/styles';


function headerStyle(Htitle){
  return({
    title: Htitle,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    
  })
}

const screens = {
  Home: {
    screen: Home,
    navigationOptions: headerStyle('PageOne'),

  },
  Settings: {
    screen: Settings,
    navigationOptions: headerStyle('Paramètres'),
  },
};



// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);