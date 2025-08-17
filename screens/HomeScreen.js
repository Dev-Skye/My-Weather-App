import {View, Text, StatusBar, Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

export default function HomeScreen({navigation}){


    return (
        <View style={styles.container}>
             
            <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
                <Image source={require('../assets/images/weather.png')} style={styles.headerImage}/>
                <Text style={styles.firstText}>Weather</Text>
                <Text style={styles.secondText}>Forecasts</Text>
                <Text style={styles.thirdText}>Stay ahead of the weather with real-time updates, 
                    temperature, humidity and forecasts for any city. Simple, fast and accurate!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
            </ImageBackground>
            {/* <StatusBar barStyle='dark-content' backgroundColor='transparent'/>
            */}
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerImage:{
        height: 230,
        width: '60%',
        marginLeft: 85,
        marginTop: 150
    },
    firstText:{
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 45,
        color: 'white',
        marginTop: 170,
        textAlign: 'center'
    },
    secondText:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 45,
        color: 'rgba(255, 217, 0, 1)',
        marginTop: -40,
        textAlign: 'center'
    },
    thirdText:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-Light',
        fontSize: 10,
        paddingLeft: 50,
        paddingRight: 50
    },
    buttonText:{
        backgroundColor: 'rgba(255, 217, 0, 1)',
        paddingHorizontal: 60,
        paddingVertical: 15,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: 'Poppins-SemiBold'
    }
})