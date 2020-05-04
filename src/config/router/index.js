import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SignUp, SignIn, ForgotPassword, VisualSearch, TakingPhoto, MainPage } from '../../containers/pages';

const SignUpStack = createStackNavigator(
    {
        SignUp,
        SignIn,
        ForgotPassword
    },
    {
        headerMode: 'none',
        initialRouteName: 'ForgotPassword'
    }
);
const VisualSearchStack = createStackNavigator(
    {
        VisualSearch,
        TakingPhoto,
        MainPage
    },
    {
        headerMode: 'none',
        initialRouteName: 'MainPage'
    }
);
const Router = createSwitchNavigator(
    {

        SignUpStack,
        VisualSearchStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'VisualSearchStack'
    }
);

export default createAppContainer(Router);