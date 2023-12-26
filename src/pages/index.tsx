import Image from 'next/image'
import { Inter } from 'next/font/google'
import RegistrationForm from '@/components/auth/RegisterationForm'
import AppLayout from '@/components/layout/AppLayout'

export default function Home() {
  return (
    <AppLayout>
    <div className="text-center h-screen">
      <h1 className="text-4xl font-semibold">Welcome to Your App</h1>
      <p className="text-gray-600 mt-4">Explore and enjoy our amazing features!</p>
    </div>
  </AppLayout>
  )
}
