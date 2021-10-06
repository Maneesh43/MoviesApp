import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Box, Button, HStack,Image,VStack} from 'native-base'

const ListItem = (props) => {
   
    return (
      <Box>
        <HStack>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${props.item.poster_path}`,
            }}
            alt={props.item.title?props.item.title:props.item.original_name}
            size="lg"
          />
          <VStack>
            <Text>{props.item.title?props.item.title:props.item.original_name}</Text>
            <Text>Popularity {props.item.popularity}</Text>
            <Text>Release date {props.item.release_date}</Text>
            <Button onPress={()=>props.nav.navigate('Details')}>more details</Button>
          </VStack>
        </HStack>
      </Box>
    );
}

export default ListItem

