import { Center, Text, View, VStack } from "native-base";
import React from "react";
import ListItem from "../listitems/ListItem";
import {StyleSheet,FlatList} from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
const DataList = (props) => {
    const navigation=useNavigation()
    const route=useRoute()
    const renderItem=({ item }) => <ListItem data={props} item={item} />
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={props.data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataList;
