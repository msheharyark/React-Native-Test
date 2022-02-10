import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../Colors/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const Noti_styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
  },
  backText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
    color: Colors.blackColor,
  },
  notificationText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 20,
    width:'70%',
    color: Colors.themeColor,
   
  },
  weeklyText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.themeColor,
  },
  arrowDownStyle: {
    top: 7,
    marginLeft: 15,
  },
  weeklyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    paddingVertical: 5,
    backgroundColor: Colors.barBackgroundColor,
    borderRadius: 5,
  },
  noti_heading: {
    marginTop: 15,
   flexDirection:'row'
  },
  weeklyMainContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 5,
  },
  bottomSheetContainer: {
    padding: 20,
    paddingTop: 0,
    bottom: 10,
  },
  notificationMainContainer:{
      width:"100%"
  },
  upperLineSubStyle: {
    flexDirection: 'row',
    flex: 9,
    marginTop:20
  },
  personImage: {
    height: 70,
    width: 70,
    borderRadius: 12,
  },
  nameDateContainer: {
    justifyContent: 'center',
    padding: 10,
    height: 70,
    width:"70%",
    marginLeft:7
  },
  nameText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.themeColor,
    marginBottom:3
  },
  dateText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
    color: Colors.progressColor,
  },
});
