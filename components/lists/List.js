import { Center, FlatList, Text, View, VStack } from "native-base";
import React from "react";
import apiRequest from "../service/api";
import ListItem from "../listitems/ListItem";
import {StyleSheet} from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
const DataList = (props) => {
    const navigation=useNavigation()
    const route=useRoute()
    const renderItem=({ item }) => <ListItem data={props} item={item} nav={navigation} route={route}/>
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={props.data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.poster_path}
        removeClippedSubviews="true"
        maxToRenderPerBatch="6"
        initialNumToRender="5"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DataList;
