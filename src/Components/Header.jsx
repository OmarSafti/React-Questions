import { Heading, Image, Text } from "@chakra-ui/react";

function Header() {
  return (
    <>
    <Heading color='white' marginBottom='1rem'>AI Questions</Heading>
    <Text textAlign='center' fontSize={25}>Enter a Topic and Get 5 Questions about It</Text>
    </>
  )
}

export default Header;