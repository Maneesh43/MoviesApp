import { VStack,Image, HStack, Container,Center } from 'native-base'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'native-base'
import { useRoute } from '@react-navigation/native'
const Detailedinfo = ({data}) => {
  console.log(data)
  const route=useRoute()
  console.log(route.params)
    return (
      <View>
        <Text>{route.params.label}</Text>
        <Image
          style={{ textAlign: "center" }}
          source={{
            uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          }}
          size="2xl"
        />
        <Text>{data.overview}</Text>
        <View>
          <Text>Popularity {data.popularity}</Text>
          <Text>Release Date {route.params.released}</Text>
        </View>
      </View>
    );
}

export default Detailedinfo

const styles = StyleSheet.create({
  'contain':{
marginLeft:'auto',
marginRight:'auto'
  },
  aligntoImage:{
    maxWidth:'256px',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:'.5rem',
    paddingBottom:'1rem'
  }
})
