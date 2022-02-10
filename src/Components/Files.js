import React from 'react';
import Colors from '../Colors/colors';
import {styles} from '../StyleSheets/UnitDetailStyleSheet';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Animated
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Folder_svg from '../Assets/folder.svg';
function Files() {
  const documents = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01IyQpf_nFldpkGBzZA1-EiJZns_0PV6uQw&usqp=CAU',
    },
    {
      id: 2,
      image:
        'https://work4humanity.com/system/attachments/attachments/000/000/038/medium/CNIC-Copy-1.jpg?1563275575',
    },
    {
      id: 3,
      image:
        'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/11/chinese-man-1510044234.jpg',
    },
  ];
  const Recipt = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01IyQpf_nFldpkGBzZA1-EiJZns_0PV6uQw&usqp=CAU',
    },
    
  ];
  return (
    <View style={styles.filesContainer}>
      <View style={styles.rowDocumentStyle}>
        <Folder_svg />
        <Text style={styles.documentText}>Documents</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        nestedScrollEnabled
        contentContainerStyle={{
          paddingBottom: 18,
          padding: hp(0),
          paddingLeft: hp(3),
          paddingTop: hp(2),
        }}
        data={documents}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.ImageSliderContainer}>
            <ImageBackground
              source={{uri: itemData.item.image}}
              style={{height: '100%', width: '100%'}}>
              {/* <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{itemData.item.date}</Text>
                </View> */}
            </ImageBackground>
          </View>
        )}
      />
       <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>3-8 </Text>
        <View style={styles.progress_container}>
          <Animated.View style={[styles.progress_inner, {width: 30 + '%'}]} />
        </View>
      </View>
       <View style={styles.rowDocumentStyle}>
        <Folder_svg />
        <Text style={styles.documentText}>Given Receipts</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        nestedScrollEnabled
        contentContainerStyle={{
          paddingBottom: 18,
          padding: hp(0),
          paddingLeft: hp(3),
          paddingTop: hp(2),
        }}
        data={Recipt}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.ImageSliderContainer}>
            <ImageBackground
              source={{uri: itemData.item.image}}
              style={{height: '100%', width: '100%'}}>
              {/* <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{itemData.item.date}</Text>
                </View> */}
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

export default Files;
