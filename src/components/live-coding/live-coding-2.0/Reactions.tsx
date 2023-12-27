import React, { useState } from 'react';

interface ReactionsProps {
  onReact: (reaction: string) => void;
}

const Reactions: React.FC<ReactionsProps> = ({ onReact }) => {
  const [reaction, setReaction] = useState('');

  const handleReact = () => {
    // Implement logic to send reactions
    // You may use a callback function (onReact) to pass the reaction to the parent component
    onReact(reaction);
    setReaction('');
  };

  return (
    <div>
      <input
        type="text"
        value={reaction}
        onChange={(e) => setReaction(e.target.value)}
        placeholder="Type your reaction"
      />
      <button onClick={handleReact}>React</button>
    </div>
  );
};

export default Reactions;
