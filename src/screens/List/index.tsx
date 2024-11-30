import React, { useEffect, useState } from 'react';
import { Image, FlatList, View, Text } from 'react-native';
import api from '../../services/api';
import { Wrapper, Container, ListContainer, TextVagas } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import VagaCard from '../../components/VagaCard';

export default function List() {
  const [vagas, setVagas] = useState([]);  // Estado agora é 'vagas'
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get('/vagas');
        setVagas(response.data.vagas);  // Atualiza 'vagas' com os dados da resposta
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVagas();
  }, []);

  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />

      <Container>
        <Logo />
        <TextVagas>{vagas.length} vagas encontradas!</TextVagas>  {/* Usando 'vagas' aqui */}
        <ListContainer>
          {isLoading ? (
            <Text>Carregando...</Text>
          ) : (
            <FlatList
              data={vagas}  
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <VagaCard
                  id={item.id}
                  title={item.titulo}
                  dataCreated={item.dataCadastro}
                  company={item.empresa}
                />
              )}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={() => (
                <View>
                  <Text>Você ainda não tem vagas cadastradas</Text>
                  <Text>Crie vagas.</Text>
                </View>
              )}
            />
          )}
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
