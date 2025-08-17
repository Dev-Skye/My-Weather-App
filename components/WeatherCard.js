import {Text, View, StyleSheet, Image, Platform, Dimensions} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default function WeatherCard({temperature, icon, condition}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>{Math.round(temperature)}°</Text>
            <Image source={{ uri: "https:" + icon }} style={styles.sun}/>
            <Text style={styles.smallText}>{condition}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
        sun:{
            position: 'absolute',
            bottom: 1,
            left: -35,
            width: 200,
            height: 200,
            zIndex: 1,
            ...Platform.select({
                ios:{
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffset: {height: 10, width: 5},
                    shadowOpacity: 0.6,
                    shadowRadius: 3
                },
                android:{
                    elevation: 30,
                    color: 'rgba(0, 0, 0, 0.5)'
                }
            })
        },
        container:{
            height: deviceHeight * 0.33,
            width: deviceWidth * 0.8,
            borderRadius: 40,
            backgroundColor: 'rgba(0, 97, 200, 1)',
            marginTop: 50,
            alignSelf: 'center',
            elevation: 20
        },
        headerText:{
            fontFamily:'Muli-Black',
            fontSize: 155,
            color: 'white', 
            alignSelf: 'center',
            marginTop: -40,
            position: 'relative',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {height: 20, width: 10},
            textShadowRadius: 50,             
        },
        smallText:{
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            color: 'white',
            position: 'absolute',
            marginTop: 180,
            marginLeft: 180,
            opacity: 0.8
        }
})  