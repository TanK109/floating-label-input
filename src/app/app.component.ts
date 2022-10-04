import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-basic',
  template: `
  <nz-input-group>
  <input type="text" nz-input placeholder="input search123 text" />
  <label>abc</label>
  <input type="text" nz-input placeholder="input search text" />
  <label>xyz</label>
</nz-input-group>
  `
})
export class NzDemoInputBasicComponent {
  value?: string;
}
