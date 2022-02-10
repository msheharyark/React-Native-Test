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
  backText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
    color: Colors.blackColor,
  },
  backPressContainer: {
    flexDirection: 'row',
    width: '65%',
  },
  upperContainer: {
    flexDirection: 'row',
    padding: '5%',
    width: '100%',
  },
  statusContainer: {
    width: '40%',
    paddingTop: 0,
    padding: 10,
    // borderColor:Colors.li8GreyColor,
    // borderWidth:1,
    elevation: 3,
    flexDirection: 'row',
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.blackColor,
  },
  statusText1: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  lowerContainer: {
    width: '100%',
    padding: '5%',
  },
  subjectContainer: {
    flexDirection: 'row',
  },
  subjectTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.blackColor,
  },
  sendTextInputStyle: {
    fontFamily: 'Roboto-Italic',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.blackColor,
    width: '60%',
    paddingLeft:20
  },
  subjectSubTextStyle: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
    color: Colors.blackColor,
  },
  subjectSubTextStyle1: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    fontSize: 14,
    color: Colors.textGrayColor,
  },
  CorrespondenceStyle: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.blackColor,
    marginLeft: 10,
  },
  correspondenceHeadingContainer: {
    width: '100%',
    height: 53,
    justifyContent: 'center',
    borderColor: Colors.tableBorderColor,
    borderWidth: 1,
    borderBottomWidth: 0,
    marginTop: 15,
  },
  correspondenceMainContainer: {
    width: '100%',
    height: 465,
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: Colors.tableBorderColor,
    borderWidth: 1,
  },
  chatDateText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 3,
    color: Colors.chatDateColor,
  },
  chatDateText1: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 30,
    color: Colors.chatDateColor,
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginRight:"8%"
  },
  nameContainer1: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft:"8%"
  },
  nameTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    fontSize: 14,
    color: Colors.blackColor,
  },
  TimeTextStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.textGrayColor,
  },
  chatMessage: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '300',
    fontSize: 13,
    color: Colors.blackColor,
  },
  messageContainer: {
    backgroundColor: Colors.backLi8grey,
    width: '90%',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  messageContainer1: {
    backgroundColor: Colors.chatMessageback,
    width: '90%',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  textInputContainer:{
    width: '75%',
    height: 56,
    borderRadius: 35,
    borderColor: Colors.headerBorderBottom,
    borderWidth: 1,
    marginTop: 30,
    flexDirection: 'row',
  },
  sendButtonContainer:{
    padding: 10,
    height: 56,
    top: 30,
    borderRadius: 5,
    backgroundColor: Colors.progressColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
});
