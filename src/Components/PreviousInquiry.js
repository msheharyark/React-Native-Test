import React from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import Colors from '../Colors/colors';
import {styles} from '../StyleSheets/InquiresStyleSheet';
function PreviousInquiry(props) {
  const previousData = [
    {
      id: 1,
      key_id: 'SP_M_112',
      date: 'Dec 16, 2020 1:00 PM',
      message:
        'I need payment extensions for my shop unit Unit the Possession.',
      status: 'Pending',
    },
    {
      id: 2,
      key_id: 'SP_M_112',
      date: 'Dec 16, 2020 1:00 PM',
      message:
        'I need payment extensions for my shop unit Unit the Possession.',
      status: 'Resolved',
    },
    {
      id: 3,
      key_id: 'SP_M_112',
      date: 'Dec 16, 2020 1:00 PM',
      message:
        'I need payment extensions for my shop unit Unit the Possession.',
      status: 'Pending',
    },
    {
      id: 4,
      key_id: 'SP_M_112',
      date: 'Dec 16, 2020 1:00 PM',
      message:
        'I need payment extensions for my shop unit Unit the Possession.',
      status: 'In Progress',
    },
    {
      id: 5,
      key_id: 'SP_M_112',
      date: 'Dec 16, 2020 1:00 PM',
      message:
        'I need payment extensions for my shop unit Unit the Possession.',
      status: 'Resolved',
    },
  ];
  return (
    <View style={styles.previousInquiyContainer}>
      <FlatList
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        data={previousData}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <TouchableOpacity onPress={()=>props.nav.navigate("InquiryDetail",{status:itemData.item.status})} style={styles.infoContainer}>
            <Text style={styles.keyStyle}>{itemData.item.key_id}</Text>
            <Text style={styles.dateTextStyle}>{itemData.item.date}</Text>
            <Text style={styles.messageTextStyle}>{itemData.item.message}</Text>
            <View style={styles.statusRowContainer}>
              <Text style={styles.statusTextStyle}>Status: </Text>
              <Text
                style={{
                  ...styles.statusTextStyle1,
                  color:
                    itemData.item.status == 'Resolved'
                      ? Colors.greenColor
                      : itemData.item.status == 'Pending'
                      ? Colors.orangeColor
                      : 'blue',
                }}>
                {itemData.item.status}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PreviousInquiry;
