import React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface RadarChartProps {
  data: {
    name: string;
    value: number;
  }[];
  title?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, title }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const chart = echarts.init(chartRef.current);
    
    const option = {
      title: {
        text: title,
        textStyle: {
          color: '#ff1493',
        }
      },
      radar: {
        indicator: data.map(item => ({
          name: item.name,
          max: 100
        })),
        splitArea: {
          areaStyle: {
            color: ['#ffe0eb']
          }
        }
      },
      series: [{
        type: 'radar',
        data: [{
          value: data.map(item => item.value),
          name: '评分',
          itemStyle: {
            color: '#ff1493'
          },
          areaStyle: {
            color: 'rgba(255, 20, 147, 0.2)'
          }
        }]
      }]
    };

    chart.setOption(option);

    return () => chart.dispose();
  }, [data, title]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}; 