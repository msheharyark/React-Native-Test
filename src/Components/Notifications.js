import React from 'react';
import Colors from '../Colors/colors';
import {Noti_styles} from '../StyleSheets/NotificationStyleSheet';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,ScrollView
} from 'react-native';
import ArrowDown_svg from '../Assets/arrow_down.svg';
function Notifications() {
  const NotificationData = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
    {
      id: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
    {
      id: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
    {
      id: 5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
    {
      id: 6,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHrEE4sWIgPaFdoC_6DVs3gCWciEwXYxH2A&usqp=CAU',
      text: 'A new post has been added by skypark one.',
      date: 'September 20, 2021',
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Noti_styles.notificationMainContainer}>
      <View style={Noti_styles.noti_heading}>
        <Text style={Noti_styles.notificationText}>Notifications</Text>
        <View style={Noti_styles.weeklyMainContainer}>
          <View style={Noti_styles.weeklyContainer}>
            <Text style={Noti_styles.weeklyText}>Weekly</Text>
            <View style={Noti_styles.arrowDownStyle}>
              <ArrowDown_svg />
            </View>
          </View>
        </View>
      </View>
      
      <FlatList
      nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 22,
        }}
        data={NotificationData}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={Noti_styles.upperLineSubStyle}>
            <Image
              source={{
                uri: itemData.item.image,
              }}
              style={Noti_styles.personImage}
            />
            <View style={Noti_styles.nameDateContainer}>
              <Text style={Noti_styles.nameText}>{itemData.item.text}</Text>
              <Text style={Noti_styles.dateText}>{itemData.item.date}</Text>
            </View>
          </View>
        )}
      />
     
      
    </ScrollView>
  );
}

export default Notifications;
