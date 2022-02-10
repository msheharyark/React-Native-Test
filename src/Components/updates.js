import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {styles} from '../StyleSheets/ProjectUpdateStyleSheet';
import Colors from '../Colors/colors';
import More_Horizontal from '../Assets/more_horizontal.svg';
import Like_svg from '../Assets/like.svg';
import Comment_svg from '../Assets/comment.svg';
function updates() {
  const updatesData = [
    {
      id: 1,
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZQsYazdb74XJHkvFCAskb1kGb_EK7Eutzw&usqp=CAU',
      name: 'Sarah Ismail',
      date: 'September 20, 2021',
      postImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDqz6-CbzlCCR0dh7Z0H0r8QBBDardZdWiA&usqp=CAU',
      postName: 'Eid-ul-Azha Greetings!',
      postDetail:
        'AOA Everyone!The management would like to extend.....  See more',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZQsYazdb74XJHkvFCAskb1kGb_EK7Eutzw&usqp=CAU',
      name: 'Sarah Ismail',
      date: 'September 20, 2021',
      postImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDqz6-CbzlCCR0dh7Z0H0r8QBBDardZdWiA&usqp=CAU',
      postName: 'Eid-ul-Azha Greetings!',
      postDetail:
        'AOA Everyone!The management would like to extend.....  See more',
      likes: 10,
      comments: 5,
    },
    {
      id: 3,
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZQsYazdb74XJHkvFCAskb1kGb_EK7Eutzw&usqp=CAU',
      name: 'Sarah Ismail',
      date: 'September 20, 2021',
      postImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDqz6-CbzlCCR0dh7Z0H0r8QBBDardZdWiA&usqp=CAU',
      postName: 'Eid-ul-Azha Greetings!',
      postDetail:
        'AOA Everyone!The management would like to extend.....  See more',
      likes: 10,
      comments: 5,
    },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 18,
      }}
      data={updatesData}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <View style={styles.updatesContainer}>
          <View style={styles.updatesSubContainer}>
            <View style={styles.upperLineStyle}>
              <View style={styles.upperLineSubStyle}>
                <Image
                  source={{
                    uri: itemData.item.profilePic,
                  }}
                  style={styles.personImage}
                />
                <View style={styles.nameDateContainer}>
                  <Text style={styles.nameText}>{itemData.item.name}</Text>
                  <Text style={styles.dateText}>{itemData.item.date}</Text>
                </View>
              </View>
              <View style={styles.moreHorizontalStyle}>
                <More_Horizontal />
              </View>
            </View>
            <Image
              source={{
                uri: itemData.item.postImage,
              }}
              style={styles.postImageStyle}
            />

            <Text style={styles.postNameStyle}>{itemData.item.postName}</Text>
            <Text style={styles.postDetailStyle}>AOA Everyone!</Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.postDetailStyle}>
                The management would like to extend... See more
              </Text>

              {/* <Text style={styles.postDetailSeeStyle}> </Text> */}
            </View>
            <View style={styles.likeContainer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.likeTextStyle}>
                  {itemData.item.likes} Like
                </Text>
                <View style={{marginHorizontal: 6}} />
                <Text style={styles.likeTextStyle}>
                  {itemData.item.comments} Comment
                </Text>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Like_svg />
              <Text style={styles.pressLikeStyle}>Like</Text>
              <View style={{marginHorizontal: 10}} />
              <Comment_svg />
              <Text style={styles.pressLikeStyle}>Comment</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

export default updates;
