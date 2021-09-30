import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, ScrollView, ToastAndroid, TouchableOpacity } from "react-native";
import { View, Button, Content, Icon } from "native-base";
import RBSheet from "react-native-raw-bottom-sheet";
import { styles } from '../../style';
import { Text } from 'components';
import { BODY } from "theme";
import { SliderBox } from "react-native-image-slider-box";
import { NO_IMAGE_URI } from 'api/constants';
import { connect, useDispatch } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const CardPayment = (props) => {
    const dispatch = useDispatch();
    const { cardPayRef, total, setopencardpay, cartlist } = props;
    return (
        <>
            <RBSheet
                ref={cardPayRef}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={HEIGHT / 1.6}
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    },
                    wrapper: {
                        // backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }
                }}
                onOpen={() => setopencardpay(true)}
                onClose={() => setopencardpay(false)}
            >
                <View>
                    <View style={{ width: '80%', padding: 5, alignSelf: "center" }} >
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%', }}>
                            <Text md style={{ fontFamily: "Comfortaa-Bold" }}>Total Payment:</Text>
                            <Text md style={{ fontFamily: "Comfortaa-Bold" }}>{"$" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%', }}>
                            <Text md style={{ fontFamily: "Comfortaa-Bold" }}>No. of items:</Text>
                            <Text md style={{ fontFamily: "Comfortaa-Bold" }}>{cartlist.length}</Text>
                        </View>
                    </View>
                </View>
            </RBSheet>
        </>
    );
};

export default CardPayment;
