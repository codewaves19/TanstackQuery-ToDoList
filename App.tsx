import { StyleSheet, Text } from 'react-native';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Example from './Example';


const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
