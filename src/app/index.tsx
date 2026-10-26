import { router } from 'expo-router';
import { Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import { useTheme } from '../theme/useTheme';

export default function Welcome() {
  const c = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.colors.background,
        justifyContent: 'center',
        padding: 24,
        gap: 16,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          color: c.colors.textPrimary,
        }}
      >
        FitsForYou
      </Text>

      <Text style={{ color: c.colors.textSecondary }}>
        Decide what to wear from the clothes you already own.
      </Text>

      <AppButton
        title="Get started"
        onPress={() => router.replace('/home')}
      />
    </View>
  );
}