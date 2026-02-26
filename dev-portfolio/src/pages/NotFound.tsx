
import { useEffect } from "react"


export default function NotFound() {
  
  
  useEffect(() => {
  document.title = "Not Found | Shashwat Singh"
}, [])

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      404 - Page Not Found
    </div>
  )
}