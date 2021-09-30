import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text,View} from 'native-base';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderRight =({props})=>{
    return (
                <TouchableOpacity 
                onPress={() => props.nav.navigate("Notifications")} 
                style={styles.HeaderRight_container}>
                <MaterialCommunityIcons   style={{ marginRight: 0 }}  name={'bell'}  size={35} color={'#B6AA57'} />
                <View style={styles.count_cont}>
                    <Text
                    style={styles.count} > 20 </Text>
                </View>
                </TouchableOpacity>
    );
}

export default HeaderRight;