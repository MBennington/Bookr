import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/screens/home";
import CreateDoc from "../src/screens/createDoc";
import CreateEbook from "../src/screens/createEbook";


const screens ={

    Home:{
        screen : Home,
        navigationOptions:{
            title:'E-Book Maker!',
           
        },
    },
    

    CreateEbook:{
        screen : CreateEbook,
        navigationOptions:{
            title:'Create E book',
           
        }, 
    },


    CreateDoc:{
        screen : CreateDoc,
        navigationOptions: {
            title:'Create a document',
          
        }
    },

}

const HomeStack = createStackNavigator(screens,
    {
    defaultNavigationOptions:{
        header:()=> {false},
        headerTintColor:'#444'
    }
});
export default createAppContainer(HomeStack);