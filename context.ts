import { isServer } from 'lit';
import { ContextRoot, createContext } from '@lit/context';

const root = new ContextRoot();

if (!isServer) root.attach(document.body);

export const context = createContext('ctx');

