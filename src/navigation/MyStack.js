import React, {useRef,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer,useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../Colors/colors';
import {styles} from '../StyleSheets/NavigationStyleSheet';
import {Noti_styles} from '../StyleSheets/NotificationStyleSheet';
import OverView_svg from '../Assets/overView.svg';
import Overview_gray_svg from '../Assets/overview_gray.svg';
import ProjectUpdate_gray_svg from '../Assets/projectUpdate_gray.svg';
import ProjectUpdate_svg from '../Assets/projectUpdate.svg';
import UnitDetail_gray_svg from '../Assets/unitDetail_gray.svg';
import UnitDetail_svg from '../Assets/unitDetail.svg';
import Inquiries_gray_svg from '../Assets/inquiries_gray.svg';
import Inquiries_svg from '../Assets/inquiries.svg';
import Logo_svg from '../Assets/logo.svg';
import BellIcon_svg from '../Assets/bellIcon.svg';
import {OverviewStackNavigator} from '../navigation/Overview_Stack';
import {UnitDetailsStackNavigator} from '../navigation/Unit_Details_Stack';
import {ProjectUpdatesStackNavigator} from '../navigation/Project_Updates_Stack';
import {InquiriesStackNavigator} from '../navigation/Inquiries_Stack';
import RBSheet from 'react-native-raw-bottom-sheet';
import ArrowLeft_svg from '../Assets/arrow_left.svg';
import InquiryDetail from '../screens/InquiryDetail';
import Notificatoin from '../Components/Notifications';
const TabStack = createBottomTabNavigator();

const TabScreenNavigator = () => {
  const refRBSheet = useRef();
  return (
    <TabStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        tabBarStyle: {
          height: 73,
          justifyContent: 'center',
          alignItems: 'center',
        },
        
        tabBarShowLabel: false,
        headerTitleStyle: styles.headerTitleStyle,
        headerLeft: () => (
          <View style={styles.headerLeftStyle}>
            <Logo_svg width={wp(13)} height={hp(13)} />
          </View>
        ),
        headerRight: () => (
          <>
            <View style={styles.headerRigthContainer}>
              <View style={styles.headerRigthSecondMain}>
                <View style={styles.headerThirdMain}>
                  <Text style={styles.headerFourthMain}>12</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>{
                    if(refRBSheet.current){
                      refRBSheet.current.open()
                    }
                    
                  }}
                  style={styles.headeRightMainfive}>
                  <BellIcon_svg />
                </TouchableOpacity>
              </View>

              <Image
                source={require('../Assets/profileImage.jpeg')}
                style={styles.headerProfileImage}
              />
            </View>
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              dragFromTopOnly={true}
              height={hp("85%")}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                container: {
                  // justifyContent: "center",
                },
                draggableIcon: {
                  backgroundColor: 'white',
                },
              }}>
              <View
                style={Noti_styles.bottomSheetContainer}>
                <TouchableOpacity onPress={()=>refRBSheet.current.close()} style={{flexDirection: 'row'}}>
                  <ArrowLeft_svg />
                  <Text style={Noti_styles.backText}>Back</Text>
                </TouchableOpacity>
               <Notificatoin />
              </View>
            </RBSheet>
          </>
        ),
        headerStyle: styles.headerMainContainer,
      }}>
      <TabStack.Screen
        name="Overview"
        component={OverviewStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <OverView_svg width={27} height={24} />

                <Text style={styles.labelFocusedStyle}>Overview</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Overview_gray_svg width={27} height={24} />

                <Text style={styles.labelStyle}>Overview</Text>
              </View>
            );
          },
        }}
      />
      <TabStack.Screen
        name="Project Updates"
        component={ProjectUpdatesStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={{...styles.labelFocusedContainer,marginRight:10}}>
                <ProjectUpdate_svg width={27} height={24} />

                <Text style={styles.labelFocusedStyle}>Project Updates</Text>
              </View>
            ) : (
              <View style={{...styles.labelContainer,marginRight:10}}>
                <ProjectUpdate_gray_svg width={27} height={24} />

                <Text style={styles.labelStyle}>Project Updates</Text>
              </View>
            );
          },
        }}
      />

      <TabStack.Screen
        name="My Unit Details"
        component={UnitDetailsStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={{...styles.labelFocusedContainer,marginLeft:10}}>
                <UnitDetail_svg width={23} height={22} />

                <Text style={styles.labelFocusedStyle}>My Unit Details</Text>
              </View>
            ) : (
              <View style={{...styles.labelContainer,marginLeft:10}}>
                <UnitDetail_gray_svg width={23} height={22} />

                <Text style={styles.labelStyle}>My Unit Details</Text>
              </View>
            );
          },
          unmountOnBlur: true,
        }}
      />
      <TabStack.Screen
        name="Inquiries"
        component={InquiriesStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Inquiries_svg width={23} height={22} />

                <Text style={styles.labelFocusedStyle}>Inquiries</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Inquiries_gray_svg width={23} height={22} />

                <Text style={styles.labelStyle}>Inquiries</Text>
              </View>
            );
          },
          unmountOnBlur: true,
        }}
      />
    </TabStack.Navigator>
  );
};
const Stack = createStackNavigator();
function MyStack() {
  const navigationRef = React.useRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={TabScreenNavigator}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
        name="InquiryDetail"
        component={InquiryDetail}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
