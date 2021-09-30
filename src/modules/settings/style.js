import {StyleSheet} from 'react-native';
import {BODY} from 'theme';

export const styles = StyleSheet.create({
    Thumbnail :{ alignSelf: 'center',width:120,height:120,borderRadius:60 },
    Button  : { width: '93%', alignSelf: "center", margin: 15, justifyContent: 'center', borderWidth: 2, borderColor: "#000", backgroundColor: BODY.LIGHT_COLOR, borderRadius: 5 },
    Item  : { marginBottom: 10,backgroundColor: '#fff',borderColor:'#000',borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, height:37,borderRadius:5},
    errorCont:{ borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center',width:'90%',alignSelf:"center",flexDirection:'column' },
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
});