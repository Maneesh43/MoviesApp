import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, Button, HStack, Image, VStack, Center } from "native-base";
import { paddingLeft } from "styled-system";

const ListItem = ({ items,nav,rout}) => {
  let title;
  
  (items.title)?title=items.title:title=items.original_name;
  let release;
  (items.release_date)?release=items.release_date:release=items.first_air_date;
  let mtype;
  (items.title)?mtype='movie':mtype='tv'
  return (
    <View flex={1} style={styles.centerAlignItem} >
      
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${items.poster_path}`,
          }}
          alt="Alternate Text"
          size="lg"
        />
      </View>

      <View style={styles.aligntoImage}>
        <Text style={styles.header1}>{title}</Text>
        <Text>Popularity{items.popularity}</Text>
        <Text>Release Date{release}</Text>
        <Button
          onPress={() =>
            nav.navigate("Details", {
              label: title,
              id:items.id,
              type:mtype,
              released:release
            })
          }
        >
          more details
        </Button>
      </View>
    </View>
  );
};

export default ListItem;
const styles = StyleSheet.create({
  centerAlignItem:{
    flexDirection:'row',
    marginLeft:'auto',
    marginRight:'auto',
    width:'80%',
    padding:2
  },
  aligntoImage:{
    justifyContent:'space-between',
    marginLeft:5,
    width:'80%'
  },
  header1:{
fontWeight:'bold',
fontSize:'14'
  }
});
