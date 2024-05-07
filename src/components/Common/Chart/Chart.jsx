import React, { useRef, useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Chart = ({ data, ...props }) => {
  const chartContainerRef = useRef(null)
  const [chartWidth, setChartWidth] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const formatYAxis = (tick) => {
    return `${tick / 1000}K`
  }

  return (
    <div
      ref={chartContainerRef}
      style={{ width: '100%', height: 300 }}
      {...props}
    >
      <BarChart
        width={chartWidth}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 500000]}
          ticks={[100000, 200000, 300000, 400000, 500000]}
          tickFormatter={formatYAxis}
        />
        <Tooltip />
        <Legend
          layout="horizontal"
          align="right"
          verticalAlign="bottom"
          iconType="circle"
        />
        <Bar
          dataKey="Growth"
          stackId="a"
          fill="#C704FE"
          label={{ formatter: formatYAxis, position: 'insideStart' }}
        />
        <Bar
          dataKey="AI Prediction"
          stackId="a"
          fill="#D1FD0A"
          label={{ formatter: formatYAxis, position: 'inside' }}
        />
      </BarChart>
    </div>
  )
}

export default Chart
