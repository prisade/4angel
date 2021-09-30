import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail } from 'native-base';
import { Text } from 'components';
import { styles } from '../../style';
import { NO_IMAGE_URI } from 'api/constants';
const ItemDetails = (props) => {
    const { list, orderid,AmountPaid } = props;

    console.log('list', list);

    const details = list.map((value) => {
        const img = value.Image !== null ? JSON.parse(value.Image)[0] : NO_IMAGE_URI;
        return (
            <CardItem bordered >
                <Left style={{ flex: 0.3, flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Thumbnail square source={{ uri: img }} />
                </Left>
                <Body >
                    <Text b>Price  : {"$" + value.PriceEach.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </Text>
                    <Text md>Qty   : {value.Qty} </Text>
                    <Text md>Total : {"$" + (value.Qty * value.PriceEach).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </Text>
                </Body>
            </CardItem>
        );
    })

    return (
        <>
            <Text center b md>{orderid}</Text>
            <Card noShadow>
                {details}

                <CardItem footer bordered>
                    <Text md b>TOTAL AMOUNT PAID: {"$" + AmountPaid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </Text>
                </CardItem>
            </Card>
        </>
    );
}


export default ItemDetails;