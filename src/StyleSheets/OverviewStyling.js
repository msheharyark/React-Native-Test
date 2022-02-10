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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundColor,
  },
  barChartContainer: {
    marginTop: hp(2),
    width: '90%',
    height: hp('60%'),
    backgroundColor: Colors.white,
    elevation: 2,
    padding: hp(3),
  },
  priceIndex: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.priceTextColor,
  },
  subpriceIndex: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.li8GreyColor,
  },
  textContainer: {
    flexDirection: 'row',
  },
  threeTabContainer: {
    marginTop: hp(3),
    width: '100%',
    height: hp('5%'),
    borderRadius: 5,
    backgroundColor: Colors.barBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  threeTabTextContainer: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: Colors.darkGrayColor,
  },
  threeTabTextContainerForActive: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: Colors.priceTextColor,
    // height:"90%",
  },
  threeTabViewContainerForActive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  chartContainer: {
    marginTop: hp(3),
  },
  textHeading: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginLeft: 15,
    fontSize: 17,
    color: Colors.themeColor,
  },
  secondMainContainer: {
    marginTop: hp(5),
    // height: '100%',
    width: '100%',
  },
  secondMainContainer1: {
    height: '100%',
    width: '100%',
  },
  ImageSliderContainer: {
    height: 205,
    width: wp('70%'),
    marginRight:15,
    padding:7,
    elevation:5,
    backgroundColor: Colors.white,
  },
  dateContainer:{
      height:19,
      width:82,
      marginTop:7,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:Colors.themeColor
  },
  dateText:{
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 10,
    color: Colors.white,
  },
  progress_container: {
    width: '92%',
    height: 7,
    backgroundColor: Colors.progressBackground,
  },
  progress_inner: {
    width: '90%',
    height: 7,
    backgroundColor: Colors.progressColor,
  },
  progressBarContainer:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  progressText:{
    fontFamily: 'Poppins-Bold',
    // fontWeight: '500',
    fontSize: 12,
    color: Colors.themeColor,
  }
});
