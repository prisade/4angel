import React from 'react';
import { Container, Content, Button, Thumbnail } from 'native-base';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import Headers from 'containers/customheads/Headers';
import { Text } from 'components';
import { styles } from './style';
import {reset} from 'modules/login/slices/LoginSlice';
import {BODY} from 'theme';
import { DEFAULT_IMAGE_URI } from 'api/constants';

const Settings = (props) => {
    const dispatch = useDispatch();
    const navigation = props.navigation;
    return (
        <Container>
            <Headers body bodyText="SETTINGS" />
            <Content>
                <Thumbnail
                    style={styles.Thumbnail}
                    source={{ uri: props.USERDATA.Image!==null?props.USERDATA.Image:DEFAULT_IMAGE_URI}} />
                <Text center xxl dark style={{ fontFamily: "Comfortaa-Regular" }} >Jane</Text>
                <Text center b dark>STUDENT</Text>
                <Button style={styles.Button} onPress={() => navigation.navigate('Profile')}>
            
                    <Text xb>PROFILE UPDATE</Text>
                </Button>
                <Button style={styles.Button} onPress={() => navigation.navigate('Anothermodule1')}>
                    <Text xb>ANOTHER MODULE 1  w/ custom headers</Text>
                </Button>
                <Button style={styles.Button} onPress={() => navigation.navigate('Anothermodule2')}>
                <Text xb>ANOTHER MODULE 2 w/ react navigation heads </Text>
                </Button>
            </Content>
            <Text center b darkgray style={{ marginBottom: 10 }}> USERID-hehe </Text>
            <Button style={[styles.Button,{ backgroundColor: BODY.ORANGE_COLOR, borderColor: BODY.ORANGE_COLOR }]} onPress={() => dispatch(reset({}))}>
                <Text light xb>LOGOUT</Text>
            </Button>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}



const getStates = (state)=>{
    console.log(state.login);
    return{
        USERID : state.login.logindata.UserCount,
        TOKEN  : state.login.logindata.token,
        USERDATA  : state.login.logindata,
    }
}
 
export default connect(getStates,null)(Settings);

