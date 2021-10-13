import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { Container, Content, Button, View, Item, Input } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { styles } from '../style';
import { Text } from 'components';
import { BODY } from 'theme';
import { Bubbles } from 'react-native-loader';
import {api} from 'api';
import {assignState} from '../slices/LoginSlice';

const { width, height } = Dimensions.get('window');


// data to be retrive in server after success login  
const userdata = {
    Address: "Philippines",
    ContactNumber: "000000000",
    Email: "geviepitogo@gmail.com",
    ID: "gevie",
    Image: "https://s3.wasabisys.com/sta/1623261221file.jpeg",
    MembershipStatus: "Active",
    Name: "Gevie Pitogo",
    Profile: "Student",
    UserCount: 84,
    token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjg0LCJpYXQiOjE2MjM4NzE0NjksImV4cCI6MTYyMzk1Nzg2OX0.diEy3i_pqKEZ877c6Whbb9G7nBoQPeZtPFymVHf7D5o",
}


const Login = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isError, setIsErrors] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const _login = async() => {
       // code below is the atual server request
        
        // setIsFetching(true);
        // setIsErrors(false);
        // const body = JSON.stringify({
        //     "Password": password,
        //     "Email/ID": email,
        // });
        // const response = await  api.auth('admin/','login',body);
        // let data = await response.json();
        // console.log('data',data);
        // if (response.status ===200) {
        //     setIsFetching(false);
        //     if (data.ret.status) {
        //         await dispatch(assignState({slicekey:'logindata',value:data.ret.others.return[0]}));
        //         await dispatch(assignState({slicekey:'is_loggedin',value:true}));
        //     }else{
        //         setErrors(data.ret.msg);
        //         setIsErrors(true);
        //     }
        // } else {
        //     setIsErrors(true);
        //     setErrors([data.ApiStatus]);
        //     setIsFetching(false);
        // }

                await dispatch(assignState({slicekey:'logindata',value:userdata}));
                await dispatch(assignState({slicekey:'is_loggedin',value:true}));
    }

    let Errors = [];
    if (isError) {
        Errors = errors.map((err, idx) => {
            return (
                <Text danger sm b key={idx} >{err}</Text>
            )
        })
    }
   
    return (
        <Container >
            <Content >
                <View style={{ height: height - (height * 0.1) }}>
                    <Image style={styles.logo} source={require('res/images/main-logo.png')} />
                    <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                        {isError ? Errors : null}
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#0086b3", marginTop: 30, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                        <View style={{flexDirection: 'column', padding: 10, marginTop: 60 }}>
                            {/* <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>Username</Text> */}
                            <Item style={styles.Item}>
                                <Input placeholderTextColor='white' placeholder='Username' value={email} name="email" onChangeText={val => setEmail(val)} />
                            </Item>

                            {/* <Text xb rg dark style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 10 }}>PASSWORD</Text> */}
                            <Item style={styles.Item}>
                                <Input placeholderTextColor='white' placeholder='Password' value={password} name="password" onChangeText={val => setPassword(val)}  secureTextEntry/>
                            </Item>
                            <Button style={[styles.Button2, { margin: 0, width: "50%" }]} transparent light>
                                <Text light>Forgot Password?</Text>
                            </Button>
                        </View>
                        <Button style={[styles.Button, { backgroundColor: '#fff', borderColor: '#fff' }]} onPress={() => _login()}>
                            {isFetching ? (<Bubbles size={10} color="fff" />) 
                               :(<Text dark xb>Login</Text>)
                            }
                        </Button>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Button style={[styles.Button2, { margin: 0, width: "50%" }]} transparent light onPress={() => navigation.navigate('Register')}>
                                <Text light>Create New Account</Text>
                            </Button>
                        </View>
                    </View>

                </View>
            </Content>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

export default connect(
    mapStateToProps,
    null
)(Login)


