import React, { useState } from 'react';
import { Container, Content, Button, Thumbnail, Header, View, Item, Input } from 'native-base';
import BottomTabNavigator from 'containers/Footers';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { styles } from '../style';
import { BODY } from "theme";
import { Bubbles } from 'react-native-loader';
import {api} from 'api';
import {reset,assignState} from 'modules/login/slices/LoginSlice';
import ProfileImage from '../components/ProfileImage';


const Profile = (props) => {
    const dispatch = useDispatch();
    const navigation = props.navigation;
    const token = props.TOKEN;
    const userid = props.USERID;
    const {Email,Name,Address,ContactNumber}  = props.USERDATA;
    const [_name,setname]  = useState(Name);
    const [_email,setemail]  = useState(Email);
    const [mobile,setmobile]  = useState(ContactNumber);
    const [_address,setaddress]  = useState(Address);

    const [isSaving,setisSaving]  = useState(false);
    const [errors, setErrors] = useState([]);
    const [isError, setIsErrors] = useState(false);
    const [localFile, setLocalFile] = useState(null);

    const saveChanges = async () => {
        setErrors([]);
        setisSaving(true);
        setIsErrors(false);
   
        const body = new FormData();
        if (localFile!==null) {
            let file = {
                   uri: localFile.path,
                   type: localFile.mime,
                   name: localFile.modificationDate,
                   size: localFile.size
            }
            body.append('file',file);
        }
        body.append('Name',_name);
        body.append('Email',_email);
        body.append('ContactNumber',mobile);
        body.append('Address',_address);
        body.append('UserCount',userid);

        const response = await  api.postfile('settings/','updateProfile',body,token);
        let data = await response.json();
        if (response.status ===200) {
            setisSaving(false);
            if (data.ret.status) {
                setLocalFile(null);
                setIsErrors(true);
                setErrors(data.ret.msg);
                let newData = {...props.USERDATA}
                newData.Name = _name;
                newData.Email = _email;
                newData.ContactNumber = mobile;
                newData.Address = _address;
                if (localFile!==null) {
                    newData.Image = data.ret.filename;
                }

                await dispatch(assignState({slicekey:'logindata',value:newData}));
            }else{
             setIsErrors(true);
             setisSaving(false);
             setErrors(data.ret.msg);
            }
        } else {
            setisSaving(false);
            dispatch(reset({}));
        }
    }

    const onFileSelected= (Image)=>{
        setLocalFile(Image);
    }

    let Returns=[];
    if (isError) {
        Returns = errors.map((err, idx) => {
            return (
                <Text danger sm b key={idx} >{err}</Text> 
            )
        })
    }

    return (
        <Container>
            <Header style={{ backgroundColor: BODY.THEME }} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
                <View style={{ justifyContent: 'center', width: '100%' }}>
                    <Text xb dark style={{ alignSelf: 'flex-start' }}>PROFILE UPDATE</Text>
                </View>
            </Header>
            <Content >
               <ProfileImage localFile={localFile} onFileSelected={onFileSelected}  IMAGE={props.USERDATA.Image}/>

                <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                        {errors.length>1? <Text danger sm b  > Error Saving of changes</Text> : null}
                        {errors.length==1? Returns : null}
                   </View>
                <View style={{ flexDirection: 'column', padding: 10 }}>
                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>DISPLAY NAME</Text>

                    <Item style={[styles.Item,{borderColor: isError && _name=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_name" value={_name} onChangeText={(val)=>setname(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>EMAIL ADDRESS</Text>
                    <Item style={[styles.Item,{borderColor: isError && _email=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_email" value={_email}  onChangeText={(val)=>setemail(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>MOBILE NUMBER</Text>
                    <Item style={[styles.Item,{borderColor: isError && mobile=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="mobile" value={mobile} onChangeText={(val)=>setmobile(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>MAILING ADDRESS</Text>
                    <Item style={[styles.Item,{borderColor: isError && _address=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="_address" value={_address}  onChangeText={(val)=>setaddress(val)} />
                    </Item>
                </View>
            </Content>
            <Button style={[styles.Button, { margin: 0 }]} onPress={()=>navigation.navigate("ResetPass")}>
                <Text xb>RESET PASSWORD</Text>
            </Button>
            <Button style={[styles.Button, { backgroundColor: BODY.ORANGE_COLOR, borderColor: BODY.ORANGE_COLOR }]} onPress={() => isSaving?null:saveChanges()}>
                {isSaving ? (<Bubbles size={10} color="fff" />)
                 : (<Text light xb> UPDATE PROFILE </Text>)
                }
            </Button>
            <BottomTabNavigator background="#6A040F" colorIcon="#fff" colorTitle="#fff" navigation={navigation} />
        </Container>
    );
}


const getStates = (state)=>{
    return{
        USERID : state.login.logindata.UserCount,
        TOKEN  : state.login.logindata.token,
        USERDATA  : state.login.logindata,
    }
}
 
export default connect(getStates,null)(Profile);

