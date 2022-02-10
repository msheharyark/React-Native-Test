import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../Colors/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    width: '75%',
    padding: 5,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 5,
    marginTop: 15,
  },
  optionsContainer1: {
    flexDirection: 'row',
    paddingVertical: 5,
    width: '85%',
    padding: 5,
    backgroundColor: Colors.barBackgroundColor,
    borderRadius: 5,
    marginTop: 15,
  },
  selectedOption: {
    padding: 5,
    paddingVertical: 5,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedOption1: {
    padding: 10,
    paddingVertical: 5,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderRadius: 5,
  },
  optionText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  previousInquiyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  infoContainer: {
    width: '90%',
    height: 140,
  },
  statusRowContainer: {
    flexDirection: 'row',
  },
  keyStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.keyBlueColor,
  },
  dateTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
    color: Colors.progressColor,
  },
  messageTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 15,
    color: Colors.themeColor,
  },
  statusTextStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.themeColor,
  },
  statusTextStyle1: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 14,
    // color: Colors.greenColor,
  },
  newInquiryContainer: {
    width: '100%',
    padding: '5%',
    //     justifyContent:'center',
    //  alignItems:'center',
  },
  InquiryTitleText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.themeColor,
  },

  textInputStyle: {
    borderColor: 'red',
    borderWidth: 1,
  },
  paragraphTextStyle: {
    marginTop: 18,
    height: 170,
    borderRadius: 5,
    width: '95%',
    fontFamily: 'Roboto-Italic',
    padding: 10,

    backgroundColor: Colors.backgroundColor,
    borderColor: Colors.darkGrayColor,
    borderWidth: 1,
  },
  subjectTextStyle: {
    height: 44,
    borderRadius: 5,
    width: '95%',
    fontFamily: 'Roboto-Italic',
    padding: 10,
    backgroundColor: Colors.backgroundColor,
    borderColor: Colors.darkGrayColor,
    borderWidth: 1,
  },
  subjectContainer: {
    marginTop: 18,
  },
  paragraphStyleContainer: {
    marginTop: 20,
  },
  chooseFileStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // width: '30%',
    justifyContent: 'center',
    backgroundColor: Colors.themeColor,
  },
  chooseFileTextStyle: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
  },
  attachmentTextStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.themeColor,
    marginBottom: 15,
  },

  attachmentStyle: {
    marginTop: 15,
  },
  rowChooseFile: {
    flexDirection: 'row',
  },
  NofileTextStyle: {
    color: Colors.textGrayColor,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 14,
  },
  noFileContainer: {
    padding: 10,
  },
  bottomButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 25,
  },
  resetFileStyle: {
    paddingHorizontal: 15,
    marginLeft: 20,
    paddingVertical: 10,
    // width: '20%',
    justifyContent: 'center',
    backgroundColor: Colors.themeColor,
  },
  resetFileTextStyle: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
  },
  submitFileStyle: {
    paddingHorizontal: 15,
    marginLeft: 20,
    paddingVertical: 10,
    // width: '30%',
    justifyContent: 'center',
    backgroundColor: Colors.progressColor,
  },
  submitFileTextStyle: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
  },
});
