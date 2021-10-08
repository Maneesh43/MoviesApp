import { VStack, Box } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DataList from "../lists/List";
import apiRequest from "../service/api";
import SelectMovies from "../UiComponents/SelectMovies";

const Route1 = (props) => {
  const type = "movie";
  const [select, setSelect] = useState("now_playing");
  const currentlySelected = (data) => {
    setSelect(data);
  };
  const results = apiRequest(type, select);
  return (
    <Box p={".5rem"} flex={1}>
      <VStack style={{ flex: 1 }}>
        <SelectMovies changed={currentlySelected} />
        {results && !results.loading && results.response !== null ? (
          <DataList type={type} data={results.response} />
        ) : (
          ""
        )}
      </VStack>
    </Box>
  );
};

export default Route1;

const styles = StyleSheet.create({
  DataList: {},
});
