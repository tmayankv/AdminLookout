import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, AreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import React from 'react';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

function Area() {
  const { ThemeSet } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Charts" title="Area Charts" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={ThemeSet === 'Dark' ? '#33373E' : 'white'}
      >
        <Inject services={[Legend, DateTime, AreaSeries, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Area;
