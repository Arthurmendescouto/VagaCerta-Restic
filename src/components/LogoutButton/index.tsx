import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/Routes';

import { Button, ButtonText } from './styles';

export const LogoutButton = () => {
    const { logout } = useContext(UserContext);
    const navigation = useNavigation();

    const handleLogout = () => {
        logout();
        navigation.navigate(Routes.LOGIN);
};

return(
    <Button onPress={handleLogout}>
    <ButtonText>Sair</ButtonText>
    </Button>
);
};

export default LogoutButton;