"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import Dashboard from "@/components/dashboard"
import NewPenaltyEntry from "@/components/new-penalty-entry"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"login" | "dashboard" | "new-entry">("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage("dashboard")
  }

  const handleNavigation = (page: "dashboard" | "new-entry") => {
    setCurrentPage(page)
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigation} />}
      {currentPage === "new-entry" && <NewPenaltyEntry onNavigate={handleNavigation} />}
    </div>
  )
}
