import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Thumbnail,Text, Avatar} from 'native-base';
import styles from './style';

const HeaderTitle = ({props}) => {
  console.log('HeaderTitle',props);
  return (
    <View style={styles.HeaderTitle_container}>
      <TouchableOpacity onPress={() => props.nav.navigate('Profile')}>
        <Thumbnail style={{width:40,height:40}} source={{ uri: 'https://placeimg.com/140/140/any' }} />
      </TouchableOpacity>
      <View style={styles.HeaderTitle_View}>
        <Text numberOfLines={1} style={styles.HeaderTitle_Text}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

export default HeaderTitle;