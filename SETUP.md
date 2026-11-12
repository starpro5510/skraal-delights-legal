# Skraal Delights website

Static website: deploy the contents of `dist/` to your static host (Render, GitHub Pages, or Sites). No npm install or build is needed. Keep the backend hosted separately.

## Configure links
Edit `dist/config.js`:
- `customerWebsite` is connected to the supplied customer website.
- `apiBase` uses the API origin found in the supplied store app.
- `storeWebsite`: add the future store browser portal URL.
- `apps.customer`, `apps.driver`, `apps.store`: add `google` and `huawei` HTTPS listing URLs (six links).
Blank app links deliberately show “Link coming soon”; adding the URL activates the image hyperlink automatically.
The driver portal is Android only. The store browser application itself is deferred as requested.

## Required backend hosting setting
The existing backend supports all profile and support endpoints used here. Add the new website origin to the backend's CORS_ORIGINS environment variable, preserving existing origins:
https://skraal-delights-hub.devotedazure2.chatgpt.site
Also add your final custom domain or Render website origin when used. Redeploy the backend after changing this setting. Do not add trailing slashes to allowed origins. Do not copy the backend .env into this public website.

## Customer account integration
Existing customer email/password login; view/edit first name, surname and phone; list/create support tickets; view messages and send replies. Sign-up/password recovery links lead to the existing customer website. Driver/store accounts are directed to their own apps.
Routes: POST /auth/login; GET/PUT /customer/profile; GET/POST /customer/support/tickets; GET/POST /customer/support/tickets/:id/messages. All paths are relative to apiBase. Bearer tokens live in memory and are cleared on sign-out/reload. Refresh conversations manually; no constant polling.
No demo messages or fake successful submissions. Network/server errors are visible. The support form creates actual backend conversations only after user submission.

## Policies
All eight supplied legal documents are preserved under `dist/policies/` with an added website navigation link. Original root policy URLs redirect to their equivalent pages. Policy wording has not been legally reviewed or rewritten.

## Assets
Original supplied brand assets are reused. Hero photograph: https://images.unsplash.com/photo-1568901346375-23c9450c58cd (illustrative food, not an advertised menu item). App badges are editable SVG placeholders; replace with approved platform badge assets before final store launch. Fonts use Google Fonts with local Arial fallbacks.

## Validation
JavaScript syntax check passed. All local HTML file/image links checked. Desktop and 390px mobile layout inspected in browser; download tabs, account dialog and mobile navigation checked. API reachability confirmed with an unauthenticated 401 response. End-to-end authenticated profile/support operations were not tested because no customer test account was supplied. The new origin must be permitted by backend CORS before browser authentication works.
