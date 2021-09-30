import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BODY} from 'theme';
import { View} from 'native-base';

const HeaderLeft =({props})=>{
    return (
        <View style={{backgroundColor:BODY.THEME,borderRadius:20,marginLeft:10,padding:2}}>
            <Ionicons onPress={()=>props.nav.goBack()}  style={{ marginLeft: 0 }}  name={'chevron-back-outline'}  size={25} color="#000" />
        </View>
    );
}

export default HeaderLeft;
