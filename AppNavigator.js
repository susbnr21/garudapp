import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
  import Home from './src/pages/Home';
  import Welcome from './src/pages/Welcome';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Welcome: {screen: Welcome}
  });

  export default createAppContainer(AppNavigator);