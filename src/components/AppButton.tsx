import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

import { useTheme } from '../theme/useTheme';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
}: Props) {
  const c = useTheme();
  const filled = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: filled
            ? c.primary
            : 'transparent',
          borderColor: c.primary,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text
        style={{
          color: filled ? c.onPrimary : c.primary,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: 'center',
  },
});