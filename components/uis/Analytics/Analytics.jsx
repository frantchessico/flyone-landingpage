



"use client"

import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const currentDate = "January 13, 2025"

const salesData = [
  { date: "Dec 31", value: 250 },
  { date: "Jan 3", value: 600 },
  { date: "Jan 6", value: 180 },
  { date: "Jan 8", value: 650 },
  { date: "Jan 12", value: 200 },
  { date: "Jan 15", value: 50 },
  { date: "Jan 19", value: 350 },
]

const clicksData = [
  { date: "Dec 31", value: 3000 },
  { date: "Jan 3", value: 4500 },
  { date: "Jan 6", value: 2800 },
  { date: "Jan 8", value: 5000 },
  { date: "Jan 12", value: 3500 },
  { date: "Jan 15", value: 2000 },
  { date: "Jan 19", value: 4000 },
]

const leadsData = [
  { date: "Dec 31", value: 1500 },
  { date: "Jan 3", value: 2200 },
  { date: "Jan 6", value: 1800 },
  { date: "Jan 8", value: 2400 },
  { date: "Jan 12", value: 1900 },
  { date: "Jan 15", value: 1600 },
  { date: "Jan 19", value: 2100 },
]

const ChartComponent = ({ data, color }) => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="date" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke={color} 
          fillOpacity={1} 
          fill={`url(#color${color})`} 
        />
        <ReferenceLine x="Jan 13" stroke="#ffffff" strokeDasharray="3 3" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

export default function Analytics() {
  return (
    <section className="w-full bg-[#030303] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="clicks" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 bg-transparent h-auto">
            <TabsTrigger 
              value="clicks" 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 data-[state=active]:bg-white/10 data-[state=active]:text-white h-auto flex flex-col items-start text-white border border-white/10"
            >
              <span className="text-sm opacity-70">Cliques</span>
              <span className="text-3xl font-semibold mt-1">5,030</span>
            </TabsTrigger>
            <TabsTrigger 
              value="leads"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 data-[state=active]:bg-white/10 data-[state=active]:text-white h-auto flex flex-col items-start text-white border border-white/10"
            >
              <span className="text-sm opacity-70">Leads</span>
              <span className="text-3xl font-semibold mt-1">2,215</span>
            </TabsTrigger>
            <TabsTrigger 
              value="sales"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 data-[state=active]:bg-white/10 data-[state=active]:text-white h-auto flex flex-col items-start text-white border border-white/10"
            >
              <span className="text-sm opacity-70">Performance</span>
              <span className="text-3xl font-semibold mt-1">40%</span>
            </TabsTrigger>
          </TabsList>
          
          <Card className="mt-8 bg-white/5 backdrop-blur-sm border-white/10">
            <TabsContent value="clicks" className="p-6">
              <ChartComponent data={clicksData} color="#4ade80" />
            </TabsContent>
            <TabsContent value="leads" className="p-6">
              <ChartComponent data={leadsData} color="#4ade80" />
            </TabsContent>
            <TabsContent value="sales" className="p-6">
              <ChartComponent data={salesData} color="#4ade80" />
            </TabsContent>
          </Card>
        </Tabs>
      </div>
    </section>
  )
}



