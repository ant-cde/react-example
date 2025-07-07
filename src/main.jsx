import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './pico.classless.css'
import { CommsProvider } from '@antcde/react-utils'
import { App } from './App.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CommsProvider>
        <App />
      </CommsProvider>
    </QueryClientProvider>
  </StrictMode>
)
