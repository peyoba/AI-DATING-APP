import React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface LineChartProps {
  data: {
    date: string;
    value: number;
  }[];
  title?: string;
  xAxisName?: string;
  yAxisName?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  title,
  xAxisName,
  yAxisName 
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const chart = echarts.init(chartRef.current);
    
    const option = {
      title: {
        text: title,
        textStyle: { color: '#ff1493' }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        name: xAxisName,
        data: data.map(item => item.date),
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: yAxisName
      },
      series: [{
        data: data.map(item => item.value),
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#ff1493'
        },
        areaStyle: {
          color: 'rgba(255, 20, 147, 0.2)'
        }
      }]
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [data, title, xAxisName, yAxisName]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}; 