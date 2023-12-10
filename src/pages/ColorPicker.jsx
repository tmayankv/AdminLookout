import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

function ColorPicker() {
  const colorChange = (val) => {
    document.getElementById('preview').style.backgroundColor = val.currentValue.hex;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Apps" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gapgap-20 flex-wrap">
          <div>
            <p className="mt-10 m-5 text-xl font-semibold">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              modeSwitcher={false}
              mode="Palette"
              inline
              change={colorChange}
              showButtons={false}
            />
          </div>
          <div>
            <p className="mt-10 m-5 text-xl font-semibold">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              change={colorChange}
              showButtons={false}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
