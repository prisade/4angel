import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Left, Button } from 'native-base';
import { Text } from 'components';
import { styles } from '../../style';

const OrdersItems = (props) => {

    const {list,navigation} = props;

    const  orderList = list.map((value)=>{
        return (
            <CardItem bordered  key={value.Ordercount.toString()}>
            <Left style={{ flex: 0.7, flexDirection: 'column', alignItems: 'flex-start' }}>
                <Text b>{value.OrderID}</Text>
                <Text md>{"$" + value.AmountPaid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                <Text md>{value.OrderStatus}</Text>
            </Left>
            <Body style={{ flex: 0.3 }}>
            <Button style={[styles.Button, { height: 35, margin: 0 }]} onPress={()=>navigation.navigate('ItemScreen',{transid:value.OrderID,Ordercount:value.Ordercount,AmountPaid:value.AmountPaid})}>
                    <Text sm xb>DETAILS</Text>
                </Button>
                <Text l sm>{value.OrderDate}</Text>

            </Body>
        </CardItem>
        );
    })

    return (
        <Card noShadow>
            {orderList}
        </Card>
    );
}


export default OrdersItems;