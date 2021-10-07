import React, { Component } from 'react';
import { TouchableOpacity,RefreshControl, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Left, Icon, Thumbnail } from 'native-base';
import { Text } from 'components'
const NewsFeed = () => {
    return (
        <>
            <Text>Available Shift</Text>
            <Card noShadow>
                {/* <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
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
                </TouchableOpacity> */}
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
                {/* <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
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
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                    <CardItem bordered>
                        <Body style={styles.container}>
                        {/* <Text style={{alignSelf: 'flex-end'}}>
                            <Icon name="eye" style={{position: 'absolute', right: 0, justifyContent: 'center'}} type="Entypo"/>
                            </Text>  */}
                            <Text>
                                <Text>Available Shift. asdf</Text>
                            </Text>
                        </Body>
                    </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                    <CardItem bordered>
                        <Body style={styles.container}>
                            {/* <Text style={{alignSelf: 'flex-end'}}>
                                <Icon name="eye" style={{position: 'absolute', right: 0, justifyContent: 'center'}} type="Entypo"/>
                            </Text>  */}
                            <Text >
                            Available Shift.
                        </Text>
                        
                        </Body>
                    </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                    <CardItem bordered>
                        <Body style={styles.container}>
                            {/* <Text style={{alignSelf: 'flex-end'}}>
                            <Icon name="eye" style={{position: 'absolute', right: 0, justifyContent: 'center'}} type="Entypo"/>
                            </Text>  */}
                            <Text >
                            Available Shift.
                        </Text>  
                        </Body>
                    </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                    <CardItem bordered>
                        <Body style={styles.container}> 
                        {/* <Text style={{alignSelf: 'flex-end'}}>
                            <Icon name="eye" style={{position: 'absolute', right: 0, justifyContent: 'center'}} type="Entypo"/>
                            </Text>  */}
                            <Text >
                            Available Shift.
                        </Text>
                        </Body>
                    </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('hehe'); }} activeOpacity={1}>
                    <CardItem bordered>
                        <Body style={styles.container}>
                            {/* <Text style={{alignSelf: 'flex-end'}}>
                            <Icon name="eye" style={{position: 'absolute', right: 0, justifyContent: 'center'}} type="Entypo"/>
                            </Text>  */}
                            <Text >
                            Available Shift.
                        </Text> 
                        </Body>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        </>
    );
}

const styles = StyleSheet.create({
    test: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    container: {
        justifyContent: "center", 
        alignItems: "center"
      }
})


export default NewsFeed;