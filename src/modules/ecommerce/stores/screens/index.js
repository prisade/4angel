import React, { useState } from 'react';
import { Container, Content, Button } from 'native-base';
import { RefreshControl, ScrollView } from 'react-native';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import HeaderSpan from 'containers/customheads/HeaderSpan';
import { CONTAINER, BODY } from "theme";
import { Text } from 'components';
import { styles } from '../../style';
import Products from '../components/Products';
import {getProducts} from '../slices/ProductsSlice';



const Stores = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation;

    const _getProducts = async ()=>{
        const body = JSON.stringify({
            Type : props.PRODUCTS.type
        });
        dispatch(getProducts({body:body,token:props.TOKEN}));
    }

    return (
        <Container >
            <HeaderSpan body bodyText="NEWSFEED" store navigation={navigation} />
            <Content refreshControl={
                <RefreshControl
                    onRefresh={() => _getProducts()}
                    refreshing={props.PRODUCTS.isFetching}
                    colors={[BODY.ORANGE_COLOR]} //android
                    tintColor={BODY.ORANGE_COLOR} //ios
                    progressBackgroundColor={'#fff'}
                />
            }
                style={{ paddingVertical: 10 }}
            >
                <Products 
                    TOKEN={props.TOKEN}
                    PRODUCTS={props.PRODUCTS.list}
                />
            </Content>
            {/* <Button style={styles.Button}>
                <Text xb>SEE MORE</Text>
            </Button> */}
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


const getStates = (state)=>{
    return{
        USERID    : state.login.logindata.UserCount,
        TOKEN     : state.login.logindata.token,
        USERDATA  : state.login.logindata,
        PRODUCTS : state.products,
    }
}
 
export default connect(getStates,null)(Stores);


