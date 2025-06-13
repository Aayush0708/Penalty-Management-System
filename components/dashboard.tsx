"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Plus } from "lucide-react"

interface DashboardProps {
  onNavigate: (page: "dashboard" | "new-entry") => void
}

const penaltyData = [
  {
    date: "2025-06-12",
    rank: "Havildar",
    name: "Rajesh Kumar",
    event: "Republic Day Parade",
    penalty: "—",
    rewardedBy: "CO 12 Raj Rifles",
    approvedBy: "Commandant 9 Inf Div",
    status: "Approved",
  },
  {
    date: "2025-05-01",
    rank: "Sepoy",
    name: "Aman Singh",
    event: "Unauthorized absence",
    penalty: "5 days pay cut",
    rewardedBy: "—",
    approvedBy: "Adjutant",
    status: "Approved",
  },
  {
    date: "2025-04-15",
    rank: "Naik",
    name: "Sandeep Thakur",
    event: "Best Shooter Competition",
    penalty: "—",
    rewardedBy: "Subedar Major",
    approvedBy: "Commanding Officer",
    status: "Approved",
  },
  {
    date: "2025-03-20",
    rank: "Lieutenant",
    name: "Arjun Rana",
    event: "Tactical Exercise Bravo",
    penalty: "—",
    rewardedBy: "Brigade Commander",
    approvedBy: "GOC-in-C, Northern Cmd",
    status: "Pending",
  },
  {
    date: "2025-03-10",
    rank: "Sepoy",
    name: "Ravi Yadav",
    event: "Negligence of Duty",
    penalty: "Extra guard duty (3 days)",
    rewardedBy: "—",
    approvedBy: "Platoon Commander",
    status: "Approved",
  },
]

export default function Dashboard({ onNavigate }: DashboardProps) {
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
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
            >
              Dashboard
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">New Entry</h2>
            <Button onClick={() => onNavigate("new-entry")} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Entry
            </Button>
          </div>

          {/* Search and Filter Bar */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search by name, rank, or event..." className="pl-10 h-10 rounded-lg" />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48 h-10 rounded-lg">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by Rank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranks</SelectItem>
                    <SelectItem value="sepoy">Sepoy</SelectItem>
                    <SelectItem value="naik">Naik</SelectItem>
                    <SelectItem value="havildar">Havildar</SelectItem>
                    <SelectItem value="lieutenant">Lieutenant</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-48 h-10 rounded-lg">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-10 rounded-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Table */}
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event/Occasion
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Penalty Awarded
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rewarded By
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Approved By
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {penaltyData.map((entry, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.rank}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.event}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.penalty}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.rewardedBy}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.approvedBy}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            variant={entry.status === "Approved" ? "default" : "secondary"}
                            className={
                              entry.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {entry.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
