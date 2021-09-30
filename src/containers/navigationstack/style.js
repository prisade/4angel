import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  vasdsd: {
    fontFamily: 'DancingScript-Regular',
  },
  HeaderRight_container: {
    backgroundColor: "#6A040F",
  },
  HeaderTitle_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 3,
    backgroundColor: '#6A040F',
    width: '100%'
  },
  count_cont: {
    height: 17,
    width: 17,
    backgroundColor: "#6A040F",
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    position: "absolute",
    right: 4,
    top: 4
  },
  count: { color: "#fff", textAlign: "center", fontSize: 10 },
  HeaderTitle_LayOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center', width: '80%',
    backgroundColor: '#6A040F',
  },
  HeaderTitle_Text: { fontFamily: 'Poppins-Bold', fontSize: 18, alignSelf: 'center', color: '#000' },
  HeaderTitle_View: { marginLeft: 20, justifyContent: 'center', alignItems: 'center' }
});

export default styles;
