import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../StyleSheets/InquiresStyleSheet';
import Colors from '../Colors/colors';
function NewInquiry() {
  const [subject, setSubject] = useState('');
  const [paragraph, setParagraph] = useState('');
  return (
    <View style={styles.newInquiryContainer}>
      <Text style={styles.InquiryTitleText}>Inquiry Subject</Text>
      <View style={styles.subjectContainer}>
        <TextInput
          style={styles.subjectTextStyle}
          placeholder="Enter subject here"
          placeholderTextColor={Colors.bottomTabColor}
          value={subject}
          onChangeText={value => {
            setSubject(value);
          }}
          initialValue=""
        />
      </View>
      <View style={styles.optionsContainer1}>
        <TouchableOpacity
          style={{
            ...styles.selectedOption,
            backgroundColor: '#E9ECFF',
            padding: 10,
          }}>
          <Text
            style={{
              ...styles.optionText,
              color: Colors.progressColor,
            }}>
            Accounts and Billing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.selectedOption1,
            backgroundColor: Colors.barBackgroundColor,
          }}>
          <Text
            style={{
              ...styles.optionText,
            }}>
            General Inquiry
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paragraphStyleContainer}>
        <Text style={styles.InquiryTitleText}>Description</Text>
        <TextInput
          style={styles.paragraphTextStyle}
          placeholder="Enter Description here"
          textAlignVertical="top"
          required={true}
          autoCapitalize="words"
          multiline={true}
          textAlignVertical="top"
          placeholderTextColor={Colors.bottomTabColor}
          keyboardType="email-address"
          value={paragraph}
          onChangeText={value => {
            setParagraph(value);
          }}
          initialValue=""
        />
      </View>

      <View style={styles.attachmentStyle}>
        <Text style={styles.attachmentTextStyle}>Attachment</Text>
        <View style={styles.rowChooseFile}>
          <View style={styles.chooseFileStyle}>
            <Text style={styles.chooseFileTextStyle}>Choose File</Text>
          </View>
          <View style={styles.noFileContainer}>
            <Text style={styles.NofileTextStyle}>No file chosen</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{...styles.resetFileStyle}}>
            <Text style={styles.resetFileTextStyle}>Reset</Text>
          </View>
          <View style={styles.submitFileStyle}>
            <Text style={styles.submitFileTextStyle}>Save Details</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default NewInquiry;
