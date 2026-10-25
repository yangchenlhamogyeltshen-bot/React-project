import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { useTheme } from '../../theme/useTheme';

const icon = (
  name: React.ComponentProps<typeof Ionicons>['name']
) => ({ color, size }: { color: any; size: number; focused: boolean }) => (
  <Ionicons name={name} size={size} color={color ?? '#888888'} />
);

export default function TabsLayout() {
  const c = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: c.colors.background },
        headerTitleStyle: { color: c.colors.primary },
        tabBarActiveTintColor: c.colors.secondary,
        tabBarInactiveTintColor: c.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: c.colors.surface,
          borderTopColor: c.colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: icon('home-outline'),
        }}
      />
      <Tabs.Screen
        name="closet"
        options={{
          title: 'Closet',
          tabBarIcon: icon('shirt-outline'),
        }}
      />
      <Tabs.Screen
        name="looks"
        options={{
          title: 'Looks',
          tabBarIcon: icon('albums-outline'),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: icon('stats-chart-outline'),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: icon('settings-outline'),
        }}
      />
    </Tabs>
  );
}