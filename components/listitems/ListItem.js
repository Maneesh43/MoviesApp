
import React from 'react'
import { StyleSheet, Text} from 'react-native'
import {Box, Button, HStack,Image,VStack, Center} from 'native-base'
import { display, fontWeight } from 'styled-system';

const ListItem = (props) => {
    return (
      <Box p={'.5rem'}>
        <HStack p={'.5rem'} style={styles.hstack}>

          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${props.item.poster_path}`,
            }}
            alt={props.item.title?props.item.title:props.item.original_name}
            size="lg"
          />

          <VStack pl={2} flex={1} style={styles.textData}>
            <Text  style={styles.headingStyle}>{props.item.title?props.item.title:props.item.original_name}</Text>
            <Text style={{paddingBottom:'2.5px'}}>Popularity {props.item.popularity}</Text>
            <Text style={{paddingBottom:'2.5px'}}>Release date {props.item.release_date}</Text>
            <Button onPress={()=>props.nav.navigate('Details',{label:props.item.title?props.item.title:props.item.original_name,id:props.item.id,type:(props.data.type)?props.data.type:props.item.media_type})}>more details</Button>
          </VStack>
        </HStack>
      </Box>
    );
}

export default ListItem
const styles=StyleSheet.create({
  textData:{
    justifyContent:'space-between',
  },
  headingStyle:{
    fontWeight:'600',
    paddingBottom:'2.5px'
  },
  hstack:{
    width:'100%'
  }
})

