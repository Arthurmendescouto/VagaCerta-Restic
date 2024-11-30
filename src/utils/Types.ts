export type TaskProps = {
    id: number;
    title: String;
    date: String;
    company: String;
};

export type RootStackParamList = {
    Login: undefined;
    FormScreen: undefined;
    Home: undefined;
    Profile: undefined;
    Details: {id: number};
};
export interface VagaProps {
    id: number;
    title: string;
    description: string;
    phone: string;
    company: string;
  }