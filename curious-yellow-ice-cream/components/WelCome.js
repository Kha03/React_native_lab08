import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function WelCome({navigation}) {
  return (
    <View style={styles.container}>
     <View style={{marginTop: 41}}>
          <Text style={{fontSize: 26, textAlign: 'center'}}>A premium online store for </Text>
          <Text style={{fontSize: 26, textAlign: 'center'}}>sporter and their stylish choice</Text>
     </View>
      <View  style={{backgroundColor: '#E941411A', width: '100%',paddingHorizontal: 23, paddingTop: 85, paddingBottom: 33, marginTop: 20}}> 
      <View style={{width: 292, height: 270, alignSelf: 'center' }}>
          <Image resizeMode={'cover'} style={{width: '100%', height: '100%'}}
          source={require("../assets/img/logo.png")}/>
     </View>
     </View>
      <View style={{marginTop: 21}}>
          <Text style={{fontWeight: 700,fontSize: 26, textAlign: 'center'}}>POWER BIKE</Text>
          <Text style={{fontWeight: 700,fontSize: 26, textAlign: 'center'}}>SHOP</Text>
     </View>
     <View  style={{marginTop: 63}}>
         <Pressable style={styles.button}  onPress={() => navigation.navigate('BikeList')}>
      <Text style={styles.text}>Get Started</Text>
    </Pressable>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
   alignItems: 'center',
   justifyContent: 'center'
  },
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 66,
    borderRadius: 30,
    backgroundColor: '#E94141',
  },
  text: {
    fontSize: 27,
    letterSpacing: 0.25,
    color: 'white',
  },
});
