import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './style';
export default function RadioButton2({data, onSelect}) {
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
        // borderRadius:10,
        // borderColor:'#BBDFF3',
        // borderWidth:1.5,
      }}>
      {data.map(item => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selectedButton2 : styles.unselectedButton2
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={item.value === userOption ? styles.TextSelectedButton2 : styles.TextUnselectedButton2}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
