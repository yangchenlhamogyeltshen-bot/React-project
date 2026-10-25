import { useState } from 'react';
import { Text, View } from 'react-native';

import AppButton from '@/components/AppButton';
import { useTheme } from '@/theme/useTheme';

export default function Home() {
  const c = useTheme();
  const [taps, setTaps] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.background,
        padding: 24,
        gap: 16,
      }}
    >
      <Text style={{ color: c.textPrimary, fontSize: 18 }}>
        Taps: {taps}
      </Text>

      <AppButton
        title="Tap me"
        onPress={() => setTaps(taps + 1)}
      />
    </View>
  );
}