# turnpyke.js

Powerfully small custom elements.

## Example: 

```js
import { html, el } from "turnpyke";

// el.shadow renders to a Shadow Root:
el.shadow("app-counter", ({ data, props }) => {
    // Easy-breezy CSS-in-JS:
    data.$css(`
        p { color: #003366; }
        button { opacity: 0.75; }
    `);

    // Initialize element data:
    data.count = () => props.start.value("int") || 0;
    data.changes = () => [];

    // Watch data.count for changes:
    data.$watch("count", (n, o) => data.changes.push({ n, o }));
    
    // Modify Count:
    const increment = () => data.count++;
    const decrement = () => data.count--;

    return html`
        <p class="lead">Current Count: ${data.count}</p>
        <button class="btn btn-primary" @click=${increment}> + </button>
        <button class="btn btn-primary" @click=${decrement}> - </button>
        ${data.$for("changes", change => 
            html`<small>New: ${change.n} | Old: ${change.o}</small>`)}
    `;
});
```

```html
<app-counter start="0">
</app-counter>
```