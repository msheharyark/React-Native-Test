import React, {useState} from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {styles} from '../StyleSheets/UnitDetailStyleSheet';
import Colors from '../Colors/colors';
import PaymentDetails from '../Components/PaymentDetails';
import Files from '../Components/Files';
function Unit_Details() {
  const [selectedOption, setSelectedOption] = useState('Payment');
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.headContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.unitDetailContainer}>
          <Text style={styles.Unit_DetailsStyle}>Unit Details</Text>
          <View style={styles.mainBoxContainer}>
            <View style={styles.firstContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText}>Floor:</Text>
                <Text style={styles.answerText}>7th Floor</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText}>Size:</Text>
                <Text style={styles.answerText}>1020 sq. ft.</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText}>Price:</Text>
                <Text style={styles.answerText}>9,068,210 PKR</Text>
              </View>
            </View>
            <View style={styles.secondContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText1}>Unit No:</Text>
                <Text style={styles.answerText}>FC - 335</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText1}>Purchase Rate:</Text>
                <Text style={styles.answerText}>9000 sq. ft.</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.headingText1}>Sold Date:</Text>
                <Text style={styles.answerText}>09/12/2021</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rowButtonStyle}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={{
              ...styles.selectedOption,
              backgroundColor:
                selectedOption == 'Payment'
                  ? Colors.white
                  : Colors.backgroundColor,
              elevation: selectedOption == 'Payment' ? 5 : 0,
            }}
            onPress={() => setSelectedOption('Payment')}>
            <Text
              style={{
                ...styles.optionText,
                color:
                  selectedOption == 'Payment'
                    ? Colors.themeColor
                    : Colors.darkGrayColor,
                fontWeight: selectedOption == 'Payment' ? '700' : '500',
              }}>
              Payment Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.selectedOption1,
              backgroundColor:
                selectedOption == 'Files'
                  ? Colors.white
                  : Colors.backgroundColor,
              elevation: selectedOption == 'Files' ? 5 : 0,
            }}
            onPress={() => setSelectedOption('Files')}>
            <Text
              style={{
                ...styles.optionText,
                color:
                  selectedOption == 'Files'
                    ? Colors.themeColor
                    : Colors.darkGrayColor,
                fontWeight: selectedOption == 'Files' ? '700' : '500',
              }}>
              Files
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedOption == 'Payment' ? <PaymentDetails /> : <Files />}
      
    </ScrollView>
  );
}

export default Unit_Details;
