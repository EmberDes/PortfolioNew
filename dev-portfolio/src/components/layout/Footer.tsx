export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Shashwat Singh</span>
        <span>Built with React + TypeScript + Tailwind</span>
      </div>
    </footer>
  )
}