import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanGrid, kanbanData } from '../data/dummy';
import { Header } from '../components';

function Kanban() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Apps" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary',
          headerField: 'Id',
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, i) => (
            <ColumnDirective
              key={i}
              headerText={item.headerText}
              keyField={item.keyField}
              allowToggle={item.allowToggle}
              isExpanded={item.isExpanded}
            />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}

export default Kanban;
