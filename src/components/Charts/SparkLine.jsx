import React from 'react';
import { SparklineComponent, SparklineTooltip, Inject } from '@syncfusion/ej2-react-charts';

function SparkLine({ id, type, width, height, data, color }) {
  return (
    <SparklineComponent
      id={id}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      height={height}
      width={width}
      lineWidth={3}
      valueType="Numeric"
      fill={color}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval }'
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine;
