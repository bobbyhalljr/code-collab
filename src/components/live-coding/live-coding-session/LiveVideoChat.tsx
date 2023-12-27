// VideoChat.tsx
import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';

const LiveVideoChat: React.FC = () => {
  const [peer, setPeer] = useState<SimplePeer.Instance | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Function to initialize the video chat
    const initializeVideoChat = async () => {
      // Create a new SimplePeer instance
      const newPeer = new SimplePeer({ initiator: true, trickle: false });

      // Set the peer in the state
      setPeer(newPeer);

      // Get the user's media stream
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

      // Display the user's own video
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Signal event for the SimplePeer instance
      newPeer.on('signal', (data) => {
        // Send the signaling data to the other peer (via your signaling server)
        console.log('Signaling data to send to the other peer:', data);
      });

      // Stream event for the SimplePeer instance
      newPeer.on('stream', (remoteStream) => {
        // Display the remote user's video
        if (videoRef.current) {
          videoRef.current.srcObject = remoteStream;
        }
      });

      // Add the user's media stream to the SimplePeer instance
      newPeer.addStream(stream);
    };

    initializeVideoChat();

    // Cleanup function
    return () => {
      if (peer) {
        // Destroy the SimplePeer instance when the component unmounts
        peer.destroy();
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline />
    </div>
  );
};

export default LiveVideoChat;
