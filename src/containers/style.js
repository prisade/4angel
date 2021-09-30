import {StyleSheet} from 'react-native';
import {BODY,HEADER,FONTSIZE} from 'theme';

export const styles = StyleSheet.create({
    Header  : { backgroundColor: BODY.THEME },
    StoreView1  : { width: '100%', height: '33.3%', flexDirection: 'row', justifyContent: 'space-evenly' },
    StoreView2  : { width: '100%', height: '33.3%' },
    StoreView3  : { width: '100%', height: '33.3%' },
    StoreButton  : { width: '28%', justifyContent: 'flex-start' },
    StoreView2Item  : { marginBottom: 10,backgroundColor: '#fff',borderColor:'#000',borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, height:'100%'},
    StoreView2Icon  :{ color: "#676766", fontSize: 35 },
    StoreView3SelectPicker  : {color:HEADER.BLACK,fontFamily: "Roboto-Black",fontSize:FONTSIZE.rg },
    Button  : {width:'100%',alignSelf:"center",margin:15,justifyContent:'space-between',paddingHorizontal:10,borderWidth:2,borderColor:"#000",backgroundColor:BODY.LIGHT_COLOR,borderRadius:5},
});