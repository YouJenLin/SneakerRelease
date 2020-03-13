import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import { SearchBar} from 'react-native-elements';
import axios from 'axios';
export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      data: [],
      error: null,
    }
    this.arrayholder = [];
  }

  componentDidMount(){
    axios.get('http://people.oregonstate.edu/~linyou/upcominglist.php')
    .then(res => {
      const data = res.data;
      this.setState({
        data:data,
        loading:false,
        error:data.error||null,
      });
        this.arrayholder = data;        
    }).catch(error => {
            this.setState({ error, loading: false });
          });
      };
      
    renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter(
      item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,  
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>

      );
    }
    return(
      <View style={styles.container}>
         <View style={{}}>
        <SearchBar       
         placeholder="Search Here..."       
         lightTheme       
         round       
         onChangeText={text => this.searchFilterFunction(text)}
         autoCorrect={false}
         value={this.state.value}            
         />
      </View>
      <FlatList
         data={this.state.data}
         renderItem={({item}) =>
         <View style = {{marginTop:2}}>
 
           <Text style={{fontSize:20}}>
             {item.name}
           </Text>
 
           <Text style = {{fontSize:20}}>
            {item.date}       ${item.price}
           </Text>
           <View style={{marginTop:10, justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity onPress={ () => this.props.navigation.navigate('Product' ,{ ListClick_uid:item.uid, ListClick_name:item.name, ListClick_price:item.price, ListClick_pic:item.picture, ListClick_date:item.date, ListClick_estprice:item.estprice})}>
           <Image
           style={{width: 350, height:250}}
            source={{uri: `data:image/jpeg;base64,${item.picture}`}}
           />
           </TouchableOpacity>          
           </View>
           <Text>
           
           </Text>
           <Text>
                 
           </Text>
        </View>
      }
        keyExtractor={(item, index) => `key-${item.uid}`}
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
    height: 35,
  },
 })
 
