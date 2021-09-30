import React, { useState, useEffect, useRef } from 'react';
import { RefreshControl,Dimensions } from 'react-native';
import { Container, Content, Button, View } from 'native-base';
import Headers from 'containers/customheads/Headers';
import { connect, useDispatch } from 'react-redux';
import { CONTAINER, BODY } from "theme";
import { styles } from '../../style';
import CheckOutItems from '../components/CheckOutItems';
import { Text } from 'components';
import { logOut } from 'modules/login/slices/LoginSlice';
import { assignState } from '../slices/ItemSlice';
import { api } from 'api';
import { SingleStep } from 'components/paymentgateways';
import { showMessage, hideMessage } from "react-native-flash-message";
import CardPayment from '../components/CardPayment';
const height = Dimensions.get('window').height;



const CheckOutScreen = (props) => {
    const paynowRef = useRef(null);
    const cardPayRef = useRef(null);
    const dispatch = useDispatch()
    const [refreshing, setrefreshing] = useState(false);
    const [opencardpay, setopencardpay] = useState(false);
    const navigation = props.navigation;
    const { list, total } = props.cart;

    useEffect(() => {
        _cartQtyUpdates();
    }, []);

    const _cartQtyUpdates = async () => {
        setrefreshing(true);
        const body = JSON.stringify({
            cartItems: list
        });
        const response = await api.post(`ecommerce/`, 'cartQtyUpdates', body, props.TOKEN);
        let data = await response.json();
        if (response.status === 200) {
            dispatch(assignState({ slicekey: "list", value: data.ret }));
            setrefreshing(false);
        } else {
            dispatch(logOut({}));
            setrefreshing(false);
        }
    }

    const _avoidPay = () => {
        showMessage({
            message: "CHECKOUT STATUS",
            description: `There have been changes with the Item QTY. Please update your cart on the highlighted item.`,
            type: "default",
            backgroundColor: BODY.ORANGE_COLOR, // background color
            color: "#fff", // text color
            duration: 3000,
            textStyle: {
                fontFamily: "Comfortaa-Bold"
            }
        });

    }

    const _payNow = () => {
        if (READY_ORDER_STATUS.length > 0) {
            _avoidPay();
            return;
        }
    }

    const opencardpayRef = () => {
        console.log('hheheh');
        if (READY_ORDER_STATUS.length > 0) {
            _avoidPay();
            return;
        }

        if (cardPayRef.current) {
            cardPayRef.current.open();
        }
    };

    const READY_ORDER_STATUS = list.filter((value) => value.READY_ORDER_STATUS === false);
    return (
        <>
            <Container style={styles.Container}>
                <Headers body left bodyText="CHECKOUT" navigation={navigation} />
                <Content refreshControl={
                    <RefreshControl
                        onRefresh={() => _cartQtyUpdates()}
                        refreshing={refreshing}
                        colors={[BODY.ORANGE_COLOR]} //android
                        tintColor={BODY.ORANGE_COLOR} //ios
                        progressBackgroundColor={'#fff'}
                    />
                }
                    style={{ backgroundColor: BODY.bg_LIGHT_GRAY }}
                >
                   
                    {list.length>0 ?  <CheckOutItems list={list} total={total} />
                        :
                        <View style={{height:height/1.5,justifyContent:'center'}}>
                               <Text xb center darkgray lg>EMPTY CART</Text>
                            <Button style={styles.Button} onPress={() => navigation.navigate("Stores")}>
                                 <Text xb>GOTO TO STORE</Text>
                             </Button>
                        </View>
                    }

                </Content>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: "16%" }}>
                    <View style={{ width: '35%' }}>
                        <Text lg center style={{ fontFamily: "Comfortaa-Bold" }} > Total</Text>
                        <Text lg center darkgray style={{ fontFamily: "Comfortaa-Bold" }}> {"$" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                    </View>
                    <View style={{ width: '65%' }}>
                        {!refreshing &&
                            <>
                                <Button disabled={list.length>0?false:true} 
                                style={[styles.Button, { backgroundColor: list.length>0?BODY.ORANGE_COLOR:BODY.bg_LIGHT_GRAY ,borderColor:list.length>0?BODY.ORANGE_COLOR:BODY.bg_LIGHT_GRAY, marginBottom: -5 }]} onPress={() => opencardpayRef()}>
                                    <Text light xb>PAYNOW</Text>
                                </Button>
                                <SingleStep list={list} total={total} dispute={READY_ORDER_STATUS.length} navigation={navigation} />
                            </>
                        }
                    </View>
                </View>
                <CardPayment
                    cardPayRef={cardPayRef}
                    setopencardpay={setopencardpay}
                    opencardpay={opencardpay}
                    cartlist={list}
                    total={total}
                />
            </Container>

        </>
    );
}



const getStates = (state) => {
    return {
        cart: state.cart,
        USERID: state.login.logindata.UserCount,
        TOKEN: state.login.logindata.token,

    }
}

export default connect(getStates, null)(CheckOutScreen);

