import { Text, View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const data = [
  {
    id: '1',
    name: 'Pinarello',
    cost: '1800',
    cate: 'RoadBike',
    img: require('../assets/img/bike1.png'),
  },
  {
    id: '2',
    name: 'Pina Mountain',
    cost: '1500', 
    cate: 'RoadBike',
    img: require('../assets/img/bike2.png'),
  },
  {
    id: '3',
    name: 'Pina Bike',
    cost: '1700',
    cate: 'RoadBike',
    img: require('../assets/img/bike3.png'),
  },
  {
    id: '4',
    name: 'Pinarello',
    cost: '1800',
    cate: 'Mountain',
    img: require('../assets/img/bike4.png'),
  },
  {
    id: '5',
    name: 'Pinarello',
    cost: '1700',
    cate: 'Mountain',
    img: require('../assets/img/bike1.png'),
  },
  {
    id: '6',
    name: 'Pinarello',
    cost: '1800',
    cate: 'Mountain',
    img: require('../assets/img/bike2.png'),
  },
  {
    id: '7',
    name: 'Pinarello',
    cost: '1700',
    cate: 'Mountain',
    img: require('../assets/img/bike3.png'),
  },
];

const Item = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.itemContainer}
    onPress={() => navigation.navigate('BikeDetail', { item: data })} >
     <View style={{ width: 108, height: 124}}>
     <Image source={data.img} style={styles.image} resizeMode='contain'/>
     </View>
      <Text style={{fontSize: 20}}>{data.name}</Text>
      <Text style={{fontSize: 20}}><Text style={{color: '#F7BA83'}}>$</Text> {data.cost}</Text>
    </Pressable>
  );
};

export default function BikeList() {
  const [stateBtn, setStateBtn] = useState('All');
  const [filter, setFilter] = useState(data);
  const hanldeCate = (cate) => {
     if (cate === 'All') {
      setFilter(data);  
    } else {
      setFilter([...data.filter((item)=> item.cate === cate)]);
    }
    setStateBtn(cate);
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 27 }}>
        <Text style={{ fontSize: 25 }}>The world’s Best Bike</Text>
      </View>
      <View style={{ marginTop: 44, flexDirection: 'row', gap: 27, justifyContent: 'center' }}>
        {['All', 'RoadBike', 'Mountain'].map((cate) => (
          <Pressable
            key={cate}
            style={[
              styles.button,
              stateBtn === cate ? { borderColor: '#E9414187' } : { borderColor: "#000" }
            ]}
            onPress={()=> hanldeCate(cate)}
          >
            <Text style={[
              styles.text,
              stateBtn === cate ? { color: '#E9414187' } : { color: '#BEB6B6' }
            ]}>
              {cate}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
      style={{flex: 1, marginTop: 20}}
      data={filter}
      renderItem={({item})=> <Item data={item}/>}
      keyExtractor={(item)=> item.id}
      numColumns={2}
     showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: 110,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  itemContainer: {
    borderRadius: 10,
    width: 167,
    height: 200,
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
