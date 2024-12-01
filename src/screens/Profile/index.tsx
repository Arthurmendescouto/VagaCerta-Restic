import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export default function Profile({navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const storedUserId = await AsyncStorage.getItem('@VagaCerta-RESTIC:userId');
            if (storedUserId) {
                setUserId(storedUserId);
                // Carregar os dados do usuário se o ID estiver disponível
                loadUserData(storedUserId);
            }
        };

        fetchUserId();
    }, []);

    // Função para carregar os dados do usuário a partir da API
    const loadUserData = async (id) => {
        try {
            const response = await api.get(`/usuarios/${id}`);
            const user = response.data;
            setNome(user.nome);
            setEmail(user.email);
            setSenha(user.senha);
        } catch (error) {
            console.log('Erro ao carregar os dados do usuário:', error);
        }
    };

    // Função para salvar as informações atualizadas do perfil
    const handleSaveProfile = async () => {
        try {
            if (userId) {
                const updatedData = {
                    nome: nome,
                    email: email,
                    senha: senha,
                };

                // Enviar as informações atualizadas para o servidor
                await api.put(`/usuarios/${userId}`, updatedData);

                console.log('Perfil atualizado com sucesso!');
                navigation.goBack(); // Voltar para a tela anterior
            }
        } catch (error) {
            console.log('Erro ao atualizar perfil:', error);
        }
    };

    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input 
                        label='Nome' 
                        placeholder='Digite seu nome' 
                        value={nome} 
                        onChangeText={setNome}
                    />
                    <Input 
                        label='E-mail' 
                        placeholder='Digite seu e-mail' 
                        value={email} 
                        onChangeText={setEmail}
                    />
                    <Input 
                        label='Senha' 
                        placeholder='Digite sua senha' 
                        value={senha} 
                        onChangeText={setSenha}
                    />
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary' 
                    onPress={handleSaveProfile}
                />
            </Container>
        </Wrapper>
    );
}
