
/** 
* @desc - Defines a custom Hheader component
* @param - boolean left
* @param - boolean body
* @param - boolean right
* @return - Custom Header Display
**/
import React from "react";
import { Header, Button, Icon, Left, Right, Body } from "native-base";
import { BODY, HEADER } from "theme";
import { Text } from 'components'


const Headers = (props) => {
    const { left, body, right, bodyText ,navigation} = props;
    return (
        <Header style={{ backgroundColor: BODY.THEME }} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
            <Left style={{ flex: .15 }}>
                {left &&
                    <Button transparent onPress={()=>navigation.pop()}>
                        <Icon name='chevron-left' type="Entypo" style={{ color: HEADER.BLACK, fontSize: 25 }} />
                    </Button>
                }
            </Left>

            {body &&
                <Body style={{ flex: .7 }}>
                    <Text md xb dark center>{bodyText}</Text>
                </Body>
            }

            <Right style={{ flex: .15 }}>
                {right &&
                    <Button transparent>
                        <Icon name='menu' type="Entypo" style={{ color: HEADER.BLACK, fontSize: 25 }} />
                    </Button>
                }
            </Right>
        </Header>
    );

}
export default Headers;
