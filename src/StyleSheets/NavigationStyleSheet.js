import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../Colors/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  headerMainContainer: {
    height: hp('12%'),
    borderBottomColor: Colors.headerBorderBottom,
    borderBottomWidth: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerRigthContainer: {
    left: wp(8.5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  headerRigthSecondMain: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: hp(1.6),
    left: wp(17),
  },
  headerThirdMain: {
    left: hp(1.5),
    top: hp(1.2),
    zIndex: 1,
    backgroundColor: Colors.badgeColorBackground,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  headeRightMainfive: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(1),
    backgroundColor: Colors.bellIconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerFourthMain: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-SemiBold',
    top: 1,
    right: 0.5,
  },
  headerProfileImage: {
    width: hp(7),
    height: hp(7),
    borderRadius: hp(5),
    top:5,
    justifyContent: 'center',
  },
  headerLeftStyle: {
    justifyContent: 'center',
    padding: hp(1.2),
    paddingTop: hp(1.5),
  },
  headerTitleStyle: {
    height: 0,
    width: 0,
  },
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
  labelContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  labelFocusedContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  labelFocusedStyle: {
    textAlign: 'center',
    color: Colors.themeColor,
    backgroundColor: 'transparent',
    fontWeight: '400',
    fontSize: 12,
    width: 100,
    lineHeight: 18,
    marginTop:5,
    fontFamily: 'Poppins-Regular',
    // width: 100,
  },
  labelStyle: {
    marginTop:5,
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 100,
    color: Colors.bottomTabColor,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  iconTab: {
    marginBottom: 3,
  },
});
