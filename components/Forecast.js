import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';


const deviceWidth = Dimensions.get('screen').width;

export default function Forecast({time, weatherImg, temperature, color}){
    return(
                <View style={[styles.forecast, {backgroundColor: color}]}>
                        <Text style={styles.text}>{time}</Text>
                        <Image source={weatherImg} style={styles.weatherImg}/>
                        <Text style={styles.text}>{temperature}</Text>
                 </View>
    )
}

const styles = StyleSheet.create({
    weatherImg:{
        height: 60,
        width: 60,
        alignSelf: 'center'
    },
    forecast:{
        height: 150,
        width: 100,
        marginLeft: 15,
        borderRadius: 30,
        marginTop: 5
    },
    text:{
        color: 'white',
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        marginTop: 12
    }
})