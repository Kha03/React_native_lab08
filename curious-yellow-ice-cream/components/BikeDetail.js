import {View, StyleSheet, Image,Text,Pressable } from 'react-native'
export default BikeDetail = ({route}) => {
  const {item} = route.params
  return <View style={styles.container}>
      <View style={styles.productImg}>
      <Image source={item.img}/>
      </View>
      <View style={styles.productDesc}>
      <Text style={ {color: '000' ,fontSize: 35}}>{item.name}</Text>
       <View style={{flexDirection: 'row', gap: 40, marginTop: 10}}>
        <Text style={styles.font}>15% OFF I 350$</Text>
        <Text style={[styles.font, {color: '000', textDecorationLine: 'line-through'}]}>{item.cost}$</Text>
      </View>
      <View style={{marginTop: 25}}>
        <Text style={[styles.font, {color: '000'}]}>Description</Text>
        <Text style={[styles.font, {fontSize: 22, marginTop: 30}]}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      </View>
      </View>
      <View style={styles.btnGroup}>
      <Image source={require('../assets/img/akar-icons_heart.png')}/>
      <Pressable style={styles.btn}><Text style={[styles.font,{color: '#fff'}]}>Add to card</Text></Pressable>
      </View>
  </View>
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 8,
  },
  productImg: {
    marginTop: 10,
    flex: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E941411A',
  },
  productDesc: {
    flex: 4,
    marginTop: 10
  },
  btnGroup:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  font:{
    fontSize: 25,
    color: '#00000091',
  },
  btn: {
    backgroundColor: "#E94141",
    borderRadius: 30,
    paddingHorizontal: 83,
    paddingVertical: 11
  }
})