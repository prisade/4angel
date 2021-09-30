import React ,{useState } from 'react';
import { Container, Content, Button } from 'native-base';
import { RefreshControl } from 'react-native';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import HeaderSpan from 'containers/customheads/HeaderSpan';
import { CONTAINER,BODY } from "theme";
import { Text } from 'components';
import {styles} from '../../style';
import Items from '../components/Items';

const Basket = (props) => {
    const dispatch = useDispatch()
    const [refreshing,setrefreshing] = useState(false);
    const navigation = props.navigation;
    const { list } = props.cart

    return (
        <Container >
            <HeaderSpan body basket  navigation={navigation}/>
            <Content  refreshControl={
                <RefreshControl
                    onRefresh={()=>console.log('RefreshControl')}
                    refreshing={refreshing}
                    colors={[BODY.ORANGE_COLOR]} //android
                    tintColor={BODY.ORANGE_COLOR} //ios
                    progressBackgroundColor={'#fff'}
                />
         }>
             <Items />
            </Content>
            <Button disabled={list.length>0?false:true} 
             style={[styles.Button,{backgroundColor: list.length>0?BODY.ORANGE_COLOR:BODY.bg_LIGHT_GRAY ,borderColor:list.length>0?BODY.ORANGE_COLOR:BODY.bg_LIGHT_GRAY }]}
             onPress={()=>navigation.navigate('CheckOutScreen')}>
                <Text light xb>CHECKOUT</Text>
            </Button>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


const getStates = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(getStates, null)(Basket);
