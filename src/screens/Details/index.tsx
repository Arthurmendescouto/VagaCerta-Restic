import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { Linking } from 'react-native'; 
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
    Title,
    Description
} from '../Details/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import { Button } from '../../components/Button';
import LogoutButton from '../../components/LogoutButton';
import { VagaProps } from "../../utils/Types";
import { Text } from 'react-native'; // Import do Text para mensagem de encerramento

export default function Details({ route, navigation }) {

    const [id, setId] = useState(route.params.id);
    const [vaga, setVaga] = useState<VagaProps | null>(null);

    const fetchVaga = async () => {
        try {
            const response = await api.get(`vagas/${id}`);
            const data = response.data;
            console.log("Dados retornados pela API:", data);
            setVaga({
                id: data.id,
                title: data.titulo,
                description: data.descricao,
                phone: data.telefone,
                company: data.empresa,
                status: data.status
            });
        } catch (error) {
            console.log("Erro ao buscar vaga:", error);
        }
    };

    const handleContactPress = () => {
        if (vaga && vaga.phone) {
            const whatsappURL = `https://wa.me/${vaga.phone}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20vaga%20${vaga.title}.`;
            Linking.openURL(whatsappURL).catch(err =>
                console.error('Erro ao abrir o WhatsApp:', err)
            );
        }
    };

    useEffect(() => {
        fetchVaga();
    }, [id]);

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
                    <LogoutButton />
                </HeaderButtonContainer>
                <Logo />
            </Header>

            {vaga ? (
                <Container>
                    <ContentContainer>
                        <Title>{vaga.title}</Title>
                        <Description>{vaga.description}</Description>

                        {vaga.status === "encerrada" && (
                            <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>
                                Vaga encerrada
                            </Text>
                        )}
                    </ContentContainer>

                    {vaga.status === "aberta" && ( 
                        <Button 
                            title="Entrar em contato" 
                            noSpacing={true} 
                            variant='primary'
                            onPress={handleContactPress} 
                        />
                    )}
                </Container>
            ) : (
                <Title>Vaga não foi encontrada.</Title>
            )}
        </Wrapper>
    );
}
