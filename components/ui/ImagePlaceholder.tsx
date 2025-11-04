'use client';

interface ImagePlaceholderProps {
  category: string;
  size?: 'normal' | 'large';
}

const categoryMap: Record<string, { icon: string; gradient: string }> = {
  Adventure: {
    icon: '⛰️',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
  },
  Travel: {
    icon: '✈️',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
  },
  Nature: {
    icon: '🌅',
    gradient: 'bg-gradient-to-br from-green-500/20 to-teal-500/20',
  },
  Hobbies: {
    icon: '📸',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
};

export default function ImagePlaceholder({ category, size = 'normal' }: ImagePlaceholderProps) {
  const config = categoryMap[category] || categoryMap.Hobbies;
  const iconSize = size === 'large' ? 'text-8xl' : 'text-6xl';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${config.gradient}`}>
      <div className={`${iconSize} mb-4 opacity-30`}>{config.icon}</div>
      <div className="text-white/80 font-medium">{category}</div>
      <div className="text-white/50 text-sm mt-2">Add your image here</div>
    </div>
  );
}