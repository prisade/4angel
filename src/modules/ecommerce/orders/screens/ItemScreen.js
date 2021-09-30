import React ,{useState,useEffect } from 'react';
import { Container, Content, Button } from 'native-base';
import { RefreshControl } from 'react-native';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import Headers from 'containers/customheads/Headers';
import ItemDetails from '../components/ItemDetails';
import {logOut} from 'modules/login/slices/LoginSlice';
import {api} from 'api';
 


const ItemScreen = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation;
    const {transid,Ordercount,AmountPaid} = props.route.params;
    const [list,setlist] = useState([]);

    useEffect(()=>{
        _getOrderDetails(Ordercount)
    },[]);

    const _getOrderDetails = async (Ordercount) =>{
        const body = JSON.stringify({
            Ordercount: Ordercount
        });
        const response = await  api.post(`ecommerce/`,'getOneOrderDetails',body,props.TOKEN);
        let data = await response.json()
        if (response.status ===200) {
          setlist(data.ret);
        } else {
          dispatch(logOut({}));
        }
    }


    
    return (
        <Container >
            <Headers body bodyText={'ORDERED ITEMS'} orders navigation={navigation}/>
            <Content >
                <ItemDetails list={list} orderid={`ORDER ID: ${transid}`}  AmountPaid={AmountPaid}/>
            </Content>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}

const getStates = (state)=>{
    return{
        TOKEN  : state.login.logindata.token
    }
}
 
export default connect(getStates,null)(ItemScreen);



