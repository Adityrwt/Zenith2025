import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc?: string;
  videoTitle?: string | React.ReactNode;
}

const Spacetravel: React.FC<VideoPlayerProps> = ({
  videoSrc = "/api/placeholder/1920/1080",
  videoTitle = "COSMIC_JOURNEY.MP4"
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    if (videoRef.current) {
      videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <motion.div 
      className="relative w-full max-w-5xl mx-auto h-[600px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="relative w-full h-full rounded-xl overflow-hidden border border-blue-400/20
                   shadow-[0_0_30px_rgba(96,165,250,0.2)] bg-black/40 backdrop-blur-sm"
        whileHover={{ boxShadow: "0 0 40px rgba(96,165,250,0.3)" }}
      >
        {/* Futuristic Accent Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
        </div>

        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          src={videoSrc}
          onClick={handleVideoClick}
          onTimeUpdate={handleTimeUpdate}
          loop
        />

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
          <div 
            className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <div 
              className="absolute h-full bg-blue-400/60 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => skipTime(-10)}
                className="p-2 text-white/80 hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                <SkipBack size={20} />
              </motion.button>
              <motion.button
                onClick={handleVideoClick}
                className="p-2 text-white/80 hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </motion.button>
              <motion.button
                onClick={() => skipTime(10)}
                className="p-2 text-white/80 hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                <SkipForward size={20} />
              </motion.button>
            </div>
            <div className="text-blue-100/70 font-light tracking-wider text-sm cursor-pointer">
              {videoTitle}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Spacetravel;