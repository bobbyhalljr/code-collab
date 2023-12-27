// VideoChat.tsx
import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';

const VideoChat: React.FC = () => {
  const [peer, setPeer] = useState<SimplePeer.Instance | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initializeVideoChat = async () => {
      const newPeer = new SimplePeer({ initiator: true, trickle: false });
      setPeer(newPeer);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      newPeer.on('signal', (data) => {
        // Send signaling data to the server
        fetch('/api/signaling', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ signalData: data }),
        });
      });

      newPeer.on('stream', (remoteStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = remoteStream;
        }
      });

      newPeer.addStream(stream);
    };

    initializeVideoChat();

    return () => {
      if (peer) {
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

export default VideoChat;
