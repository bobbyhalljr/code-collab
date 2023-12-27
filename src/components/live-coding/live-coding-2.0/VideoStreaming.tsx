import React, { useEffect, useRef } from 'react';
import SimplePeer from 'simple-peer';

interface VideoStreamingProps {
  isHost: boolean;
  roomId: string;
}

const VideoStreaming: React.FC<VideoStreamingProps> = ({ isHost, roomId }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  let peer: SimplePeer.Instance | undefined;

  useEffect(() => {
    const initPeer = () => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          if (isHost) {
            // Host initiates the connection
            peer = new SimplePeer({ initiator: true, stream: stream });
          } else {
            // Guest connects to the host
            peer = new SimplePeer({ initiator: false, stream: stream });
          }

          peer.on('signal', (data) => {
            // Send signal data to the server
            // You'll need a server for signaling, e.g., using socket.io
            // This signal data should be sent to the other participant
          });

          peer.on('stream', (remoteStream) => {
            // Handle the remote stream
            // For example, append it to a video element
            // You might want to create a new video element for each participant
            if (videoRef.current) {
              videoRef.current.srcObject = remoteStream;
            }
          });

          // Handle other events like 'connect', 'data', 'close', 'error', etc.
        })
        .catch((error) => console.error('Error accessing media devices:', error));
    };

    initPeer();

    // Cleanup function
    return () => {
      if (peer) {
        peer.destroy();
      }
    };
  }, [isHost]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted={isHost} />
    </div>
  );
};

export default VideoStreaming;
