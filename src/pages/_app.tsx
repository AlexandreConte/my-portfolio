import { SkillProvider } from '@/components/data/contexts/SkillContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SkillProvider>
      <Component {...pageProps} />
    </SkillProvider>
  )
}
