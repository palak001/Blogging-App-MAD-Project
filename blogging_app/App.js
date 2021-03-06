import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Profile from './views/Profile';
import WriteBlog from './views/WriteBlog';
import ReadBlog from './views/ReadBlog';
import ShowBlog from './views/ShowBlog';
import Faqs from './views/Faqs';
import Feedback from './views/Feedback';
import AboutUs from './views/AboutUs';
import {AuthProvider} from './Context/AuthContext';
import {ThemeProvider} from './Context/ThemeContext';
import LoggedInPage from './views/LoggedInPage';
import profileHeader from './views/ProfileHeader';
import OldTextEditor from './views/OldTextEditor';
import TextEditor from './views/TextEditor';
import Toast from 'react-native-toast-message';
import toastConfig from './styles/toastConfig';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <>
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoggedInPage"
              component={LoggedInPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfileHeader"
              component={profileHeader}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OldTextEditor"
              component={OldTextEditor}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TextEditor"
              component={TextEditor}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="WriteBlog"
              component={WriteBlog}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ReadBlog"
              component={ReadBlog}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShowBlog"
              component={ShowBlog}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Faqs"
              component={Faqs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
    <Toast config={toastConfig}/>

    </>
  );
};

export default app;
