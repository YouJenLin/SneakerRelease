import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Linking, ScrollView} from "react-native";
export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      data: null,
    }
    this.arrayholder = [];
  }

  browse = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
    .catch((err) => console.error('An error occurred', err));
  }

  componentDidMount = async () => {

    let dt = {};
    dt.Uid = this.props.navigation.getParam('ListClick_uid');
    console.log(dt);
  
    await fetch('http://people.oregonstate.edu/~linyou/product.php', {
      method: "POST",
      body: JSON.stringify(dt),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => {
      const data = res;
      this.setState({
        data:data
      })
    })
    .catch(error => console.log(error));
  }
 
   render() {
     const price = this.props.navigation.getParam('ListClick_price');
     const date = this.props.navigation.getParam('ListClick_date');
     const picture = this.props.navigation.getParam('ListClick_pic');
     const name = this.props.navigation.getParam('ListClick_name');
     const estprice = this.props.navigation.getParam('ListClick_estprice');
     console.log(price);

     return(
       <View style={styles.container}>
          <View style={{}}>
            
            <Text style={{fontSize:20}}>
                {name}
            </Text>
            
            <Text style={{fontSize:15}}>
                Release date: {date}
            </Text>

            <Text style={{fontSize:15}}>
            Retail price: ${price}  
            </Text>

            <Text style={{fontSize:15}}>
            After-Market Prices: ${estprice}  
            </Text>

            <View style={{marginTop:10, justifyContent: 'center', alignItems: 'center'}}>
            <Image
           style={{width: 350, height:250}}
            source={{uri: `data:image/jpeg;base64,${picture}`}}
           />
           <Text style = {{fontSize:25}}>
             Where to buy
           </Text>
           </View>
        </View>
        <ScrollView>
        <FlatList
         data = {this.state.data}
         
         renderItem={({item}) =>
         <View style = {{marginTop:2}}>
 
           <Text style={styles.item} onPress={() => this.browse( `${item.link}` )}>
             {item.name} 
           </Text>

         </View>
        
         }
         keyExtractor={(item, index) => index}
       />
        </ScrollView>
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