import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import LoginPopup from '@/components/ui/LoginPopup';
import SplashScreenComponent from '@/components/ui/SplashScreen';

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // Hide the splash screen after a delay
      setTimeout(() => {
        SplashScreen.hideAsync();
        setShowSplash(false);
        // Show login popup after splash screen
        setTimeout(() => {
          setShowLogin(true);
        }, 500);
      }, 2000);
    }
  }, [loaded]);

  if (!loaded || showSplash) {
    return <SplashScreenComponent />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <LoginPopup visible={showLogin} onClose={() => setShowLogin(false)} />
    </ThemeProvider>
  );
}
