import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Button, Text, TextInput, FlatList} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);
 const listName = [
  {key: 'Cuong'},
  {key: 'Kien'},
  {key: 'Long'},
  {key: 'Dat'},
  {key: 'Nam'},
  {key: 'Quy'},
  {key: 'Huy'},
  {key: 'Anh'},
  {key: 'Chin'},
  {key: 'Phuong'},
]
  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <Text>Họ và tên:</Text>
          <TextInput style={styles.inputView}
          placeholder="Họ tên"/>
            
          <Text>Mã sinh viên:</Text>
          <TextInput style={styles.inputView} placeholder="Mã sinh viên"/>

          <Button
            title="Thêm sinh viên"
            onPress={() => navigation.navigate('Details')}
          />

          <Button
            title={!hide ? 'Hiển thị danh sách' : "An danh sach"}
            onPress={() => {
              
              setHide(!hide)
              if (hide) {
                setData([])
              } else {
                setData(listName);
              }
            }}
          />
          <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          

          <StatusBar style="auto" />
        </View>
    </View>
  );
}


export default Home;
