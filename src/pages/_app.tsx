import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MeetingProvider } from '@videosdk.live/react-sdk';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
