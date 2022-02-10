import React, {useState} from 'react';
import Colors from '../Colors/colors';
import {styles} from '../StyleSheets/UnitDetailStyleSheet';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import ArrowRight from '../Assets/arrowRight.svg';
import X_Square from '../Assets/x_square.svg';
import Modal from 'react-native-modal';
function PaymentDetails() {
  const paidInstallments = [
    {
      id: 1,
      detail: 'Down Payment',
      date: 'February 3, 2021',
      payment: '3050000',
    },
    {
      id: 2,
      detail: '1st Installment',
      date: 'May 3, 2021',
      payment: '761750',
    },
    {
      id: 3,
      detail: '2nd Installment',
      date: 'August 3, 2021',
      payment: '761750',
    },
    {
      id: 4,
      detail: '3rd Installment',
      date: 'August 3, 2021',
      payment: '761750',
    },
    {
      id: 5,
      detail: '4th Installment',
      date: 'August 3, 2021',
      payment: '761750',
    },
    {
      id: 6,
      detail: '5th Installment',
      date: 'August 3, 2022',
      payment: '761750',
    },
    {
      id: 7,
      detail: '6th Installment',
      date: 'August 3, 2021',
      payment: '761750',
    },
    {
      id: 8,
      detail: '7th Installment',
      date: 'November 3, 2022',
      payment: '761750',
    },
    {
      id: 9,
      detail: '8th Installment',
      date: 'December 30, 2022',
      payment: '761750',
    },
    {
      id: 10,
      detail: 'Remaining Amount',
      date: 'At possession',
      payment: '761750',
    },
  ];
  const paymentPlan = [
    {
      id: 1,
      detail: 'Down Payment',
      date: 'February 3, 2021',
      payment: '3050000',
    },
    {
      id: 2,
      detail: '1st Installment',
      date: 'May 3, 2021',
      payment: '761750',
    },
    {
      id: 3,
      detail: '2nd Installment',
      date: 'August 3, 2021',
      payment: '761750',
    },
  ];
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  return (
    <View style={styles.paymentDetailContainer}>
      <View style={styles.thirdContainer}>
        <View style={styles.rowContainerPayment}>
          <Text style={styles.headingTextPayement}>Total Amount:</Text>
          <Text style={styles.answerTextPayement}>
            1 crore, 1 lac and 60 thousand rupees.
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.headingTextPayement}>Amount Paid:</Text>
          <Text style={styles.answerTextPayement}>
            38 lac, 11 thousand, 7 hundred and 50 rupees.
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.headingTextPayement}>Total Left:</Text>
          <Text style={styles.answerTextPayement}>
            63 lac, 48 thousand, 2 hundred and 50 rupees.
          </Text>
        </View>
      </View>

      <View style={styles.paidStatusContainer}>
        <View style={styles.paidContainer}>
          <Text style={styles.paidTextStyle}>38% Paid</Text>
        </View>
        <View style={styles.paidLeftContainer}>
          <Text style={styles.paidLeftTextStyle}>62% left</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleModal1}
        style={styles.paymentPlanContainer}>
        <Text style={styles.paymentPlanTextStyle}>View Payment Plan</Text>
        <ArrowRight />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleModal2}
        style={{...styles.paymentPlanContainer, marginBottom: 10}}>
        <Text style={styles.paymentPlanTextStyle}>View Paid Installments</Text>
        <ArrowRight />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible1}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInTiming={500}
        animationOutTiming={500}
        style={{backgroundColor: 'transparent'}}>
        <View style={{height: 260, backgroundColor: 'white'}}>
          <TouchableOpacity
            onPress={toggleModal1}
            style={styles.modalCloseContainer}>
            <View style={styles.modalCloseContainer1}>
              <Text style={styles.modalCrossText}>Close</Text>
              <X_Square />
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.paymentDataContainer}>
              <View style={styles.tableHeadingContainer}>
                <View style={styles.columStyle1}>
                  <Text style={styles.tableHeadingStyle}>Payment Details</Text>
                </View>
                <View style={styles.columStyle2}>
                  <Text style={styles.tableHeadingStyle}>Due Date</Text>
                </View>
                <View style={styles.columStyle3}>
                  <Text style={styles.tableHeadingStyle}>Payment</Text>
                </View>
              </View>

              <FlatList
                showsVerticalScrollIndicator={false}
                data={paymentPlan}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      ...styles.tableHeadingContainer1,
                      backgroundColor:
                        index % 2 == 0 ? Colors.white : Colors.backgroundColor,
                    }}>
                    <View style={styles.columStyle1}>
                      <Text style={styles.tableHeadingStyle1}>
                        {item.detail}
                      </Text>
                    </View>
                    <View style={styles.columStyle2}>
                      <Text style={styles.tableHeadingStyle1}>{item.date}</Text>
                    </View>
                    <View style={styles.columStyle3}>
                      <Text style={styles.tableHeadingStyle1}>
                        {item.payment}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={isModalVisible2}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInTiming={500}
        animationOutTiming={500}
        style={{backgroundColor: 'transparent'}}>
        <View style={{height: 560, backgroundColor: 'white'}}>
          <TouchableOpacity
            onPress={toggleModal2}
            style={styles.modalCloseContainer}>
            <View style={styles.modalCloseContainer1}>
              <Text style={styles.modalCrossText}>Close</Text>
              <X_Square />
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.paymentDataContainer1}>
              <View style={styles.tableHeadingContainer}>
                <View style={styles.columStyle1}>
                  <Text style={styles.tableHeadingStyle}>Payment Details</Text>
                </View>
                <View style={styles.columStyle2}>
                  <Text style={styles.tableHeadingStyle}>Due Date</Text>
                </View>
                <View style={styles.columStyle3}>
                  <Text style={styles.tableHeadingStyle}>Payment</Text>
                </View>
              </View>

              <FlatList
                showsVerticalScrollIndicator={false}
                data={paidInstallments}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      ...styles.tableHeadingContainer1,
                      backgroundColor:
                        index % 2 == 0 ? Colors.white : Colors.backgroundColor,
                    }}>
                    <View style={styles.columStyle1}>
                      <Text style={styles.tableHeadingStyle1}>
                        {item.detail}
                      </Text>
                    </View>
                    <View style={styles.columStyle2}>
                      <Text style={styles.tableHeadingStyle1}>{item.date}</Text>
                    </View>
                    <View style={styles.columStyle3}>
                      <Text style={styles.tableHeadingStyle1}>
                        {item.payment}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default PaymentDetails;
