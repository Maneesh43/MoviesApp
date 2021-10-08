import { VStack,Image, HStack, Container,Center } from 'native-base'
import React from 'react'
import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet, Text } from 'react-native'
import { View } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { flexDirection, width } from 'styled-system'
const Detailedinfo = ({data}) => {
  const route=useRoute()
    return (
      <View flex={1} style={styles.centered}>
        <Text style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold',padding:'1.5rem'}}>{route.params.label}</Text>
        <Image
          style={{marginLeft:'auto',marginRight:'auto'}}
          source={{
            uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          }}
          size="2xl"
        />
        <Text style={{padding:2}}>{data.overview}</Text>
        <View style={{flexDirection:'row',paddingBottom:15,paddingTop:15}}>
          <View style={{flexDirection:'row'}}><Text>Popularity</Text><Text>{data.popularity}</Text></View>|
          <View style={{flexDirection:'row'}}><Text>Release Date</Text><Text>{route.params.released}</Text></View>
        </View>
      </View>
    );
}

export default Detailedinfo

const styles = StyleSheet.create({
  centered:{
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth:256
  },
 
})
