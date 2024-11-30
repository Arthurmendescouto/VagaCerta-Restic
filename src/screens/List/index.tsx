import React,{useEffect, useState} from 'react';
import { Image, FlatList, View, Text } from 'react-native';
import api from '../../services/api';
import { Wrapper,Container, ListContainer, TextVagas } from './styles';
import axios from 'axios';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import VagaCard from '../../components/VagaCard';


export default function List() {

const [DATA, setDATA] = useState([]);
const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchVagas=async () => {
        try {
          const response = await api.get('/vagas');
          return response ;
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
      }
    }

     fetchVagas();
  },[]);

    return (
        <Wrapper>
            <Image source={BGTop} style={{maxHeight: 86}}/>

            <Container>

                <Logo />
                <TextVagas>{vagas.length} vagas encontradas!</TextVagas>
                <ListContainer>
                {isLoading?(<text>carregando...</text>):(
                <FlatList
                data={vagas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                <VagaCard
                    id={item.id}
                    title={item.titulo} 
                    dataCreated={item.dataCadastro}
                    company={item.empresa}
                />
                }
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={() => (
                    <View>
                        <Text>
                            Você ainda não tem vagas cadastradas
                        </Text>
                        <Text>
                            Crie vagas.
                        </Text>
                    </View>
                )}
            />
                    )}
                    
                </ListContainer>

            </Container>
        </Wrapper>
    );
}
