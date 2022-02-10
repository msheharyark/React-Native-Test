import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from '../StyleSheets/ProjectUpdateStyleSheet';
import Colors from '../Colors/colors';
import Updates from '../Components/updates';
import Members from '../Components/Members';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
function Project_Updates() {
  const [selectedOption, setSelectedOption] = useState('Updates');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={{
            ...styles.selectedOption,
            backgroundColor:
              selectedOption == 'Updates'
                ? Colors.white
                : Colors.backgroundColor,
            elevation: selectedOption == 'Updates' ? 5 : 0,
          }}
          onPress={() => setSelectedOption('Updates')}>
          <Text
            style={{
              ...styles.optionText,
              color:
                selectedOption == 'Updates'
                  ? Colors.themeColor
                  : Colors.darkGrayColor,
            }}>
            Updates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.selectedOption1,
            backgroundColor:
              selectedOption == 'Memebers'
                ? Colors.white
                : Colors.backgroundColor,
            elevation: selectedOption == 'Memebers' ? 5 : 0,
          }}
          onPress={() => setSelectedOption('Memebers')}>
          <Text
            style={{
              ...styles.optionText,
              color:
                selectedOption == 'Memebers'
                  ? Colors.themeColor
                  : Colors.darkGrayColor,
            }}>
            Memebers
          </Text>
        </TouchableOpacity>
      </View>
      {selectedOption == 'Updates' ? <Updates /> : <Members/>}
    </View>
  );
}

export default Project_Updates;
