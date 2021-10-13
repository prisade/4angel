import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Fab, Icon , Content} from 'native-base';
import BottomTabNavigator from 'containers/Footers';
import Headers from 'containers/customheads/Headers';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../style';
import NewsFeed from '../components/NewsFeed';

const Home = (props) => {
    const dispatch = useDispatch()
    const [refreshing, setrefreshing] = useState(false);
    const navigation = props.navigation;
    const [state,setState] = useState(false);

    return (
        <Container style={styles.Container}>
            <Headers body bodyText="Home" />
            <Content refreshControl={
                <RefreshControl
                    onRefresh={() => console.log('RefreshControl')}
                    refreshing={refreshing}
                    colors={[BODY.ORANGE_COLOR]} //android
                    tintColor={BODY.ORANGE_COLOR} //ios
                    progressBackgroundColor={'#fff'}
                />
            }>
                <NewsFeed />
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


export default Home;

