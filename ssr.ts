import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

import { readFile, writeFile } from 'node:fs/promises';

import './slot-host.js';
import './prov-ider.js';
import './cons-umer.js';
import assert from 'node:assert';

const input = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const output = await collectResult(render(html`${unsafeHTML(input)}`));

await writeFile(new URL('./output.html', import.meta.url), output);

assert.match(output, /PROVIDER/, 'output should deliver the provider\'s value');

