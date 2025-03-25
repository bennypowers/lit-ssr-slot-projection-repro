import { LitElement, html } from 'lit';
import { consume } from '@lit/context';
import { state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators/custom-element.js';

import { context } from './context.js';

@customElement('cons-umer')
export class ConsUmer extends LitElement {
  @consume({ context, subscribe: true })
  @state()
  ctx = 'CONSUMER';

  render() {
    return this.ctx;
  }
}
