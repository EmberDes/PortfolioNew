import { NavLink } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"

export default function Navbar() {
  const { toggleTheme, theme } = useTheme()

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => window.location.href = '/'}
        className="text-xl font-bold">DevPortfolio</button>

        <div className="flex gap-6 text-sm font-medium items-center">
          {["/", "/about", "/projects"].map((path) => {
            const label =
              path === "/" ? "Home" :
              path === "/about" ? "About" : "Projects"

            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `transition relative ${
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          })}

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-90"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  )
}