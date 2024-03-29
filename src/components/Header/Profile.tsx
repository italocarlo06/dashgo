import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps){
  return(    
    <Flex
      align="center"          
    > {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Italo Carlo</Text>
          <Text color="gray.300" fontSize="sm">
            italocarlo@gmail.com
          </Text>
        </Box> 
      )}
      
      <Avatar size="md" name="Italo Carlo"/>
    </Flex>      
  );
}