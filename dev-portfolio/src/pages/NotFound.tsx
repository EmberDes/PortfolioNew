
import { useEffect } from "react"

useEffect(() => {
  document.title = "Not Found | Shashwat Singh"
}, [])
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      404 - Page Not Found
    </div>
  )
}