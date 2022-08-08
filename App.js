
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home"
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import CourseDetails from './src/screens/CourseDetails';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';





export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });


  if (!fontLoaded) {
    <AppLoading />
  }

  return (
    // <View style={styles.mainContainer}>
    //  <Home/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
        />
        <Stack.Screen name="About" component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold"
            },
            headerTitleAlign: "center",
            headerTitle: "About"
          }} />
        <Stack.Screen name="Course" component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold"
            },
            headerTitleAlign: "center",
            headerTitle: "Courses",
          }} />
        <Stack.Screen name="Student" component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold"
            },
            headerTitleAlign: "center",
            headerTitle: "Students Data"
          }} />
        <Stack.Screen name="Contact" component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitleAlign: "center",
            headerTitle: "Contact",
            fontFamily: "Nunito_600SemiBold"
          }} />
        <Stack.Screen name="CourseDetails" component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25
            },
            headerTitleAlign: "center",
            headerTitle: "Contact",
            fontFamily: "Nunito_600SemiBold"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {

    backgroundColor: '#fff',


  },

});
