import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [list, setList] = useState([]);

  let nameKT='Mai Tiến Đức'
  let msvKT="PH20223"

  const onPressAdd = () => {
    setShowForm(true);
  };

  const onPressSave = () => {
    setList([{ name, desc, image }]);
    setShowForm(false);
    setName('');
    setDesc('');
    setImage('');
  };

  const onPressCancel = () => {
    setShowForm(false);
    setName('');
    setDesc('');
    setImage('');
  };
  return (
    <View style={styles.container}> 
    <Text style={styles.vip} >Họ tên: {nameKT} </Text>
     <Text style={styles.vip}>MSV:{msvKT}</Text>
      <Button title="Add" onPress={onPressAdd} />
      {showForm && (
        <View>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Desc"
            value={desc}
            onChangeText={text => setDesc(text)}
          />
          <TextInput
            placeholder="Link ảnh"
            value={image}
            onChangeText={text => setImage(text)}
          />
          <Button title="Save" onPress={onPressSave} />
          <Button title="Hủy" onPress={onPressCancel} />
        </View>
      )}
      <View style={styles.hienthi}>
      {list.map(item => (
        <View key={item.name}>
          <Text>Name: {item.name}</Text>
          <Text>Desc: {item.desc}</Text>
          <Text>Link ảnh: {item.image}</Text>
        </View>
      ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 300,
    height: 470,
    marginTop: 40,
    marginLeft: 45
  },
  hienthi: {
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 285,
    height: 230,
    margin: 6,
  },
  button: {
    display: 'flex',
    width: '10%',
    height: 20,
  },
  input: {
    width: '70%',
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
