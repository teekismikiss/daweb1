# PWA Calculator Implementation Plan

Create a mobile-first Progressive Web App (PWA) calculator.

## User Review Required

> [!IMPORTANT]
> - The calculator will switch between a basic mode (Portrait) and a scientific mode (Landscape).
> - The theme will change automatically: Pink/Blue in Portrait, Dark Mode in Landscape.
> - The app will be a PWA, meaning it can be installed on mobile devices.

## Proposed Changes

### [Core Files]

#### [NEW] [index.html](file:///C:/Users/desarrollo/Desktop/ag/index.html)
- Main structure with two display areas (standard and scientific buttons).
- Meta tags for PWA and manifest link.

#### [NEW] [style.css](file:///C:/Users/desarrollo/Desktop/ag/style.css)
- Base styling with CSS variables for themes.
- Media queries for `@media (orientation: landscape)` to switch to dark mode and show scientific buttons.
- Modern, premium aesthetics with glassmorphism and smooth transitions.

#### [NEW] [script.js](file:///C:/Users/desarrollo/Desktop/ag/script.js)
- Calculation logic supporting both basic and scientific operations.
- Service worker registration.
- Display updates.

#### [NEW] [manifest.json](file:///C:/Users/desarrollo/Desktop/ag/manifest.json)
- App configuration for PWA.
- Icon definitions.

#### [NEW] [sw.js](file:///C:/Users/desarrollo/Desktop/ag/sw.js)
- Basic service worker for offline support (caching).

### [Assets]

#### [NEW] [icon-192.png](file:///C:/Users/desarrollo/Desktop/ag/icon-192.png)
#### [NEW] [icon-512.png](file:///C:/Users/desarrollo/Desktop/ag/icon-512.png)
- App icons generated with `generate_image`.

## Open Questions

- Should the calculation history be preserved between orientation changes? (Default: Yes)
- Any specific scientific functions preferred besides the standard ones?

## Verification Plan

### Automated Tests
- N/A (Manual visual and functional check)

### Manual Verification
- Open in browser and resize to landscape to check design swap.
- Test all basic and scientific operations.
- Check PWA installability in Chrome DevTools.
