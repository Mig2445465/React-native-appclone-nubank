import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image,StyleSheet,View, Text, ScrollView } from 'react-native';
import { Home } from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AboutScreen from '../screens/AboutScreen';
import {Ionicons} from '@expo/vector-icons'

const {Navigator,Screen} = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator screenOptions={{ tabBarActiveTintColor: 'whitesmoke',tabBarStyle:{
      position: 'absolute', backgroundColor: '#9500f6', borderTopWidth: 0, bottom: 25, left: 25, right: 25, height: 60, borderRadius: 20
    }}} style={styles.container}>
      <Screen name="Login" component={LoginScreen} options={{title:'',headerTransparent:true, headerShown:false, tabBarIcon:({color,size,focused}) => {
        if(focused){
          return<Ionicons name='bookmark' size={size} color={color}/>
        }
        return<Ionicons name='bookmark-outline' size={size} color={color}/>
      }
    }}/>
      <Screen name="Home" component={Home} options={{title:'',headerTransparent:true, headerShown:false, tabBarIcon:({color,size,focused}) => {
        if(focused){
          return<Ionicons name='home' size={size} color={color}/>
        }
        return<Ionicons name='home-outline' size={size} color={color}/>
      }
    }}/>
      <Screen name="About" component={AboutScreen} options={{title:'',headerTransparent:true, headerShown:false, tabBarIcon:({color,size,focused}) => {
        if(focused){
          return<Ionicons name='person' size={size} color={color}/>
        }
        return<Ionicons name='person-outline' size={size} color={color}/>
      }
    }}/>

    </Navigator>
  );
}

const styles = StyleSheet.create({
  
  })