import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from "@chakra-ui/react"
import { useState } from "react"
function Modale({ questions, loading, isOpen, closeModal }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>questions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' alignItems='center' justifyContent='center'>
                        {loading ? (
                            <CircularProgress isIndeterminate color='blue.300' />
                        ) : (
                            <Text>{questions}</Text>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modale