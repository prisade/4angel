import React, { Component } from 'react';
import { TouchableOpacity, RefreshControl } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail } from 'native-base';
import { Text } from 'components';
import { truncate } from 'api/helpers';

const Description = ({ str, n }) => {
    return truncate(str, n);
}

const SampleComponent = (props) => {
    const navigation = props.navigation;
    return (
        <Card noShadow>
            <TouchableOpacity onPress={() => navigation.navigate('SingleChat')} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>
                            James
                        </Text>
                        <Text >
                            <Description str={'Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.'}
                                n={70}
                            />
                        </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>
                            Will Kenny
                        </Text>
                        <Text >
                            <Description str={'Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.'}
                                n={70}
                            />
                        </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>
                            Beth Williams
                        </Text>
                        <Text >
                            <Description str={'Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.'}
                                n={70}
                            />
                        </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                <CardItem bordered >
                    <Left style={{ flex: 0.3 }}>
                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                    </Left>
                    <Body style={{}}>
                        <Text b>
                            Rev Shawn
                        </Text>
                        <Text >
                            <Description str={'Wanted to ask if you’re available for a portrait shoot next week. Wanted to ask if you’re available for a portrait shoot next week.'}
                                n={70}
                            />
                        </Text>
                    </Body>
                </CardItem>
            </TouchableOpacity>
        </Card>
    );
}


export default SampleComponent;