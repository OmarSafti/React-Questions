import React from 'react'
import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TextInput from './Components/TextInput'
import Modale from './Components/Modal'

const url = import.meta.env.VITE_URL;


function App() {
    const [questions, setQuestions] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateContent = async (text) => {
        setLoading(true);
        setIsOpen(true);

        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Ask 5 Questions about ${text}`
                            }
                        ]
                    }
                ]
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const data = result.candidates[0].content.parts[0].text;
            setQuestions(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <Box bg='red.600' color='white' height='100vh' paddingTop={130}>
            <Container maxW='3xl' centerContent>
                <Header />
                <TextInput generateContent={generateContent} />
                <Modale questions={questions} loading={loading} isOpen={isOpen} closeModal={closeModal} />
                <Footer />
            </Container>
        </Box>
    )
}

export default App