import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Alert,  } from "react-native";
import axios from 'axios';
export default class UpcomingScreen extends Component {
 constructor(props) {
   super(props);
   this.state = {
     loading:false,
     data: null,
   }
   this.arrayholder = [];
 }
 
  componentDidMount() {
   try {
        axios.get('http://people.oregonstate.edu/~linyou/upcominglist.php')
       .then(res => {
         const data = res.data;
         this.setState({
            data:data
         });        
       })     
     } catch(err) {
       console.log("Error fetching data-----------", err);
   }
}
 
 render() {
   return (
    
     <View style={styles.container}>
       <FlatList
         data={this.state.data}
         renderItem={({item}) =>
         <View style = {{marginTop:2}}>
 
           <Text style={styles.item}>
             {item.name}
           </Text>
 
           <Text style = {styles.item}>
            {item.date}   ${item.price}
           </Text>
          
           <View style={{marginTop:10, justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity onPress={ () => this.navigation.navigate(Upcoming) }>
           <Image
           style={{width: 350, height:250}}
            source={{uri: `data:image/jpeg;base64,${item.picture}`}}
           />
           </TouchableOpacity>
          
           </View>
          
         </View>
        
         }
         keyExtractor={(item, index) => index}
       />
     </View>
    
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 item: {
   padding: 10,
   fontSize: 18,
   height: 43,
 },
})
