import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, ScrollView, ToastAndroid,TouchableOpacity } from "react-native";
import { View, Button, Content, Icon } from "native-base";
import RBSheet from "react-native-raw-bottom-sheet";
import { styles } from '../../style';
import { Text } from 'components';
import { BODY } from "theme";
import { SliderBox } from "react-native-image-slider-box";
import { NO_IMAGE_URI } from 'api/constants';
import { ADD_STATE } from '../../basket/slices/ItemSlice';
import { connect, useDispatch } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ItemDetails = (props) => {
  const dispatch = useDispatch();
  const { sheetRef, details, open, setOpen } = props;
  const [qty, setqty] = useState(1);
  let images = [NO_IMAGE_URI];
  if (open) {
    if (details.Image !== null) {
      images = JSON.parse(details.Image);
    }
  }

  const _addQty = (_qty) => {
    if (details.Quantity === _qty) {
      ToastAndroid.show(`Available qty is ${details.Quantity}`, ToastAndroid.SHORT);
      return;
    }
    setqty(_qty + 1);
  }

  const _minusQty = (_qty) => {
    if (_qty === 1) {
      ToastAndroid.show(`Minimum qty is 1`, ToastAndroid.SHORT);
    } 
      setqty((_qty > 1) ? _qty - 1 : 1);
  }

  const _addToCart = () => {
    const { DateTime, ...resOfData } = details;
    let cartItems = { ...resOfData }
    cartItems.cartQty = qty;
    const toadd = [cartItems]
    setqty(1);

    dispatch(ADD_STATE({ slicekey: "list", value: toadd }));
    showMessage({
      message: "CART ITEMS UPDATED",
      description: `${resOfData.Name} added to Cart`,
      type: "default",
      backgroundColor: BODY.ORANGE_COLOR, // background color
      color: "#fff", // text color
      duration: 2000,
      textStyle: {
        fontFamily: "Comfortaa-Bold"
      }
    });

  }

  return (
    <>
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={HEIGHT / 1.2}
        openDuration={250}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,

          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }
        }}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between" }}>
          <View style={{ widt: '100%', height: '50%', justifyContent: 'center' }} >
            <SliderBox
              images={images}
              // onCurrentImagePressed={index => {}}
              // currentImageEmitter={index => {}}
              parentWidth={WIDTH}
              dotColor={BODY.ORANGE_COLOR}
              inactiveDotColor="#90A4AE"
              sliderBoxHeight={200}
              autoplay
              circleLoop
            />
          </View>

          <Content  style={{ widt: '100%', height: '50%', padding: 20 }} >
          <TouchableOpacity activeOpacity={1}>
            <Text lg style={{ fontFamily: "Comfortaa-Bold" }}>{details.Name}</Text>
            <Text md style={{ fontFamily: "Comfortaa-Medium" }}>${details.Price}</Text>
            <Text sm style={{ fontFamily: "Comfortaa-Medium" }}>{details.Description} </Text>
          </TouchableOpacity>
          </Content>
          <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>
            <View style={{ width: '40%', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', height: 40, marginBottom: 10 }}>
              <Button style={{ backgroundColor: BODY.bg_LIGHT_GRAY, height: 30 }} onPress={() => _minusQty(qty)}>
                <Icon style={{ fontSize: 15, color: BODY.GRAY }} type="AntDesign" name="minus" />
              </Button>
              <Text lg style={{ fontFamily: "Comfortaa-Light", marginBottom: 10 }}> {qty}</Text>
              <Button style={{ backgroundColor: BODY.bg_LIGHT_GRAY, height: 30 }} onPress={() => _addQty(qty)}>
                <Icon style={{ fontSize: 15, color: BODY.BLACK }} type="AntDesign" name="plus" />
              </Button>
            </View>
            <Button
              style={[styles.Button, { backgroundColor: BODY.ORANGE_COLOR, borderColor: BODY.ORANGE_COLOR, margin: 0, marginBottom: 20, width: "40%" }]}
              onPress={() => _addToCart()}
            >
              <Text light xb>ADD TO CART</Text>
            </Button>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

export default ItemDetails;
