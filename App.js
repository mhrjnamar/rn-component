import React, { useState } from 'react';
import { View, Button, Text, TextInput, ScrollView, StyleSheet, FlatList, SectionList } from 'react-native';

const songs = [
  { title: 'Timi Bhane' },
  { title: 'Sad but true' },
  { title: 'Welcome to the jungle' },
  { title: 'Fireflies' },
  { title: 'Rituharu ma' }
];

const contactList = [
  { title: 'A', data: ['Amar', 'Aman', 'Ashish', "Anish"] },
  { title: 'B', data: ['Bijen', 'Bipal', 'Bishow', "Bikesh"] },
  { title: 'C', data: ['Chirag'] },
  { title: 'D', data: ['Denish', 'Dipesh', 'David'] },
]

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [timesPetted, setTimesPetted] = useState(0);
  return (
    <View style={{ marginTop: 16 }}>
      <Text>I am {props.name}, and I am {props.isHungry ? "hungry" : "full"}!</Text>
      <Button
        onPress={() => { setIsHungry(false) }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Text>Times petted: {timesPetted}</Text>
      <Button
        onPress={() => {
          setTimesPetted(timesPetted + 1)
        }}
        title={"Pett"}
      />
    </View>
  );
}

const Cafe = () => {
  const [text, setText] = useState('');
  return (
    <>
      <ScrollView style={{ marginTop: 32 }} pagingEnabled={true}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>

          <View style={{ padding: 8, borderWidth: 1, borderColor: 'black' }}>
            <Cat name={"Philemon"} isHungry={true} />
            <Cat name={"Denish"} isHungry={true} />
          </View>

          <View style={{ marginTop: 16, padding: 8, width: 280, borderWidth: 1, borderColor: 'black' }}>
            <Text style={{ fontWeight: 'bold' }}>Pizza Translator</Text>
            <TextInput
              style={{ height: 40, width: '100%', borderBottomWidth: 1, borderColor: 'black' }}
              placeholder={"Type here to translate!"}
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
              {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>

          <FlatList
            style={styles.flatlist}
            data={songs}
            renderItem={({ item, index }) => <Text style={styles.listItem}>{item.title}</Text>}
            keyExtractor={({ item, index }) => index}
          />
          <SectionList
            sections={contactList}
            renderItem={({ item, index }) => <Text>{item}</Text>}
            renderSectionHeader={({ section, index }) => <Text>{section.title}</Text>}
            keyExtractor={({ item, index }) => index}
          />
        </View>
      </ScrollView>




    </>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'black'
  },
  listItem: {
    textAlign: 'center'
  },
  sectionList: {
    marginTop: 16,
  }

})

export default Cafe;