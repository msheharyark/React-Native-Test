import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../StyleSheets/InquiresStyleSheet';
import PreviousInquiry from '../Components/PreviousInquiry';
import NewInquiry from '../Components/NewInquiry';
import Colors from '../Colors/colors';
function Inquiries(props) {
  const [selectedOption, setSelectedOption] = useState('Previous');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={{
            ...styles.selectedOption,
            backgroundColor:
              selectedOption == 'Previous'
                ? Colors.white
                : Colors.backgroundColor,
            elevation: selectedOption == 'Previous' ? 5 : 0,
          }}
          onPress={() => setSelectedOption('Previous')}>
          <Text
            style={{
              ...styles.optionText,
              color:
                selectedOption == 'Previous'
                  ? Colors.themeColor
                  : Colors.darkGrayColor,
              fontWeight: selectedOption == 'Previous' ? '700' : '500',
            }}>
            Previous Inquiries
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.selectedOption1,
            backgroundColor:
              selectedOption == 'New' ? Colors.white : Colors.backgroundColor,
            elevation: selectedOption == 'New' ? 5 : 0,
          }}
          onPress={() => setSelectedOption('New')}>
          <Text
            style={{
              ...styles.optionText,
              color:
                selectedOption == 'New'
                  ? Colors.themeColor
                  : Colors.darkGrayColor,
              fontWeight: selectedOption == 'New' ? '700' : '500',
            }}>
            Make New Inquiry
          </Text>
        </TouchableOpacity>
      </View>

      {/* </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedOption == 'Previous' ? <PreviousInquiry nav={props.navigation} /> : <NewInquiry />}
      </ScrollView>
    </View>
  );
}

export default Inquiries;
