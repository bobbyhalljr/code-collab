// videoSDK.ts
export const authToken = "YOUR GENERATED TOKEN HERE";

// API call to create meeting
export const createMeeting = async ({ token }: any) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
  