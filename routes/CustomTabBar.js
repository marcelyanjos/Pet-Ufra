import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { UserContext } from '../src/Context/UserContext'

import HomeIcon from '../src/assets/home.svg';
import CalendarIcon from '../src/assets/calendar.svg';
// import TodayIcon from '../assets/today.svg';
// import FavoriteIcon from '../assets/favorite.svg';
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
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
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
                <Text style={{color:'#535353'}}>Home</Text>
            </TabItem>
            <TabItem onPress={()=>goTo('Calendar')}>
                <CalendarIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                <Text style={{color:'#535353'}}>Calendario</Text>
            </TabItem>
            {/* <TabItemCenter onPress={()=>goTo('Appointments')}>
                <TodayIcon width="32" height="32" fill="#4EADBE" />
            </TabItemCenter> */}
            {/* <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem> */}
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