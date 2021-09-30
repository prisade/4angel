import {StyleSheet} from 'react-native';
import {BODY,CONTAINER} from 'theme';

export const styles = StyleSheet.create({
    Button  : {width:'93%',alignSelf:"center",margin:15,justifyContent:'center',borderWidth:2,borderColor:"#000",backgroundColor:BODY.LIGHT_COLOR,borderRadius:5},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: 'blue',
        marginBottom: 10,
      },
      text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      pickerOption: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
      },
    
      optionsWrapper: {
        paddingHorizontal: 20,
      },
    
      text: {
        paddingLeft: 17,
      },
      disabledOrder:{
          borderColor:'#000',
          borderWidth:2
      },
      enabledOrder:{}
});