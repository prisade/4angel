import React, { useState, useEffect } from "react";
import { Header, Item, Button, Icon, Input, View } from "native-base";
import { BODY } from "theme";
import { Text } from 'components';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { styles } from '../style';
import { getProducts, assignState } from 'modules/ecommerce/stores/slices/ProductsSlice';
import { connect, useDispatch } from 'react-redux';
import { cartAmount ,assignState2} from 'modules/ecommerce/basket/slices/ItemSlice';

const HeaderSpan = (props) => {
    const dispatch = useDispatch()
    const [selected, setselected] = useState('All');
    const { store, basket, orders } = props;
    const { list,total } = props.cart
    const navigation = props.navigation;
    let style = {}
    if (orders) style.height = 60;

    useEffect(() => {
        _getProducts(selected);
    }, []);

    const _getProducts = async (selected = selected) => {
        const body = JSON.stringify({
            Type: selected
        });
        dispatch(getProducts({ body: body, token: props.TOKEN }));
        dispatch(assignState({ slicekey: "type", value: selected }));
    }

    const _selectType = (itemValue) => {
        setselected(itemValue)
        _getProducts(itemValue);
        dispatch(assignState({ slicekey: "type", value: itemValue }));
    }

    const displayTotal =  (_list) => {
        let ret =   cartAmount(_list);
        dispatch(assignState2({ slicekey: "total", value: ret.number }));
        return ret.text;
    }

    const amountList = list.map((value) => {
        return value.cartQty * value.Price;
    });

    return (
        <Header span style={{ ...styles.Header, ...style }} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
            <View style={{ width: '100%' }}>
                <View style={styles.StoreView1}>
                    <Button transparent style={styles.StoreButton} onPress={() => navigation.navigate('Stores')}>
                        <Text xl style={{ fontFamily: "Comfortaa-Bold", color: store ? BODY.BLACK : BODY.GRAY }} >Store</Text>
                    </Button>
                    <Button transparent style={[styles.StoreButton, { justifyContent: 'center' }]} onPress={() => navigation.navigate('Basket')}>
                        <Text xl style={{ fontFamily: "Comfortaa-Regular", color: basket ? BODY.BLACK : BODY.GRAY }} >Basket</Text>
                    </Button>
                    <Button transparent style={[styles.StoreButton, { justifyContent: 'flex-end' }]} onPress={() => navigation.navigate('Orders')}>
                        <Text xl style={{ fontFamily: "Comfortaa-Regular", color: orders ? BODY.BLACK : BODY.GRAY }} >Orders</Text>
                    </Button>
                </View>
                <View style={styles.StoreView2}>
                    {store &&
                        <Item style={styles.StoreView2Item}>
                            <Input placeholder='' />
                            <Icon active name='menu' type="Entypo" style={styles.StoreView2Icon} />
                        </Item>
                    }
                    {basket &&
                        <Button disabled style={styles.Button}>
                            <Text b>BASKET ITEMS</Text>
                            <Text b>{amountList.length > 0 ? displayTotal(amountList) : 0}</Text>
                        </Button>
                    }
                </View>

                {store &&
                    <View style={styles.View3}>
                        <SelectPicker
                            selectedValue={selected}
                            onValueChange={(itemValue, itemIndex) => _selectType(itemValue)}
                            itemStyle={{ color: 'red' }} >
                            <SelectPicker.Item label="All RESULTS" value="All" style={[styles.StoreView3SelectPicker]} />
                            <SelectPicker.Item label="Merch" value="Merch" style={styles.StoreView3SelectPicker} />
                            <SelectPicker.Item label="Belts" value="Belts" style={styles.StoreView3SelectPicker} />
                            <SelectPicker.Item label="Guards" value="Guards" style={styles.StoreView3SelectPicker} />
                        </SelectPicker>
                    </View>
                }
            </View>
        </Header>
    );
}


const getStates = (state) => {
    return {
        USERID: state.login.logindata.UserCount,
        TOKEN: state.login.logindata.token,
        USERDATA: state.login.logindata,
        PRODUCTS: state.products,
        cart: state.cart
    }
}

export default connect(getStates, null)(HeaderSpan);
