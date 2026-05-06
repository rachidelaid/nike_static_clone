# Design System: Premium Clothing Website

**Project ID:** 4149371106179898909

## 1. Visual Theme & Atmosphere

APEX FORM is a cinematic, editorial, high-performance athleticwear system with the polish of luxury retail and the discipline of technical sportswear. The atmosphere is premium, architectural, kinetic, and product-first: oversized type creates confidence, warm neutral space creates restraint, and sharp black-versus-volt contrast gives each commerce moment a launch-campaign intensity.

The interface should feel spacious rather than decorative. Use large product photography, cropped model imagery, fabric-detail closeups, and dark immersive story bands to make apparel feel engineered and desirable. Avoid generic fashion softness; this brand is precise, urban, performance-oriented, and quietly aggressive.

Preserve an original brand identity. Do not use Nike logos, swooshes, trademarked slogans, or recognizable protected marks. The visual language should suggest premium athletic innovation without copying an existing brand.

## 2. Color Palette & Roles

- **Primary Ink (#111111):** The dominant brand color for headlines, navigation, primary buttons, dark story bands, footer backgrounds, product labels, and high-contrast commerce UI. It creates the system's premium, architectural authority.
- **True Black Core (#000000):** Used by Stitch as the technical primary token for deepest fills, iconography, and maximum-contrast surfaces when the design needs a sharper black than Primary Ink.
- **Warm Editorial Canvas (#F4F1EA):** The preferred page atmosphere color for elevated ecommerce backgrounds and campaign sections. It keeps the site warm, premium, and less clinical than pure white.
- **Soft Surface Canvas (#FCF9F2):** The active page background and surface token. Use it for broad content fields, catalog backgrounds, and calm negative space.
- **Cloud Product Surface (#FFFFFF):** Reserved for product cards, commerce panels, floating chips, and form fields that need a clean retail surface above the warm canvas.
- **Action Volt (#D7FF38):** The high-energy accent for limited-drop tags, selected filters, cart count badges, hover emphasis, newsletter CTAs, and secondary commerce actions. Use sparingly so it feels exclusive and electric.
- **Volt System Accent (#C8EF25):** The Stitch secondary-container token, used as the closest generated system color for Action Volt in chips, badges, selected states, and small CTA fills.
- **Technical Grey (#B6BEC8):** The apparel and metadata grey for fabric descriptions, color swatches, inactive commerce states, material labels, and technical product storytelling.
- **Carbon Text (#1C1C18):** The main readable text color on light surfaces, softer and warmer than absolute black for body copy and labels.
- **Graphite Secondary Text (#444748):** Used for supporting copy, breadcrumbs, product descriptions, muted nav states, and metadata where hierarchy should recede.
- **Precision Outline (#747878):** Used for filter controls, form strokes, size selectors, dividers, icon-muted states, and technical rails.
- **Soft Divider Stone (#C4C7C7):** Used for low-emphasis borders, sticky bars, card separators, and layout grid boundaries.
- **Raised Warm Surface (#F1EEE7):** Used for card interiors, image wells, filter panels, and subtle blocks that should sit one step above the page background.
- **Deep Performance Night (#141C24):** Used for immersive editorial modules and technical storytelling panels when the page needs a darker, more performance-driven mood.
- **Error Signal Red (#BA1A1A):** Reserved for validation, stock errors, unavailable sizes, and destructive form feedback only.

## 3. Typography Rules

Headlines use **Space Grotesk** with strong weight, tight tracking, and compressed line-height. Use large, uppercase, architectural titles for hero statements, collection names, product names, and editorial story bands. The brand should feel engineered and assertive, so headline rhythm can be oversized and cropped as long as the commerce path remains clear.

Body copy uses **Inter** with restrained weights for product descriptions, material notes, shipping details, filters, prices, and forms. Keep body text crisp, practical, and readable. Supporting descriptions should use Graphite Secondary Text (#444748) or Precision Outline (#747878) to maintain hierarchy.

Labels use **Inter** or Space Grotesk in uppercase with wide tracking. Apply this treatment to navigation, filter headings, badges, CTA text, breadcrumbs, product metadata, and technical specs. Labels should feel like performance instrumentation rather than decorative captions.

Use heavy visual contrast in type scale: extra-large display headlines, medium product-card titles, compact uppercase controls, and small supporting metadata. Pricing should remain clean, medium-weight, and immediately legible.

## 4. Component Stylings

- **Buttons:** Primary CTAs are Primary Ink (#111111) or True Black Core (#000000) fills with white text, subtly rounded 8px corners on landing pages and tighter 2px to 4px corners in catalog/product-grid contexts. Secondary CTAs use transparent or Cloud Product Surface (#FFFFFF) backgrounds with black strokes. Action Volt (#D7FF38) is reserved for high-value secondary actions, selected filters, badges, and campaign prompts. Button labels are uppercase, bold, and widely tracked.
- **Cards/Containers:** Product cards are clean, image-dominant, and low ornament. Use Raised Warm Surface (#F1EEE7) or Cloud Product Surface (#FFFFFF) for card grounds, large 3:4 image wells, minimal metadata, small circular color swatches, and quick-add actions that reveal on hover. Corners are subtly rounded rather than pill-shaped, preserving a technical retail feel.
- **Inputs/Forms:** Inputs are quiet and functional, usually Cloud Product Surface (#FFFFFF) or muted dark footer fields with thin Precision Outline (#747878) or Soft Divider Stone (#C4C7C7) strokes. Focus states should use Primary Ink (#111111) or Action Volt (#D7FF38), never bright generic blues. Checkboxes and size selectors should feel compact, squared, and precise.
- **Navigation:** Use a sticky translucent header with warm surface blur, a centered APEX FORM wordmark, left category navigation, and right commerce utilities. Keep the header slim, calm, and technical with a thin divider. Active nav states may use Volt System Accent (#C8EF25) or an understated underline.
- **Hero Sections:** Build split or full-bleed editorial compositions with oversized Space Grotesk headlines, strong product or model imagery, concise body copy, and one or two clear CTAs. Hero imagery should be cinematic, high-contrast, and focused on fabric texture, motion, and athletic silhouette.
- **Catalog Controls:** Product listing pages use sticky utility bars, compact uppercase filter chips, left filter rails, and precise grid alignment. Selected states are black filled or volt accented; inactive states use thin grey borders and muted text.
- **Product Detail Panels:** PDP commerce panels should be sticky, clean, and conversion-focused. Pair an editorial image gallery with a structured purchase panel containing breadcrumb, product title, rating, price, color swatches, size selector, fit guide, Add to Bag, Reserve In Store, and shipping or guarantee microcopy.
- **Badges/Tags:** Badges are compact rectangular labels with uppercase wide tracking. Use Action Volt (#D7FF38) for limited drops and campaign moments, black for newness or core product status, and grey for technical metadata.
- **Footer:** Footers are premium black with white or muted grey text, newsletter signup, category links, support links, and restrained legal copy. Links can hover to Action Volt (#D7FF38) for subtle energy.

## 5. Layout Principles

Design desktop-first on a disciplined 12-column grid with generous side margins and a maximum content width around 1440px. Use editorial whitespace as a luxury signal: let product imagery breathe, keep text blocks concise, and avoid dense retail clutter unless it is a purposeful filter or commerce panel.

Commerce pages should balance precision and drama. Product listing pages use a left filter rail and a 3-column product grid, interrupted by dark campaign modules to maintain editorial rhythm. Product detail pages use a two-column structure with an expansive image gallery on the left and a sticky purchase panel on the right.

Use strong vertical sequencing: announcement or header, hero, controls, product or story content, related products, footer. Sticky elements are encouraged for navigation, catalog controls, and PDP purchase actions, but they should stay translucent or quiet so they do not overpower imagery.

Depth is restrained and premium. Prefer flat surfaces, thin borders, soft blur, and whisper-soft shadows over heavy drop shadows. Floating commerce chips may use a slightly stronger shadow and backdrop blur to signal elevation, but most hierarchy should come from scale, contrast, spacing, and image composition.

Responsive behavior should stack naturally: navigation collapses to mobile controls, product grids reduce columns, filter rails become drawer-like controls, PDP purchase panels move below the gallery, and CTAs become large tap-friendly controls. Maintain the same cinematic type, warm canvas, black ink, and volt accent language across breakpoints.
