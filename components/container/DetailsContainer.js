 import React from 'react'
 import { StyleSheet, Text, View } from 'react-native'
 import Detailedinfo from '../layouts/Detailedinfo'
import detailsRequest from '../service/detailsapi'
 const DetailsContainer = (props) => {
     const results=detailsRequest(props.props.route.params.type,props.props.route.params.id)
     return (
       <View>
         {
         results.isLoading === false && results.response !== null ? (
           <Detailedinfo data={results.response} />
         ) : (
           <Text>Loading...</Text>
         )}
       </View>
     );
 }
 
 export default DetailsContainer
 
 const styles = StyleSheet.create({})
 