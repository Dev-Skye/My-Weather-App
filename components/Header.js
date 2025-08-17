import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {useState, useEffect } from 'react';


export default function Header({city}){
     const [date, setDate] = useState('');
     const [time, setTime] = useState('');

    useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format date: "Monday, 1 January"
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      const formattedDate = now.toLocaleDateString('en-GB', options);

      // Format time: "12:00"
      const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime(); // Initial call
    const timer = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

    return(
        <View>
            <View style={styles.headerIcon}>
                <Ionicons name='location' color='rgb(0, 8, 76)' size={25}/>
                <Text style={styles.headerText}>{city}</Text>
            </View>
            <Text style={styles.time}>{date}, {time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    headerIcon:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    headerText:{
        color: 'rgba(0, 8, 76, 1)',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        marginTop: -7
    },
    time:{
        marginTop: -10,
        textAlign: 'center',
        color: 'rgba(0, 8, 76, 1)',
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    }
})