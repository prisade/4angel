import React, { useState } from 'react';
import { TouchableOpacity, RefreshControl, Image } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail, View, Button, Icon } from 'native-base';
import { Text } from 'components';
import { connect, useDispatch } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { BODY } from 'theme';
import { UPDATE_STATE,assignState } from '../../basket/slices/ItemSlice';
import { NO_IMAGE_URI } from 'api/constants';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";

const Items = (props) => {
    const dispatch = useDispatch();
    const [showDialog,setshowDialog] = useState(false);
    const [removeid,setremoveid] = useState('');
    const { list } = props.cart

    const _addQty = (_qty, Invencount, AvailableQty) => {
        if (AvailableQty < _qty + 1) {
            ToastAndroid.show(`Available qty is ${AvailableQty}`, ToastAndroid.SHORT);
            return;
        }
        let newQty = _qty + 1;
        dispatch(UPDATE_STATE(
            {
                is_idx: false,
                where: 'Invencount',
                where_value: Invencount,
                slicekey: 'list',
                objkey: {
                    cartQty: newQty,
                }
            }
        ))
    }

    const _minusQty = (_qty, Invencount) => {
        if (_qty === 1) {
            ToastAndroid.show(`Minimum qty is 1`, ToastAndroid.SHORT);
            return;
        }

        let newQty = _qty - 1;
        dispatch(UPDATE_STATE(
            {
                is_idx: false,
                where: 'Invencount',
                where_value: Invencount,
                slicekey: 'list',
                objkey: {
                    cartQty: newQty,
                }
            }
        ))
    }

    const optionYes = () => {
        setshowDialog(false);
        setremoveid('');
         
        const newList = list.filter((value)=> value.Invencount !==removeid);
        dispatch(assignState({slicekey:"list", value: newList}));
    }       

    const optionNo = () => {
        setshowDialog(false);
        setremoveid('');
    }

    const   _openConfirm = (show,id) => {
        setshowDialog(show);
        setremoveid(id);
    }


    const cartLists = list.map((value) =>
        <TouchableOpacity key={value.Invencount.toString()} onLongPress={() => _openConfirm(true,value.Invencount)} activeOpacity={.7}>
            <CardItem bordered >
                <Left style={{ flex: 0.5, position: "relative" }}>
                    <Image style={{
                        aspectRatio: 1.5,
                        width: "80%",
                        alignSelf: 'center'
                    }} source={{ uri: value.Image !== null ? JSON.parse(value.Image)[0] : NO_IMAGE_URI }} />
                </Left>
                <Body style={{ flex: 0.5 }}>
                    <Text b>{value.Name}</Text>
                    <Text darkgray md>{`$${value.Price * value.cartQty}`}</Text>
                    <Text darkgray sm style={{ color: BODY.ORANGE_COLOR }}>Available Qty: {`${value.Quantity}`}</Text>
                    <View style={{ width: '80%', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', height: 40, marginBottom: 10 }}>
                        <Button style={{ backgroundColor: BODY.bg_LIGHT_GRAY, height: 25 }} onPress={() => _minusQty(value.cartQty, value.Invencount)}>
                            <Icon style={{ fontSize: 12, color: BODY.GRAY }} type="AntDesign" name="minus" />
                        </Button>
                        <Text sm style={{ fontFamily: "Comfortaa-Light", marginBottom: 15 }}> {value.cartQty}</Text>
                        <Button style={{ backgroundColor: BODY.bg_LIGHT_GRAY, height: 25 }} onPress={() => _addQty(value.cartQty, value.Invencount, value.Quantity)}>
                            <Icon style={{ fontSize: 12, color: BODY.BLACK }} type="AntDesign" name="plus" />
                        </Button>
                    </View>
                </Body>
            </CardItem>
        </TouchableOpacity>
    )


    return (
        <>
            <Card noShadow >
                {list.length > 0 ? cartLists :

                    <CardItem noBorder>
                        <Body style={{ flex: 1 }}>
                            <Text darkgray center lg style={{ fontFamily: "Comfortaa-Bold" }}>CART IS EMPTY!</Text>
                        </Body>
                    </CardItem>
                }
            </Card>
            {/* <Button onPress={()=> dispatch(assignState({slicekey:"list", value: []}))}> 
                  <Text>test</Text>
            </Button> */}

            <ConfirmDialog
                    title="Remove Item"
                    message="Are you sure about that?"
                    onTouchOutside={() => {setshowDialog(false);setremoveid('');}}
                    visible={showDialog}
                    negativeButton={{
                        title: "NO",
                        onPress: optionNo,
                        disabled: false,
                        titleStyle: {
                            color: "blue",
                            colorDisabled: "aqua",
                        },
                        style: {
                            backgroundColor: "transparent",
                            backgroundColorDisabled: "transparent",
                        },
                    }}
                    positiveButton={{
                        title: "YES",
                        onPress: optionYes,
                    }}
                />

        </>
    );
}

const getStates = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(getStates, null)(Items);