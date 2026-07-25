import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/Router'
import IsLoading from './pages/isLoading/IsLoading'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
      <RouterProvider router={element} />
    </Suspense>



  </StrictMode>,
)
