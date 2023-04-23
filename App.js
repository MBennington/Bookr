import React from 'react';
import * as Font from 'expo-font';
import Navigator from'./routes/homeStack'

const getFonts =()=> Font.loadAsync({
    'Kadwa':require('./assets/fonts/Kadwa-Bold.ttf')
  })


export default function App() {
  return (
    
  <Navigator/>

  );
}


 