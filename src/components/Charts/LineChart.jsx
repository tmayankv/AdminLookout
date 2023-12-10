import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Tooltip, Inject, LineSeries,  DateTime, Legend } from '@syncfusion/ej2-react-charts';
import React from 'react';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

function LineChart() {
  const { ThemeSet } = useStateContext()
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={ThemeSet === 'Dark' ? '#33373E' : 'white'}
    >
      <Inject services={[Legend, DateTime, LineSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>

  );
}

export default LineChart;
