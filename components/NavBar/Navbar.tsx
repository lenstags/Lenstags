import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from '@chakra-ui/react';
import { useDisconnect } from "wagmi";
import {  AddIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const NavBar = () => {
  
  const { disconnect } = useDisconnect();

  return (
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
      
      <HStack spacing={8} alignItems={'center'}>
        <Box> <Image
                src="/img/logo-extended.svg"
                alt="Lenstags Logo"
                width={100}
                height={60}
              /></Box>
      </HStack>
      <Flex alignItems={'center'}>
        <Button
          variant={'solid'}
          colorScheme={'BlackAlpha'}
          size={'sm'}
          border={'2px'}
          color={'black'}
          mr={4}
          leftIcon={<AddIcon />}>
          Post
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Edit Profile</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default NavBar;