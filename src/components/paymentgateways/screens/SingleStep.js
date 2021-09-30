import React, { useState, useEffect, useRef } from 'react';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Text } from 'components';
import { BODY } from 'theme';
import { connect, useDispatch } from 'react-redux';
import { api } from 'api';
import { showMessage, hideMessage } from "react-native-flash-message";
import { assignState } from 'modules/ecommerce/basket/slices/ItemSlice';

const SingleStep = (props) => {
  const dispatch = useDispatch();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const [_transid, settransid] = useState();
  const  {list,total,dispute,navigation} = props;
  const { logindata } = props.login;

  const fetchPaymentSheetParams = async () => {

    const body = JSON.stringify({
      id: logindata.UserCount,
      description: 'Ecommmerce Orders',
      amount: props.total,
      email: logindata.Email,
    });

    const response = await api.post(`ecommerce/`, 'cardPayment', body, props.TOKEN);
    let data = await response.json();
    console.log('data', data);

    if (!data.ret.status) {
      console.log("EROORRRRRR");
      return;
    }

    const { paymentIntent, ephemeralKey, customer,transid } = data.ret.others.response;
    setClientSecret(paymentIntent);
    settransid(transid);
    return {
        paymentIntent,
        ephemeralKey,
        customer,
        transid
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      style: 'alwaysDark',
      googlePay: true,
      merchantCountryCode: 'US',
      testEnv: true, // use test environment
    });

    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    if (list.length===0) {
      showMessage({
        message: `CART IS EMPTY`,
        description: "",
        type: "default",
        backgroundColor: BODY.RED_COLOR, // background color
        color: "#fff", // text color
        duration: 4000,
        textStyle: {
          fontFamily: "Comfortaa-Bold"
        }
      });
      return;
    }

    const { error } = await presentPaymentSheet({ clientSecret });
    if (error) {
      showMessage({
        message: `Order Satus: ${error.code}`,
        description: error.message,
        type: "default",
        backgroundColor: BODY.RED_COLOR, // background color
        color: "#fff", // text color
        duration: 4000,
        textStyle: {
          fontFamily: "Comfortaa-Bold"
        }
      });
    } else {

      showMessage({
        message: `Order Satus: Success`,
        description: "Payment successfull",
        type: "default",
        backgroundColor: BODY.ORANGE_COLOR, // background color
        color: "#fff", // text color
        duration: 4000,
        textStyle: {
          fontFamily: "Comfortaa-Bold"
        }
      });
      await _saveOrder(_transid);
    }
  };

 const _saveOrder = async (transid)=>{

      const body = JSON.stringify({
        OrderedProducts: list,
        OrderStatus: 'PAID',
        FK_CustomerID: logindata.UserCount,
        AmountPaid: total,
        AmountPaid: total,
        OrderID: transid,
      });

      const response = await api.post(`ecommerce/`, 'saveOrder', body, props.TOKEN);
      console.log(response);
      let data = await response.json();
      console.log('data', data);
      if (data.ret.status) {
        dispatch(assignState({slicekey:"list", value: []}));
        dispatch(assignState({slicekey:"total", value: 0}));
        setTimeout(()=>{
          navigation.navigate('ItemScreen',{transid:transid,Ordercount:data.ret.others.insert_id,AmountPaid:data.ret.others.AmountPaid});
        },1000)
      }
 }
  
  useEffect(() => {
    if (dispute===0) {
      console.log('dispute',dispute);
      initializePaymentSheet();
    }else{
      console.log('====has dispute=====');
    }
  }, []);


  return (
    <StripeProvider publishableKey='pk_test_51J2iPHERy8vsoYdil2OYZn2O7kWmmQxI4fJryGzaJ6vO8BSwXxnviSZCJKECCNCdV8qkTCg6CjYAkyK19rlT46RP00Z1SnTXGx'>
      {/* <Button onPress={()=>_saveOrder()} 
        style={[styles.Button,
               { backgroundColor: BODY.bg_LIGHT_GRAY}]}>
         <Text light xb>TEST</Text>
      </Button> */}
      <Button onPress={openPaymentSheet} disabled={!loading} 
        style={[styles.Button,
               { backgroundColor: loading ? BODY.ORANGE_COLOR : BODY.bg_LIGHT_GRAY,
                 borderColor: loading ? BODY.ORANGE_COLOR : BODY.bg_LIGHT_GRAY
                }]}>
        <Text light xb>VISA/ MASTER</Text>
      </Button>
    </StripeProvider>
  );
}



const getStates = (state) => {
  return {
    login: state.login,
    TOKEN: state.login.logindata.token,
  }
}

export default connect(getStates, null)(SingleStep);


const styles = StyleSheet.create({
  Button: { width: '93%', alignSelf: "center", margin: 15, justifyContent: 'center', borderWidth: 2, borderColor: "#000", backgroundColor: BODY.LIGHT_COLOR, borderRadius: 5 },
});