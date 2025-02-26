import { useState, useEffect } from 'react';

type ProjectProps = {
  title: string;
  emoji?: string;
  imgSrc?: string;
  tags?: string[];
};

function createTags(tags?: string[]) {
  return tags?.map((tag) => (
    <div key={tag} className="bg-electric-blue rounded-full px-2 py-1 text-sm">
      {tag}
    </div>
  ));
}

function EmojiPicker({ emoji }: { emoji?: string }) {
  const [currentEmoji, setCurrentEmoji] = useState("🌳");
  const emojis = ["🌳", "🍂", "❄️", "🌱"];

  useEffect(() => {
    if (emoji === "tree") {
      let timer = 0;
      const interval = setInterval(() => {
        timer = (timer + 1) % emojis.length;
        setCurrentEmoji(emojis[timer]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [emoji]);

  return <h1 className="text-lg ml-2">{emoji === "tree" ? currentEmoji : emoji}</h1>;
}

function Project({ title, emoji, imgSrc, tags }: ProjectProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-4">
        <h1 className="font-semibold text-xl">{title}</h1>
        {emoji && <EmojiPicker emoji={emoji} />}
      </div>

      <div className="w-[600px] h-[400px] overflow-hidden rounded-xl shadow-lg border-2 border-deep-teal">
        {imgSrc ? (
          <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        ) : (
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {createTags(tags)}
        </div>
      )}
    </div>
  );
}

export default Project;
