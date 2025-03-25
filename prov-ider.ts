import { LitElement, html } from 'lit';
import { provide } from '@lit/context';
import { state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { context } from './context.js';

@customElement('prov-ider')
export class ProvIder extends LitElement {
  @provide({ context })
  @state()
  ctx = 'PROVIDER';

  render() {
    return html`
      <slot></slot>
    `;
  }
}
