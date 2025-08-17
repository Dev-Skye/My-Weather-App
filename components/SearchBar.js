import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default function SearchBar({ onSearch }){

const [city, setCity] = useState('');

    return(
        <View style={styles.row}>
            <TextInput 
                placeholder="Search a city"
                onChangeText={setCity}
                value={city}
                style={styles.searchBar}
            />
            <TouchableOpacity onPress={()=> onSearch(city)}>
                <Ionicons name="search" size={25} color='rgb(0, 8, 76)' style={styles.icon}/>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row'
    },
    icon:{
        marginTop: 35,
        paddingLeft: 10
    },
    searchBar:{
        backgroundColor: 'white',
        width: '75%',
        height: 60,
        paddingLeft: 30,
        borderRadius: 50,
        marginLeft: '11%',
        marginTop: 20,
        color: 'rgb(0, 8, 76)',
        fontFamily: 'Poppins-Medium',
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(0,8,76)',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3,
            },
            android:{
                elevation: 5,
                shadowColor: 'blue'
            }
        })
        
        
    }

})