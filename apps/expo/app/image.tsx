import { Image, preloadImages } from '@src/components/ui';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const imageUrls = [
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3',
  'https://picsum.photos/400/400?random=4',
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    preloadImages(imageUrls);
    setIsPreloaded(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <View className='flex-1 items-center justify-center gap-4 bg-blue-100 p-5 dark:bg-blue-900'>
      <Text className='text-lg font-bold'>
        Image {currentIndex + 1} / {imageUrls.length}
      </Text>
      <Text className='text-sm text-gray-600'>
        {isPreloaded ? 'Images are preloaded' : 'Loading...'}
      </Text>

      <Image
        source={imageUrls[currentIndex]}
        className='h-96 w-96 rounded-lg'
        contentFit='cover'
        transition={500}
        placeholder={{ blurhash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.' }}
      />

      <View className='flex-row gap-4'>
        <Button title='Previous' onPress={handlePrev} />
        <Button title='Next' onPress={handleNext} />
      </View>
    </View>
  );
}
