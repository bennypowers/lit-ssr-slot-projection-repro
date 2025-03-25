import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  plugins: [esbuildPlugin({
    ts: true,
    tsconfig: 'tsconfig.json',
  })],
};

