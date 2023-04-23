import React from "react";
import {StyleSheet, View, Text, Button,ImageBackground,Image, ScrollView,TouchableOpacity} from 'react-native';
export default function Home({navigation}){


    const pressCreateDoc = ()=> {
        navigation.navigate('CreateDoc')
        
    }

    const pressCreateEbook = ()=> {
        navigation.navigate('CreateEbook')
        
    }
    

    return(
        <ScrollView>
        <View styles={styles.container}>
            
       

           <ImageBackground style ={styles.backgroundImage}source={require('../../assets/images/background.png')}>
           
           <View style={styles.headerContainer}>
           
            
           <Image style={styles.logo}
                source={require('../../assets/images/BOOKR.png')}/> 
         
            <Text style={styles.headerDescription}>Create and Share your Ebook Instantly!</Text> 
            </View>
           <View style={styles.homeIconContainer}>
           <Image style={styles.homeIcon}
                source={require('../../assets/images/homeIcon.png')}/> 
            </View>
                
            <View styles={styles.ButtonContainer}>

                <TouchableOpacity 
                onPress={pressCreateDoc} 
                style={styles.button}>
                     <Text style={styles.ButtonText}>Make a Doc</Text> 
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={pressCreateEbook} 
                style={styles.button}>
                     <Text style={styles.ButtonText}>Make a Book</Text> 
            </TouchableOpacity>

        
        </View>           
          
          </ImageBackground>
        </View>
        
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container:{
        margin:300,
        padding:240,
        backgroundColor:'black',
        justifyContent:'space-between',
        backgroundColor:'black',
},

headerContainer:{
    marginTop:20,
    alignItems:"center",
    justifyContent:'center'
},

logo:{
    marginTop:"15%",
    marginBottom:"5%",
    alignItems:"center",
    justifyContent:'center'
},

headerText:{
    color:'white',
    fontSize:80,

},

headerDescription:{
    color:'white',
    fontSize:14,

},

homeIconContainer:{
    margin:0,
    alignItems:"center",
    justifyContent:'center'
},

homeIcon:{
    margin:20,
    height:300,
    width:300,
    alignItems:"center",
    justifyContent:'center'
},

ButtonContainer:{
   flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    },

button:{
    margin:10,
    padding:10,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 50,
    height:'20%',
    },

ButtonText:{
    color:'#A87EEB',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:18

},
    backgroundImage:{
       flex:1,
       height:732,
       width:"100%"
    },


})