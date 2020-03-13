import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from "react-native";
export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      data: null,
    }
    this.arrayholder = [];
  }

 
   render() {
     const name = this.props.navigation.getParam('NListClick_name');
     const picture = this.props.navigation.getParam('NListClick_pic');
     const des = this.props.navigation.getParam('NListClick_des');

     return(
       <View style={styles.container}>
          <View style={{}}>
            
            <Text style={{fontSize:20}}>
                {name}
            </Text>

            <View style={{marginTop:10, justifyContent: 'center', alignItems: 'center'}}>
            <Image
           style={{width: 350, height:250}}
            source={{uri: `data:image/jpeg;base64,${picture}`}}
           />
           <Text style = {{fontSize:25}}>
             {des}
           </Text>
           </View>
        </View>
        
      </View>
     )
   }
  
 }
 const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   item: {
     color: "#0000FF",
     padding: 5,
     fontSize: 20,
     height: 35,
   },
  })