import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content, Fab ,Icon} from 'native-base';
import BottomTabNavigator from 'containers/Footers';
import Headers from 'containers/customheads/Headers';
import { connect, useDispatch } from 'react-redux';
import { CONTAINER,BODY } from "theme";
import {styles} from '../../styles';
import MessageLists from '../components/MessageLists';
 
const Messaging = (props) => {
    const dispatch = useDispatch();
    const [state,setState] = useState(false);
    const [refreshing, setrefreshing] = useState(false);
    const navigation = props.navigation;
    
    return (
        <Container >
            <Headers  body bodyText="CHATS" navigation={navigation} />
            <Content
                refreshControl={
                    <RefreshControl
                        onRefresh={() => console.log('RefreshControl')}
                        refreshing={refreshing}
                        colors={[BODY.ORANGE_COLOR]} //android
                        tintColor={BODY.ORANGE_COLOR} //ios
                        progressBackgroundColor={'#fff'}
                    />
                }
            >
               <MessageLists navigation={navigation} />
            </Content>
                <Fab
                    active={state}
                    direction="up"
                    containerStyle={styles.FabContainerSTyle}
                    style={styles.Fab}
                    position="bottomRight"
                    onPress={() => navigation.navigate('Contacts')}>
                    <Icon name="plus"  type="Entypo"/>
                </Fab>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


export default Messaging;

