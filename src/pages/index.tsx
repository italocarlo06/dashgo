import { Flex, Button, Stack } from '@chakra-ui/react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email:string;
  password: string;

}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido!'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async ({ email, password }, event) =>{
    await new Promise(resolve => setTimeout(resolve,2000));

  }

  return (
   <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
     <Flex 
        as="form" 
        w="100%" 
        maxWidth="360px"
        bg="gray.800"
        p={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
     >
      <Stack spacing="6" >
        <Input 
          name="email" 
          label="E-mail" 
          type="email" 
          {...register('email')}
          error={errors.email}
        />
        <Input 
          name="password" 
          label="Senha" 
          type="password" 
          {...register('password')}
          error={errors.password}
        />        
      </Stack>
      <Button 
        type="submit" 
        mt={6} 
        colorScheme="pink"
        isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>
     </Flex>
   </Flex>
  )
}
