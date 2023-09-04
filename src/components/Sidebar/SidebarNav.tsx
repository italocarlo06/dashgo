import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export function SidebarNav(){
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">       
        <NavLink href="/dashboard"title="Dashboard" icon={RiDashboardLine}/>          
        <NavLink href="/users"title="Usuários" icon={RiContactsLine} />                          
      </NavSection>      
      <NavSection title="Automação">    
        <NavLink href="/forms"title="Formulários" icon={RiInputMethodLine} />          
        <NavLink href="/automation"title="Automação" icon={RiGitMergeLine} />                            
      </NavSection>     
    </Stack>
  );
}