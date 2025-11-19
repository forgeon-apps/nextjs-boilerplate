// src/pages/_app.tsx
import type { AppProps } from 'next/app'

// Global CSS (Tailwind entry + prism theme)
import '../styles/main.css'
import '../styles/prism-a11y-dark.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
