import { 
  FormControl, 
  FormLabel, 
  Input as ChakraInput, 
  InputProps as ChakraInputProps,
  FormErrorMessage,  
} from "@chakra-ui/react";

import { FieldError } from 'react-hook-form';

import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps{
  name: string;
  label?:string;  
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error, ...rest},ref ) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && (<FormLabel htmlFor={name}>{label}</FormLabel>)}
        <ChakraInput      
         name={name} 
         focusBorderColor="pink.500" 
         bg="gray.900"
         variant="filled"
         _hover={{
            bgColor:"gray.900"
            }}
            size="lg"          
          {...rest}     
          ref={ref}     
          />
          {!!error && (
          <FormErrorMessage>
              {error.message}
          </FormErrorMessage>)}
        </FormControl>
  )
}

export const Input = forwardRef(InputBase);