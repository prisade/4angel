import React, { Component } from 'react';
import { TouchableOpacity,RefreshControl } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail } from 'native-base';
import { Text } from 'components'
const NewsFeed = () => {
    return (
        <Card noShadow>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.35 }}>
                        <Thumbnail square large source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{ flex: 0.65 }}>
                        <Text >
                            Available Shift.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.35 }}>
                        <Thumbnail square large source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{ flex: 0.65 }}>
                        <Text >
                            Avaialble Shift.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered>
                    <Body>
                        <Text >
                            Avaialble shift.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered>
                    <Body>
                        <Text >
                            Avaialble Shift.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.35 }}>
                        <Thumbnail square large source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{ flex: 0.65 }}>
                        <Text >
                            Avaialble Shift.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered>
                    <Body>
                        <Text >
                            Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered>
                    <Body>
                        <Text >
                            Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.
                   </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
        </Card>
    );
}


export default NewsFeed;