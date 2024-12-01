import { Image } from 'react-native';
import { useState } from 'react';
import { Wrapper, Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleLogin = async () => {
        try {
            // Verificar a resposta da API
            const response = await api.get('/usuarios');
            const users = response.data;

            console.log('Usuários encontrados:', users); // Verificando se os usuários estão sendo retornados corretamente

            // Procurar pelo usuário
            const user = users.find(u => u.email === email && u.senha === senha);
            if (user) {
                console.log('Login bem-sucedido!');
                // Navegar para a tela 'Home' se o usuário for encontrado
                navigation.navigate('Auth', { screen: 'Home' });
            } else {
                console.log('Login falhou: Usuário não encontrado ou credenciais erradas');
            }
        } catch (error) {
            console.log('Erro na requisição:', error);
        }
    };

    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>
                <Form>
                    <Logo />
                    <Input
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <Button
                        title="Entrar"
                        noSpacing={true}
                        variant="primary"
                        onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
                            <TextLink>Crie agora mesmo.</TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>
            </Container>
        </Wrapper>
    );
}