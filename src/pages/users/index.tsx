import { Text, 
         Box, 
         Flex, 
         Heading, 
         Button, 
         Icon, 
         Table, 
         Thead, 
         Th, 
         Checkbox, 
         Tbody, 
         Tr, 
         Td, 
         useBreakpointValue,
         Spinner
} from "@chakra-ui/react";

import Link from "next/link";

import { Header } from "../../components/Header/";
import { Sidebar } from "../../components/Sidebar/";
import { Pagination } from "../../components/Pagination/";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList(){
  
  const { data, isLoading, isFetching , error }= useUsers();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });  
  
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          flex="1"
          borderRadius="8"
          bg="gray.800" 
          p="8"
        >
          <Flex
           mb="8"
           justify="space-between"
           align="center"
          >
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
            </Heading>
            <Link href="/users/create" passHref >
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                
              >
                Criar novo Usuário
              </Button>
            </Link>
          
          </Flex>

         { isLoading ? (
           <Flex justify="center">
             <Spinner />
           </Flex>
         ): error ? (
          <Flex justify="center">
            Falha ao obter dados
          </Flex>
         ): (
           <>
            <Table colorScheme="whiteAlpha">
                <Thead>
                  <Th px={["4","4","6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && (<Th>Data de Cadastro</Th>) }
                  <Th w="6">Ações</Th>
                </Thead>

                <Tbody>
                   {data.map( user => {
                     return (
                      <Tr>
                      <Td px={["4","4","6"]}>
                        <Checkbox colorScheme="pink"></Checkbox>
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold" >{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (<Td>{user.createdAt}</Td>)}
                      <Td>
                      <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm" 
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine}/>}
                      > 
                        {isWideVersion? 'Editar' : ''}
                      </Button>
                      </Td>
                   </Tr> 
                     )
                   })

                   }
                </Tbody>
            </Table>

            <Pagination  
              totalCountOfRegisters={200}
              currentPage={5}
              registersPerPage={10}
              onPageChange={ () => {}}

            />
           </>
         )}
        </Box>
      </Flex>
    </Box>
  )

}