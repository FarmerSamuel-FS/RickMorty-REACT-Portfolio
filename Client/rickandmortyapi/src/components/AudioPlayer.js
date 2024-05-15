import { useEffect } from 'react';
import { Howl } from 'howler';
import musicSrc from '../assets/Music.mp3';

const AudioPlayer = () => {
  useEffect(() => {
    const sound = new Howl({
      src: [musicSrc],
      loop: true, // Loop the audio
    });

    // Start playing the audio when the component mounts
    sound.play();

    // Cleanup
    return () => {
      sound.stop();
      sound.unload();
    };
  }, []);

  return null; // Audio player doesn't need to render anything
};

export default AudioPlayer;