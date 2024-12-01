import React, { useState } from 'react';
import { Image } from 'react-native';
import { Wrapper, Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api'; // Importando a configuração do Axios

export default function FormScreen({ navigation }) {
    // Estado para armazenar os valores do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para enviar os dados para a API
    const handleSubmit = async () => {
        try {
            const novoUsuario = { nome, email, senha };

            // Envia a requisição POST para adicionar um novo usuário
            const response = await api.post('/usuarios', novoUsuario);

            // Exibe a resposta da API (novo usuário criado)
            console.log('Novo usuário criado:', response.data);

            // Aqui, você pode navegar para outra tela, como a tela de login
            navigation.navigate('Login');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>
                <Form>
                    <Logo />
                    <Input
                        label="Nome"
                        placeholder="digite seu nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <Input
                        label="E-mail"
                        placeholder="digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label="Senha"
                        placeholder="digite sua senha"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <Button
                        title="Entrar"
                        noSpacing={true}
                        variant="primary"
                        onPress={handleSubmit} // Chama a função handleSubmit ao clicar no botão
                    />
                    <TextContainer>
                        <TextBlack>Já tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('Login')}>
                            <TextLink>Faça seu login.</TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>
            </Container>
        </Wrapper>
    );
}
