
import {VStack } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DataList from '../lists/List'
import apiRequest from '../service/api'
import { SelectMovies } from '../UiComponents/SelectMovies'
import { useNavigation} from '@react-navigation/native'
const FirstRoute = (props) => {
    const type='movie'
    const [select,setSelect]=useState('now_playing')
    const currentlySelected=(data)=>{
        setSelect(data)
    }
    const results=apiRequest(type,select)
      return (
        <VStack style={{flex:1}}>
          <SelectMovies changed={currentlySelected} />
          {results && !results.loading && results.response !== null ? (
            <DataList type={type} data={results.response} />
          ) : (
            ""
          )}
        </VStack>
      );
}

export default FirstRoute

const styles = StyleSheet.create({})
