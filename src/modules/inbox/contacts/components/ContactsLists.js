import React, { Component } from 'react';
import { TouchableOpacity, RefreshControl } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail } from 'native-base';
import { Text } from 'components';
const ContactsLists = () => {
    return (
        <Card noShadow>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>Aaron Huan </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>  Aaron Huan </Text>
                        <Text >  Trainer </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b> Victor  </Text>
                        <Text > Trainer </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>  Anjanette Huan </Text>
                        <Text >   Trainer   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
        </Card>
    );
}


export default ContactsLists;