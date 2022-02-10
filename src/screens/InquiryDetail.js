import React, {useState} from 'react';
import {styles} from '../StyleSheets/InquiryDetailStyleSheet';
import Colors from '../Colors/colors';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import ArrowLeft_svg from '../Assets/arrow_left.svg';
import Send_svg from '../Assets/send.svg';
function InquiryDetail(props) {
  const [message, setMessage] = useState('');
  const {status} = props.route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backPressContainer}>
          <ArrowLeft_svg />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status: </Text>
          <Text
            style={{
              ...styles.statusText1,
              color:
                status == 'Resolved'
                  ? Colors.greenColor
                  : status == 'Pending'
                  ? Colors.orangeColor
                  : 'blue',
            }}>
            {status}
          </Text>
        </View> 
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectTextStyle}>Subject: </Text>
          <Text style={styles.subjectTextStyle}>
            Unit details of my commercial shops
          </Text>
        </View>

        <View style={{...styles.subjectContainer, marginTop: 10}}>
          <Text style={styles.subjectSubTextStyle}>Case ID: </Text>
          <Text style={styles.subjectSubTextStyle1}>SPO_33</Text>
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectSubTextStyle}>Created: </Text>
          <Text style={styles.subjectSubTextStyle1}>July 27, 2021 3:11 PM</Text>
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectSubTextStyle}>Case type: </Text>
          <Text style={styles.subjectSubTextStyle1}>Accounts and Billing</Text>
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectSubTextStyle}>Opened by: </Text>
          <Text style={styles.subjectSubTextStyle1}>imtiaz_422@msn.com</Text>
        </View>
        <View style={styles.correspondenceHeadingContainer}>
          <Text style={styles.CorrespondenceStyle}>Correspondence</Text>
        </View>
        <View style={styles.correspondenceMainContainer}>
          <Text style={styles.chatDateText}>Tuesday July 27, 2021</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTextStyle}>
              Qazi Muhammad Imtiaz Ud Din{'  '}
            </Text>
            <Text style={styles.TimeTextStyle}>3:11 PM</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.chatMessage}>
              The "Sold rate" and "Sold at" figures displayed in my unit details
              do not match. Please clarify.
            </Text>
          </View>

          <Text style={styles.chatDateText1}>Wednesday July 28, 2021</Text>
          <View style={styles.nameContainer1}>
            <Text style={styles.nameTextStyle}>
              Waqar - Agent at 6th Road Center{'  '}
            </Text>
            <Text style={styles.TimeTextStyle}>10:36 AM</Text>
          </View>
          <View style={styles.messageContainer1}>
            <Text style={styles.chatMessage}>
              The "Sold rate" and "Sold at" figures displayed in my unit details
              do not match. Please clarify.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.sendTextInputStyle}
                placeholder="Message"
                placeholderTextColor={Colors.textGrayColor}
                value={message}
                onChangeText={value => {
                  setMessage(value);
                }}
                initialValue=""
              />
            </View>
            <TouchableOpacity style={styles.sendButtonContainer}>
              <Send_svg />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default InquiryDetail;
