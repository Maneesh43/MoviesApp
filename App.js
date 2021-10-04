import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import AppStack from './components/stacks/Appstack'
import Header from './components/layouts/Header'

const App = () => {
  return (
    <NativeBaseProvider>
      <Header/>
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
  )
}

export default App
