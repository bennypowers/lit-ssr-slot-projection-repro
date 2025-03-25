import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { provide } from '@lit/context';
import { context } from './context.js';

@customElement('slot-host')
export class SlotHost extends LitElement {
  @provide({ context })
  @state()
  ctx = 'SLOTHOST';

  render() {
    return html`
      <prov-ider>
        <slot></slot>
      </prov-ider>
    `;
  }
}
