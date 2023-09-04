import { 
  Box, 
  Flex, 
  Heading, 
  Divider, 
  VStack, 
  SimpleGrid, 
  HStack, 
  Button
} from "@chakra-ui/react";
import Link from "next/link";

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import { Header } from "../../components/Header/";
import { Sidebar } from "../../components/Sidebar/";
import { Input } from "../../components/Form/Input";

type CreateUserFormData = {
  name: string;
  email:string;
  password: string;
  password_confirmation:string;

}


const createUserSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatória'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
});



export default function CreateUser(){
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserSchema)
  });
  
  /*userFormSchema.validate({}).catch(function(e){
    console.log(e);
  }
  )*/
  const { errors } = formState;

  //console.log(errors);
  const handleCreate: SubmitHandler<CreateUserFormData> = async ({ name, email, password, password_confirmation }, event) =>{
    console.log(name,email,password,password_confirmation);
    await new Promise(resolve => setTimeout(resolve,2000));
    

  }

  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius="8"
          bg="gray.800" 
          p={["6","8"]}
          onSubmit={handleSubmit(handleCreate)}
        >        
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6","8"]}
              w="100%"
            >
               <Input
                type="text"
                label="Nome Completo"
                error={formState.errors.name}
                {...register('name')}
              />
              <Input
                type="email"
                label="E-mail"
                error={formState.errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={["6","8"]}
              w="100%"
            >
             <Input
                type="password"
                label="Senha"
                error={formState.errors.password}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirmação da senha"
                error={formState.errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex
            mt="8"
            justify="flex-end"
          >
            <HStack spacing="4">
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
              <Link href="/users">
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
            </HStack>
          </Flex>
      </Box>
      </Flex>
    </Box>
)

}