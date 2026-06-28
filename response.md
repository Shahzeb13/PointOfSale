# Click-Outside to Close — Fix Explained

## The Problem

The modals (`ProfileModal`, `NotificationModal`, `CalendarModal`) were rendered **inside** `<header>` which has `position: relative; z-index: 50`. The `<main>` section has `position: relative; z-index: 0`.

In CSS, any element with `position` + `z-index` (other than `auto`) creates a **stacking context**. The modal's `fixed inset-0 z-[100]` backdrop was scoped within the `<header>`'s stacking context. The `<main>`'s stacking context sat alongside it — clicks on `<main>` content never reached the backdrop because they were in different stacking realms.

## The Fix: `createPortal`

```tsx
import { createPortal } from 'react-dom'

// Before:
return (
  <div className="fixed inset-0 z-[100]" onClick={onClose}>
    ...
  </div>
)

// After:
return createPortal(
  <div className="fixed inset-0 z-[100]" onClick={onClose}>
    ...
  </div>,
  document.body   // ← renders directly at the body level
)
```

`ReactDOM.createPortal` renders the modal's DOM tree into `document.body` instead of inside `<header>`. This completely bypasses any parent stacking context issues — the backdrop is now at the root level where `fixed` and `z-index` behave as expected.

## Files Changed

| File | Change |
|---|---|
| `ProfileModal.tsx` | Wrapped return in `createPortal(... , document.body)` |
| `NotificationModal.tsx` | Wrapped return in `createPortal(... , document.body)` |
| `CalendarModal.tsx` | Wrapped return in `createPortal(... , document.body)` |

**Result:** Click anywhere outside the modal — on the header, main content, sidebar, anywhere — it closes. Escape key also works.
