import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { UserContext } from '../src/Context/UserContext'

import HomeIcon from '../src/assets/home.svg';
import CalendarIcon from '../src/assets/calendar.svg';
import MapIcon from '../src/assets/map.svg';
import AdoptIcon from '../src/assets/home_heart.svg';
import HeartIcon from '../src/assets/heart_outline.svg';
import InfoIcon from '../src/assets/info.svg';
import ProfileIcon from '../src/assets/profile.svg';
// import AccountIcon from '../assets/account.svg';


const TabArea = styled.View`
    border-top-width:1.25px;
    border-color:#d2d2d2;
    height: 60px;
    background-color: #FFFF;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.View`
    width: 67px;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #BBDFF3;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                {/* <Text style={{color:'#535353'}}>Home</Text> */}
            </TabItem>
            <TabItem onPress={()=>goTo('Informations')}>
                <InfoIcon style={{opacity: state.index===5? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                {/* <Text style={{color:'#535353'}}>Infos</Text> */}
            </TabItem>
            {/* <TabItem onPress={()=>goTo('Calendar')}> */}
                {/* <CalendarIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" /> */}
                {/* <Text style={{color:'#535353'}}>Calendario</Text> */}
            {/* </TabItem> */}
            {/* <TabItem onPress={()=>goTo('Map')}> */}
                {/* <MapIcon style={{opacity: state.index===2? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" /> */}
                {/* <Text style={{color:'#535353'}}>Mapa</Text> */}
            {/* </TabItem> */}
            <TabItem onPress={()=>goTo('Adopt')}>
                <TabItemCenter>
                <AdoptIcon style={{opacity: state.index===3? 1 : 0.5}} width="32" height="32" fill="#4EADBE" />
                </TabItemCenter>
                {/* <Text style={{color:'#535353'}}>Adote</Text> */}
            </TabItem>
            <TabItem onPress={()=>goTo('Donation')}>
                <HeartIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                {/* <Text style={{color:'#535353'}}>Doação</Text> */}
            </TabItem>
            
            <TabItem onPress={()=>goTo('Profile')}>
                <ProfileIcon style={{opacity: state.index===6? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                {/* <Text style={{color:'#535353'}}>Perfil</Text> */}
            </TabItem>
            {/* <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    :
                    <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                }
            </TabItem> */}
        </TabArea>
    );
}