> [!TIP]
> My bad, you need to opt in with the global switch

# Lit SSR + Context slot projection reproduction

```html
<slot-host>
  <template shadowrootmode="open">
    <prov-ider>
      <template shadowrootmode="open">
        <slot></slot>
      </template>
      <slot></slot>
    </prov-ider>
  </template>
  <cons-umer>
    <template shadowrootmode="open">
      <!-- insert computed context value here -->
    </template>
  </cons-umer>
</slot-host>
```

In this demo, we project a consuming element into a providing element via a slot
in a grand-parent provider. The consumer renders it's context value. Run the dev
server with `npm start`, and observe the **expected result**: `PROVIDER`.
Run the test with `npm test` and observe the **actual result**: `CONSUMER`.

