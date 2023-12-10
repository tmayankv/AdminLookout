import React from 'react';
import { ChartComponent, SeriesCollectionDirective, Inject, SeriesDirective, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

function Stacked({ width, height }) {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, i) => (
          <SeriesDirective
            key={i}
            dataSource={item.dataSource}
            xName={item.xName}
            yName={item.yName}
            name={item.name}
            type={item.type}
            background={item.background}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>

  );
}

export default Stacked;
