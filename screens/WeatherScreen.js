import {View, Text, StatusBar, StyleSheet, Dimensions, Platform, ScrollView, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import DetailRow from '../components/DetailRow';
import Forecast from '../components/Forecast';
import { fetchWeatherData } from '../api/weather';

const deviceWidth = Dimensions.get('screen').width;

function getWeekdayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g. "Mon", "Tue"
}

export default function WeatherScreen(){
    
    const[city, setCity] = useState('');
    const[weatherData, setWeatherData]= useState(null);

    const handleSearch = async (searchCity) => {
        const data = await fetchWeatherData(searchCity);
        if(data){
            setWeatherData(data)
            setCity(searchCity)  // <-- Update city here so Header changes!
        }
    } 
    

    useEffect(() => {
    const defaultCity = 'Lagos';
    setCity(defaultCity); // so <Header city={city} /> works
    handleSearch(defaultCity);
}, []);
    
    return (
        <View style={styles.container}>
            
            <Header city={city}/>
            <SearchBar onSearch={handleSearch}/>
        <StatusBar barStyle='light-content' backgroundColor='rgba(255, 255, 255, 0.3)'/>
            {weatherData && weatherData.current && (
                <WeatherCard
                temperature = {weatherData.current.temp_c}
                icon = {weatherData.current.condition.icon}
                condition = {weatherData.current.condition.text}
            />
            )}

            {weatherData && weatherData.current &&(
                <View style={styles.detailRow}>
                    <DetailRow icon='umbrella' wind={`${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`} condition='Precipitation'/>
                    <DetailRow icon='water' wind={`${weatherData.current.humidity}%`} condition='Humidity'/>
                    <DetailRow icon='rainy' wind={`${weatherData.current.wind_kph} km/h`} condition='Wind Speed'/>
            </View>
            )}
            
            {!weatherData && <Text>Loading weather info...</Text>}
           
            

            
                        <View style={styles.forecastText}>
                            <Text style={styles.forecastText2}>Today</Text>
                        
                            <TouchableOpacity>
                                <Text style={styles.forecastText2}>7-Day Forecast</Text>
                            </TouchableOpacity>
                        </View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft: deviceWidth * 0.05}}> 
  {weatherData?.forecast?.forecastday?.map((day, index) => {
    const dayName = getWeekdayName(day.date);
    const iconUrl = { uri: 'https:' + day.day.condition.icon };
    const temp = `${day.day.avgtemp_c}°C`;

    let bgColor = 'rgba(66, 123, 184, 0.6)';
    if (day.day.avgtemp_c >= 30) bgColor = 'rgba(255, 140, 0, 0.6)';
    else if (day.day.avgtemp_c <= 10) bgColor = 'rgba(30, 62, 82, 0.5)';

    return (
      <Forecast 
        key={index}
        time={dayName}
        weatherImg={iconUrl}
        temperature={temp}
        color={bgColor}
      />
    );
  })}
</ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        backgroundColor: 'rgba(244, 244, 255, 1)'
    },
    detailRow:{
        flexDirection: 'row', 
        backgroundColor: 'white', 
        borderRadius: 30,
        width: deviceWidth * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15,
        elevation: 20,
    },
    forecastText:{
        justifyContent: 'space-between', 
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
    },
    forecastText2:{
         fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        marginRight: deviceWidth * 0.05,
        marginLeft: deviceWidth * 0.005
    },
})