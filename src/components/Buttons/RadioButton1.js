import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './style';
export default function RadioButton1({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = value => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View
      style={{
        width:'98%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        borderRadius:10,
        borderColor:'#BBDFF3',
        borderWidth:1.5,
      }}>
      {data.map(item => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selectedButton1 : styles.unselectedButton1
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={item.value === userOption ? styles.TextSelectedButton1 : styles.TextUnselectedButton1}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
