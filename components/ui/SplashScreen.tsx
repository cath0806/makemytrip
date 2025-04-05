import { Image, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  withSequence,
  withDelay,
  useSharedValue 
} from 'react-native-reanimated';

export default function SplashScreen() {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withSequence(
      withSpring(1.2),
      withSpring(1)
    );
    opacity.value = withDelay(
      500,
      withSpring(1)
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={require('@/assets/images/mmt-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0089FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
}); 