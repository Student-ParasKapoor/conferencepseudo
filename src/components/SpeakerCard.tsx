import React from 'react';

interface SpeakerCardProps {
  name: string;
  role: string;
  image: string;
  topic: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, role, image, topic }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p>
        <p className="text-sm text-blue-600 font-medium">Speaking on: {topic}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
