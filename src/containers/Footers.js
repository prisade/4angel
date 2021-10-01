
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Footer, FooterTab, Button, Icon, Badge, Text, Form } from 'native-base';
import { FOOTER } from 'theme';

export default function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
    const route = useRoute();
    return (
        <Footer style={{ backgroundColor: `${FOOTER.BG_COLOR}` }}>
            <FooterTab
                style={{ backgroundColor: `${FOOTER.BG_COLOR}` }}
            >
                <Button
                    onPress={() => navigation.navigate("Home")}
                    active={route.name === "Home" ? true : false}
                    style={{ backgroundColor: 'transparent' }}
                    vertical>
                    <Icon name="calendar" type="Ionicons" style={{ fontSize: 25, color: route.name === "Home" ? `${FOOTER.THEME}` : `${FOOTER.text_COLOR}` }} active={route.name === "Home" ? true : false} />
                </Button>
                {/* <Button
                    onPress={() => navigation.navigate("Stores")}
                    style={{ backgroundColor: 'transparent' }}
                    active={route.name === "Stores" ? true : false}
                    vertical
                    badge>
                    <Badge style={{ backgroundColor: FOOTER.icon_COLOR }}><Text>4</Text></Badge>
                    <Icon name="shoppingcart" type="AntDesign" style={{ fontSize: 25, color: route.name === "Stores" ? `${FOOTER.THEME}` : `${FOOTER.text_COLOR}` }} active={route.name === "Stores" ? true : false} />

                </Button> */}
                <Button
                    onPress={() => navigation.navigate("Messaging")}
                    style={{ backgroundColor: 'transparent' }}
                    active={route.name === "Messaging" ? true : false}
                    vertical
                    badge>
                    <Badge style={{ backgroundColor: FOOTER.icon_COLOR }}><Text>2</Text></Badge>
                    <Icon name="message1" type="AntDesign" style={{ fontSize: 25, color: route.name === "Messaging" ? `${FOOTER.THEME}` : `${FOOTER.text_COLOR}` }} active={route.name === "Messaging" ? true : false} />

                </Button>
                <Button
                    onPress={() => navigation.navigate("Settings")}
                    style={{ backgroundColor: 'transparent' }}
                    active={route.name === "Settings" ? true : false}
                    vertical>
                    <Icon name="user" type="AntDesign" style={{ fontSize: 25, color: route.name === "Settings" ? `${FOOTER.THEME}` : `${FOOTER.text_COLOR}` }} active={route.name === "Settings" ? true : false} />
                </Button>

            </FooterTab>
        </Footer>
    )
}
