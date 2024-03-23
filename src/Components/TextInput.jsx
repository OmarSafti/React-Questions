import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";


function TextInput({ generateContent }) {
    const [text, setText] = useState('');
    const toast = useToast();

    function submitText() {
        if (text === '') {
            toast({
                title: 'Text field is empty',
                description: 'Enter some text',
                status: 'error',
                duration: 5000,
                isClosable: false,
            })
        }
        else {
            generateContent(text);
        }
    }

    return (
        <>
            <Textarea
                bg='red.400'
                color='white'
                padding={4}
                marginTop={6}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                bg='black'
                marginTop={4}
                color='white'
                width='100%'
                _hover={{ bg: 'white', color: 'black' }}
                onClick={submitText}
            >
                Get Questions
            </Button>
        </>
    )
}

export default TextInput