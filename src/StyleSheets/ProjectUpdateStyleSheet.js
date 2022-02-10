import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../Colors/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundColor,
  },
  optionsContainer: {
    flexDirection: 'row',
    padding: 15,
    paddingTop: 20,
  },
  selectedOption: {
    padding: 10,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedOption1: {
    padding: 10,
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
  updatesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom:20,
  },
  updatesSubContainer: {
    width: '95%',
    height: 560,
    elevation: 3,
    backgroundColor:Colors.white,
    paddingHorizontal: 20,
   
  },
  nameText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: Colors.themeColor,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.bottomTabColor,
  },
  upperLineStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  upperLineSubStyle: {
    flexDirection: 'row',
    flex: 9,
    marginTop:20
  },
  personImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  nameDateContainer: {
    justifyContent: 'center',
    padding: 10,
  },
  moreHorizontalStyle: {
    justifyContent: 'center',
    flex: 1,
  },
  postImageStyle: {
    width: '100%',
    height: 230,
    marginTop: 20,
  },
  postNameStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 17,
    padding: 5,
    paddingLeft: 0,
    paddingTop: 15,
    color: Colors.blackColor,
  },
  postDetailStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: Colors.blackColor,
  },
  postDetailSeeStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: Colors.li8GreyColor,
   
    
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.headerBorderBottom,
  },
  likeTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize:12,
    color: Colors.progressColor,
  },
  likeContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  pressLikeStyle:{
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color:Colors.likeColor,
    fontSize:14,
    bottom:3,
    marginLeft:8
  },
  membersContainer:{
      flex:1,
      width:'100%',
      padding:25,
      paddingBottom:0
  },
  memberText:{
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize:24,
    color:Colors.themeColor,
  },
  underMemberText:{
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    bottom:5,
    color:Colors.li8GreyColor,
  },
  nameDateContainer1: {
    justifyContent: 'center',
    height:60,
    padding: 10,
  },
  personImage1: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems:'flex-end',justifyContent:'flex-end'
  },
  nameText1: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 18,
    marginLeft:5
    ,
    color: Colors.themeColor,
  },
  liveStyle:{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 4,
    right: 3,
    top: 2,
  }
});
