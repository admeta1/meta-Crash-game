import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface EasingFunction {
  (k: number): number;
}

interface GridConfig {
  show: boolean;
  borderWidth: number;
  shadowBlur: number;
}

interface AxisConfig {
  type: 'value';
  show: boolean;
  min: number;
  max: number;
}

interface SeriesData {
  type: 'line';
  data: [number, number][];
  showSymbol: boolean;
}

interface ChartOption {
  grid: GridConfig[];
  xAxis: AxisConfig[];
  yAxis: AxisConfig[];
  series: SeriesData[];
}

const EasingChart: React.FC = () => {
  const [option, setOption] = useState<ChartOption | null>(null);

  useEffect(() => {
    const easingFuncs: Record<string, EasingFunction> = {
      quadraticIn: function (k: number) {
        return k * k;
      },
    };

    const N_POINT = 30;
    const grids: GridConfig[] = [];
    const xAxes: AxisConfig[] = [];
    const yAxes: AxisConfig[] = [];
    const series: SeriesData[] = [];
    const titles: {}[] = [];
    let count = 0;

    Object.keys(easingFuncs).forEach(function (easingName) {
      const easingFunc = easingFuncs[easingName];
      const data: [number, number][] = [];

      for (let i = 0; i <= N_POINT; i++) {
        const x = i / N_POINT;
        const y = easingFunc(x);
        data.push([x, y]);
      }

      grids.push({
        show: true,
        borderWidth: 0,
        shadowBlur: 2,
      });

      xAxes.push({
        type: 'value',
        show: true,
        min: 0,
        max: 1,
      });

      yAxes.push({
        type: 'value',
        show: true,
        min: 0,
        max: 1,
      });

      series.push({
        type: 'line',
        data: data,
        showSymbol: false,
      });

      titles.push({});
      count++;
    });

    const chartOption: ChartOption = {
      grid: grids,
      xAxis: xAxes,
      yAxis: yAxes,
      series: series,
    };

    setOption(chartOption);
  }, []);

  if (!option) {
    return null; // Render nothing until the option is loaded
  }

  // Render your chart using the 'option' variable

  return (
    <div>
      <ReactECharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default EasingChart;
