import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content, Fab ,Icon} from 'native-base';
import BottomTabNavigator from 'containers/Footers';
import Headers from 'containers/customheads/Headers';
import { connect, useDispatch } from 'react-redux';
import { CONTAINER,BODY } from "theme";
import {styles} from '../style';
import SampleComponent from '../components/SampleComponent';
 
const Anothermodule1 = (props) => {
    const dispatch = useDispatch();
    const [state,setState] = useState(false);
    const [refreshing, setrefreshing] = useState(false);
    const navigation = props.navigation;
    
    return (
        <Container >
            <Headers  body bodyText="Anothermodule1" navigation={navigation} />
            <Content
                refreshControl={
                    <RefreshControl
                        onRefresh={() => console.log('RefreshControl/ CALL SERVER REQUEST ')}
                        refreshing={refreshing} // EITHER SLICE GET MTHOD , isfetching
                        colors={[BODY.ORANGE_COLOR]} //android
                        tintColor={BODY.ORANGE_COLOR} //ios
                        progressBackgroundColor={'#fff'}
                    />
                }
            >
               <SampleComponent navigation={navigation} />
            </Content>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


export default Anothermodule1;

