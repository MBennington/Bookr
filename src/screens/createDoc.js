import React, { Component } from "react";
import { useState } from 'react';
import {StyleSheet, View, Text, TextInput,TouchableOpacity,ImageBackground,Image, ScrollView} from 'react-native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


export default function createDoc({navigation}) {

    let [name, setName] = useState("");
    let [documentContent, setdocumentContent] = useState("");

  const html = `
    <html>
      <body>
        <h1>${name}</h1>
        <p>${documentContent}
        </p>
      </body>
    </html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };
  
    const pressCancel = ()=>{
        navigation.navigate('Home')
    }

    return(
      <ScrollView>
        <View styles={styles.container}>
        <ImageBackground style ={styles.backgroundImage}source={require('../../assets/images/background.png')}>
        
        
        <View style={styles.headerContainer}>
           <Image style={styles.docIcon} source={require('../../assets/images/documentIcon.png')}/> 
           </View>

          <View style={styles.inputArea}>
            
                <TextInput placeholder="Title"  placeholderTextColor={'white'} style={styles.textAreaTitle} onChangeText={(value) => setName(value)} />
                <TextInput placeholder="Content" placeholderTextColor={'white'} multiline style={styles.textAreaContent} onChangeText={(value) => setdocumentContent(value)}></TextInput>
            
            </View>

            <View>  
                <TouchableOpacity
                style={styles.shareButton}
                onPress={generatePdf}>
                 <Text style={styles.buttonText}>Share Now</Text> 
                 </TouchableOpacity>
                  
                  <TouchableOpacity
                style={styles.cancelButton}
                onPress={pressCancel}>
                  <Text style={styles.buttonText}>Cancel</Text> 
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

    backgroundImage:{
      flex:1,
      height:732,
      width:"100%"
       }, 
       
    inputArea:{
      margin:10
      },

  docIcon:{
      height:170,
      width:170,
      marginTop:"15%",
      marginBottom:"5%",
      alignItems:"center",
      justifyContent:'center'
   
  },

  headerContainer:{
      marginTop:20,
      alignItems:"center",
      justifyContent:'center'
  },

  textAreaTitle:{
      backgroundColor:'#19204E',
      color:"white",
      margin:10,
      padding:10,
      height:50,
      borderRadius:10,
      borderWidth:2,
      borderColor:'purple',
      justifyContent:"center",
      alignItems:"center"

},
    textAreaContent:{
      backgroundColor:'#19204E',
      color:"white",
      margin:10,
      padding:10,
      height:50,
      borderRadius:10,
      borderWidth:2,
      borderColor:'purple',
      justifyContent:"center",
      alignItems:"center"
    },

    shareButton:{
      margin:10,
      padding:10,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      height:'auto',
    },

    cancelButton:{
      margin:10,
      padding:10,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      height:'auto',
    },

    buttonText:{
      color:'#A87EEB',
      alignItems:'center',
      justifyContent:'center',
      fontWeight:'bold',
      fontSize:18
},

})