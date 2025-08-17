import {View, Text, StatusBar, StyleSheet} from 'react-native';


export default function ForecastScreen(){
    return (
        <View>
            <Text>This is Forecast Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    }
})