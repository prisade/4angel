import React, { useState, useRef } from "react";
import { Thumbnail, View, Card, CardItem, Body, Left } from "native-base";
import { Image, Dimensions, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BODY } from "theme";
import { Text } from 'components';
import { NO_IMAGE_URI } from 'api/constants';
import ItemDetails from './ItemDetails';
// import {styles} from '../../style';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Products = (props) => {
    const sheetRef = useRef(null);
    const [details, setDetails] = useState('');
    const [open, setOpen ] = useState(false);

    const openSheet = (value) => {
        if (sheetRef.current) {
            sheetRef.current.open();
            setDetails(value);
        }

    };


    const products = props.PRODUCTS.map((value, key) => {
        const img = value.Image !== null ? JSON.parse(value.Image)[0] : NO_IMAGE_URI;
        return (
            <TouchableOpacity style={{ width: (WIDTH / 2) - 20, height: (WIDTH / 2), marginBottom: 25 }} activeOpacity={1} key={value.Invencount.toString()} onPress={() => openSheet(value)}>
                <View style={{ backgroundColor: 'yellow', width: (WIDTH / 2) - 20, height: (WIDTH / 2) - 40, position: 'relative', marginBottom: 3 }}>
                    <Image style={{
                        aspectRatio: 1.1,
                        width: "100%",
                    }} source={{ uri: img }} />
                </View>
                <Text b>{value.Name}</Text>
                <Text md>${value.Price}</Text>
            </TouchableOpacity>
        );
    })
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '94%', alignSelf: 'center' }} >
                {products}
                {props.PRODUCTS.length===0 &&  <Text xb center lg style={{ fontFamily: "Comfortaa-Bold", color: BODY.GRAY,marginLeft:50 }}>No Products Avavilable</Text>}
            </View>
            <ItemDetails
                sheetRef={sheetRef}
                details={details}
                setOpen={setOpen}
                open={open}
            />
        </>
    );
}

export default Products;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});