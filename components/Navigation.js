import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Appbar, Drawer } from 'react-native-paper'
import HomeScreen from '../screens/Home'
import CreateScreen from '../screens/Create'

const StackNav = createStackNavigator()
const DrawerNav = createDrawerNavigator()
const CustomNavigationBar = ({ navigation }) => {
  return(
    <Appbar.Header>
      <Appbar.Content title='Notes' />
      <Appbar.Action icon='menu' onPress={navigation.toggleDrawer} />
    </Appbar.Header>
  )
}
const CustomDrawer = ({ props, navigation, state }) => {
  return(
    <DrawerContentScrollView {...props} >
      <Drawer.Section title='Note App'>
        <Drawer.Item
          label='Home'
          icon='text-subject'
          onPress={() => navigation.navigate('Home')}
          active={state.routeNames[state.index]=='Home'? true: false}
        />
        <Drawer.Item
          label='Create'
          icon='shape-circle-plus'
          onPress={() => navigation.navigate('Create')}
          active={state.routeNames[state.index]=='Create'? true: false}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  )
}
const HomeNavigator = () => {
  return(
    <StackNav.Navigator
      screenOptions={{
        header: CustomNavigationBar
      }}>
      <StackNav.Screen name='Home' component={HomeScreen} />
    </StackNav.Navigator>
  )
}
const CreateNavigator = () => {
  return(
    <StackNav.Navigator
      screenOptions={{
        header: CustomNavigationBar
      }}>
      <StackNav.Screen name='Create' component={CreateScreen} />
    </StackNav.Navigator>
  )
}
function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator 
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <DrawerNav.Screen name="Home" component={HomeNavigator} />
        <DrawerNav.Screen name="Create" component={CreateNavigator} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
