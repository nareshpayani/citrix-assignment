import React from 'react';
import MaterialTable from 'material-table';


export default function Table(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Category', field: 'category' },
      { title: 'High', field: 'high', type: 'numeric' },
      { title: 'Medium', field: 'medium', type: 'numeric' },
      { title: 'Low', field: 'low', type: 'numeric' },
      { title: 'Impact Percent', field: 'impactPercent', type: 'numeric' },
      { title: 'Value', field: 'value', type: 'numeric' },
    ],
    data: props.data,
  });

  return (
    <MaterialTable
      title="Category Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
      
      }}
    />
  );
}
