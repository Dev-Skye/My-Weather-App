import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const deviceWidth = Dimensions.get('screen').width;

export default function DetailRow({icon, wind, condition}){
    return(
        <View style={styles.boxView}>
            <View style={styles.smallBox}>
                <Ionicons name={icon} size={25} color='rgba(0, 97, 200, 1)'/>
                <Text style={styles.textOne}>{wind}</Text>
                <Text style={styles.textTwo}>{condition}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    boxView:{
        flexDirection: 'row',
        alignItems:'center',
        width: deviceWidth * 0.25,
        height: 100,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
    },
    smallBox:{
        alignContent:'space-around',
        alignItems:'center'
    },
    textOne:{
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
    },
    textTwo:{
        color: 'rgba(0, 97, 200, 1)',
        fontSize: 11,
        opacity: 0.8,
        fontFamily: 'Poppins-Regular',
        marginTop: -5
    }
})