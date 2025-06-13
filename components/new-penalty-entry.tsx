"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, Bell } from "lucide-react"

interface NewPenaltyEntryProps {
  onNavigate: (page: "dashboard" | "new-entry") => void
}

export default function NewPenaltyEntry({ onNavigate }: NewPenaltyEntryProps) {
  const [formData, setFormData] = useState({
    date: "",
    rank: "",
    name: "",
    event: "",
    penalty: "",
    rewardedBy: "",
    approvedBy: "",
    status: "pending",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    onNavigate("dashboard")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900">Penalty Management System</h1>
        </div>
        <nav className="mt-6">
          <div className="px-3">
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Dashboard
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => onNavigate("dashboard")}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-2xl font-semibold text-gray-900">New Penalty/Reward Entry</h2>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rank" className="text-sm font-medium text-gray-700">
                      Rank
                    </Label>
                    <Select value={formData.rank} onValueChange={(value) => handleInputChange("rank", value)}>
                      <SelectTrigger className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select rank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sepoy">Sepoy</SelectItem>
                        <SelectItem value="naik">Naik</SelectItem>
                        <SelectItem value="havildar">Havildar</SelectItem>
                        <SelectItem value="subedar">Subedar</SelectItem>
                        <SelectItem value="lieutenant">Lieutenant</SelectItem>
                        <SelectItem value="captain">Captain</SelectItem>
                        <SelectItem value="major">Major</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                      Status
                    </Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                      <SelectTrigger className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event" className="text-sm font-medium text-gray-700">
                    Event/Occasion
                  </Label>
                  <Input
                    id="event"
                    type="text"
                    value={formData.event}
                    onChange={(e) => handleInputChange("event", e.target.value)}
                    className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Describe the event or occasion"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="penalty" className="text-sm font-medium text-gray-700">
                    Penalty Awarded (Optional)
                  </Label>
                  <Textarea
                    id="penalty"
                    value={formData.penalty}
                    onChange={(e) => handleInputChange("penalty", e.target.value)}
                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter penalty details if applicable"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="rewardedBy" className="text-sm font-medium text-gray-700">
                      Rewarded By
                    </Label>
                    <Input
                      id="rewardedBy"
                      type="text"
                      value={formData.rewardedBy}
                      onChange={(e) => handleInputChange("rewardedBy", e.target.value)}
                      className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Officer giving recognition"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="approvedBy" className="text-sm font-medium text-gray-700">
                      Approved By
                    </Label>
                    <Input
                      id="approvedBy"
                      type="text"
                      value={formData.approvedBy}
                      onChange={(e) => handleInputChange("approvedBy", e.target.value)}
                      className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Final approving authority"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Entry
                  </Button>
                  <Button type="button" variant="outline" className="h-11 rounded-lg border-gray-300 hover:bg-gray-50">
                    <Bell className="w-4 h-4 mr-2" />
                    Send Notification
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
