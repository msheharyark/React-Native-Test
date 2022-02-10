import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import {styles} from '../StyleSheets/OverviewStyling';
import Colors from '../Colors/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BarChart} from 'react-native-gifted-charts';

function Overview() {
  const line_Config = {
    color: 'red',
  };
  const data = [
    {value: 80},
    {value: 150},
    {value: 120},
    {value: 170},
    {value: 210},
  ];
  const constructionData = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JD9upXVjkYOgLDuEdxwASMjQgH5AnK2DmA&usqp=CAU',
      date: 'June 10, 2021',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cd48QlBqGV1TOztrKzRQOMZWboPwPjHChA&usqp=CAU',
      date: 'June 10, 2021',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHY03U9LL4PCj4sNGmVGJxO18SOVLOpKqMg&usqp=CAU',
      date: 'May 16, 2021',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkM4OV5dbEHXIzG2rSvAV7RAU3rfRJ92GBg&usqp=CAU',
      date: 'August 26, 2020',
    },
  ];
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.barChartContainer}>
          <Text style={styles.priceIndex}>Price index</Text>
          <View style={styles.textContainer}>
            <Text style={styles.subpriceIndex}>41 Food Court Units -</Text>
            <Text
              style={{...styles.subpriceIndex, color: Colors.priceTextColor}}>
              {' '}
              4 Units Left
            </Text>
          </View>
          <View style={styles.threeTabContainer}>
            <View style={styles.threeTabViewContainerForActive}>
              <Text style={styles.threeTabTextContainerForActive}>
                Food Court Shops
              </Text>
            </View>
            <Text style={styles.threeTabTextContainer}>
              Residential Apartments
            </Text>
            <Text style={{...styles.threeTabTextContainer, marginRight: 3}}>
              Retail Shops
            </Text>
          </View>
          <View style={styles.chartContainer}>
            <BarChart
              data={data}
              initialSpacing={30}
              spacing={20}
              dashGap={0}
              barWidth={22}
              noOfSections={6}
              height={hp('30%')}
              stepValue={0}
              maxValue={0}
            />
          </View>
        </View>
      </View>

      <View style={styles.secondMainContainer}>
        <Text style={styles.textHeading}>Construction Progress</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          nestedScrollEnabled
          contentContainerStyle={{
            paddingBottom: 18,
            padding: hp(0),
            paddingLeft: hp(3),
            paddingTop: hp(2),
          }}
          data={constructionData}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <View style={styles.ImageSliderContainer}>
              <ImageBackground
                source={{uri: itemData.item.image}}
                style={{height: '100%', width: '100%'}}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{itemData.item.date}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
        />
      </View>
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>1-23 </Text>
        <View style={styles.progress_container}>
          <Animated.View style={[styles.progress_inner, {width: 30 + '%'}]} />
        </View>
      </View>

      <View style={styles.secondMainContainer}>
        <Text style={styles.textHeading}>Project Pictures</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          nestedScrollEnabled
          contentContainerStyle={{
            paddingBottom: 18,
            padding: hp(0),
            paddingLeft: hp(3),
            paddingTop: hp(2),
          }}
          data={constructionData}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <View style={styles.ImageSliderContainer}>
              <ImageBackground
                source={{uri: itemData.item.image}}
                style={{height: '100%', width: '100%'}}>
                {/* <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{itemData.item.date}</Text>
                </View> */}
              </ImageBackground>
            </View>
          )}
        />
      </View>
      <View style={{...styles.progressBarContainer, marginBottom: 10}}>
        <Text style={styles.progressText}>1-23 </Text>
        <View style={styles.progress_container}>
          <Animated.View style={[styles.progress_inner, {width: 30 + '%'}]} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Overview;
