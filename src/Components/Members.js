import React, {useState} from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import {styles} from '../StyleSheets/ProjectUpdateStyleSheet';
import Colors from '../Colors/colors';
function Members() {
  const membersData = [
    {
      id: 1,
      image:
        'https://www.meme-arsenal.com/memes/fda61d7d919bc289167d49118250e8af.jpg',
      name: 'Taimoor Liaquat',
      live: true,
    },
    {
      id: 2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
      name: 'Ali bin Arshad',
      live: true,
    },
    {
      id: 3,
      image:
        'https://www.meme-arsenal.com/memes/fda61d7d919bc289167d49118250e8af.jpg',
      name: 'Romeesa Asghar',
      live: false,
    },
    {
      id: 4,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
      name: 'Fiza Rubab',
      live: true,
    },
    {
      id: 5,
      image:
        'https://www.meme-arsenal.com/memes/fda61d7d919bc289167d49118250e8af.jpg',
      name: 'Aimen Faheem',
      live: true,
    },
    {
      id: 6,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
      name: 'Mirza Ghalib',
      live: false,
    },
    {
      id: 7,
      image:
        'https://www.meme-arsenal.com/memes/fda61d7d919bc289167d49118250e8af.jpg',
      name: 'Quaid e Azam',
      live: true,
    },
    {
      id: 8,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
      name: 'Zain Shahid',
      live: false,
    },
    {
      id: 9,
      image:
        'https://www.meme-arsenal.com/memes/fda61d7d919bc289167d49118250e8af.jpg',
      name: 'Maryam Aziz',
      live: true,
    },
  ];
  return (
    <View style={styles.membersContainer}>
      <Text style={styles.memberText}>Members</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.underMemberText}>79 Members - </Text>
        <Text style={{...styles.underMemberText, color: Colors.greenColor}}>
          40 Active
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 18,
        }}
        data={membersData}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.upperLineSubStyle}>
            <ImageBackground
              source={{
                uri: itemData.item.image,
              }}
              style={styles.personImage1}
              borderRadius={35}>
              <View
                style={{
                  ...styles.liveStyle,
                  backgroundColor: itemData.item.live
                    ? Colors.greenColor
                    : Colors.redColor,
                }}
              />
            </ImageBackground>
            <View style={styles.nameDateContainer1}>
              <Text style={styles.nameText1}>{itemData.item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Members;
