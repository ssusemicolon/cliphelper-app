import { HStack, Image, Text } from '@gluestack-ui/themed';

type UserProfileProps = {
  user: UserProfile;
};

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <HStack
      justifyContent="flex-start"
      alignItems="center"
      gap={10}
      padding={5}
    >
      <Image
        width={35}
        height={35}
        borderRadius={50}
        source={
          user.picture
            ? { uri: user.picture }
            : require('~/assets/images/default_profile.png')
        }
        alt="user thumbnail image"
      />
      <Text fontWeight="600" fontSize={'$md'}>
        {user.username}
      </Text>
    </HStack>
  );
};
