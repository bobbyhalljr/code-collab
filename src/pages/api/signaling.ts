// /pages/api/signaling.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function signaling(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { signalData } = req.body;

    // Send the received signaling data to the other peer (you need to implement this logic)
    // For simplicity, log the data to the console
    console.log('Received signaling data:', signalData);

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
