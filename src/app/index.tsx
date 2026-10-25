import { router } from 'expo-router';
import { Text, View } from 'react-native';

import AppButton from '../src/components/AppButton';
import { useTheme } from '../src/theme/useTheme';

export default function Welcome() {
  const c = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.background,
        justifyContent: 'center',
        padding: 24,
        gap: 16,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          color: c.primary,
        }}
      >
        FitsForYou
      </Text>

      <Text style={{ color: c.textSecondary }}>
        Decide what to wear from the clothes you already own.
      </Text>

      <AppButton
        title="Get started"
        onPress={() => router.replace('/home')}
      />
    </View>
  );
}