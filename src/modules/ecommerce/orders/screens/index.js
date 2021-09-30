import React ,{useEffect, useState } from 'react';
import { Container, Content, Button } from 'native-base';
import { RefreshControl } from 'react-native';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import HeaderSpan from 'containers/customheads/HeaderSpan';
import { CONTAINER,BODY } from "theme";
import { Text } from 'components';
import OrdersItems from '../components/OrdersItems';
import {getOrders} from '../slices/OrderSlice';
 


const Orders = (props) => {
    const dispatch = useDispatch()
    const [refreshing,setrefreshing] = useState(false);
    const navigation = props.navigation;
    const {list,isFetching } = props.orders;

    useEffect(()=>{
        _getOrders()
    },[]);

    const _getOrders = async () =>{
        const body = JSON.stringify({
            FK_CustomerID: props.USERID
        });
        dispatch(getOrders({body:body,token:props.TOKEN}));
    }
    

    return (
        <Container >
            <HeaderSpan body bodyText="NEWSFEED" orders navigation={navigation}/>
            <Content  refreshControl={
                <RefreshControl
                    onRefresh={()=>_getOrders()}
                    refreshing={isFetching}
                    colors={[BODY.ORANGE_COLOR]} //android
                    tintColor={BODY.ORANGE_COLOR} //ios
                    progressBackgroundColor={'#fff'}
                />
         }>
                <OrdersItems list={list} navigation={navigation} />
            </Content>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


const getStates = (state)=>{
    return{
        USERID : state.login.logindata.UserCount,
        TOKEN  : state.login.logindata.token,
        USERDATA  : state.login.logindata,
        orders    : state.orders,
    }
}
 
export default connect(getStates,null)(Orders);

