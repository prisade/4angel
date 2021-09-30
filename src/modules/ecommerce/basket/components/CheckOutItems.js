import React, { useState, useRef } from 'react';
import { Thumbnail, Card, CardItem, Body, Left, Right } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { styles } from '../style';
import { BODY, HEADER } from "theme";
import { NO_IMAGE_URI } from 'api/constants';

const CheckOutItems = (props) => {
    const dispatch = useDispatch();
    const navigation = props.navigation;
    const { list } = props;


    const cartLists = list.map((value) =>
        <CardItem key={value.Invencount.toString()} bordered  
            style={{
                    backgroundColor:value.READY_ORDER_STATUS===false?BODY.bg_LIGHT_GRAY:'#fff',
                    borderColor:value.READY_ORDER_STATUS===false?'#000':'#fff',
                    borderBottomColor:value.READY_ORDER_STATUS===false?'#000':'#fff',
                    borderWidth:2,
                    borderBottomWidth:2
                }}
            >
            <Left style={{ flex: 0.35 }} >
                <Thumbnail square source={{ uri: value.Image !== null ? JSON.parse(value.Image)[0] : NO_IMAGE_URI }} />
            </Left>
            <Body>
                <Text md>{value.Name}</Text>
                <Text darkgray sm>Qty: {`${value.cartQty}`}</Text>
                <Text darkgray sm style={{color:BODY.ORANGE_COLOR}}>Available Qty: {`${value.Quantity}`}</Text>
            </Body>
            <Right style={{ flex: 0.3 }}><Text b md>{`$${value.Price * value.cartQty}`}</Text></Right>
        </CardItem>
    )

    return (
        <Card noShadow>
            {cartLists}
        </Card>

    );
}


export default CheckOutItems;