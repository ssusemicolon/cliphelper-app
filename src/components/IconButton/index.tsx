import { Box, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

type IconButtonProp = {
  color?: string;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xs' | undefined;
  icon: any;
};

const IconButton = ({ color, onClick, size = 'xl', icon }: IconButtonProp) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => onClick?.()}>
    <Box paddingTop={3} paddingLeft={5}>
      <Icon as={icon} color={color} size={size} />
    </Box>
  </TouchableOpacity>
);

export default IconButton;
