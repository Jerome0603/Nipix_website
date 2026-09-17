# Nipix Technology Color System Update

## ✅ Updated Color Palette

### Primary Colors
- **Primary Blue**: `#004AAD` (previously `#0A66C2`)
  - Usage: Main buttons, active states, menu highlights, icons, CTA areas
  
- **Primary Blue Dark**: `#002D6E` (previously `#003C78`)
  - Usage: Headings, titles, bold labels, strong icon strokes
  
- **Primary Blue Light**: `#E6F0FF` (previously `#E8F3FF`)
  - Usage: Hover backgrounds, highlighted cards, dropdown hover states

### Accent Colors
- **Accent Blue**: `#0066FF`
  - Usage: Secondary buttons, links, badges, emphasized interactive elements
  
- **Accent Blue Light**: `#78A9FF`
  - Usage: Subtle borders, outlines, shadows, decorative strokes

### Neutral Colors
- **White**: `#FFFFFF` - Main background and card base
- **Light Gray**: `#F5F7FA` - Section dividers, card backgrounds, subtle panels
- **Dark Text**: `#1A1A1A` - All body text

### Glass Effects
- **Glass Background**: `rgba(255, 255, 255, 0.35)` with 20-30px blur
- **Glass Border**: `rgba(255, 255, 255, 0.6)`

---

## 🎯 Components Updated

### ✅ Core Layout Components
- [x] **Header** (`/components/Header.tsx`)
  - Logo gradient: from-[#004AAD] to-[#002D6E]
  - Logo text: text-[#002D6E]
  - Active menu: bg-[#004AAD]
  - Hover menu: hover:bg-[#E6F0FF] hover:text-[#004AAD]
  - CTA button: bg-[#004AAD]
  - Mobile menu button: text-[#002D6E]

- [x] **Footer** (`/components/Footer.tsx`)
  - Background gradient: from-[#002D6E] to-[#004AAD]
  - Logo: text-[#004AAD]
  - Social icons hover: group-hover:text-[#004AAD]
  - Subscribe button: bg-white text-[#004AAD]

### 📋 Remaining Files to Update

The following files contain color references that need systematic replacement:

#### Component Library Files
- `/components/ComponentLibrary.tsx` (65+ occurrences)
- `/components/SharedComponents.tsx` (45+ occurrences)

#### Page Files (All pages need color updates)
- `/pages/HomePage.tsx`
- `/pages/AboutPage.tsx`
- `/pages/CoursesPage.tsx`
- `/pages/CourseDetailPage.tsx`
- `/pages/ProgramsPage.tsx`
- `/pages/ProgramDetailPage.tsx`
- `/pages/EventsPage.tsx`
- `/pages/EventDetailPage.tsx`
- `/pages/BlogsPage.tsx`
- `/pages/BlogReadPage.tsx`
- `/pages/ContactPage.tsx`
- `/pages/InternshipsPage.tsx`
- `/pages/InternshipDetailPage.tsx`
- `/pages/LoginPage.tsx`
- `/pages/SignupPage.tsx`
- `/pages/ThankYouPage.tsx`
- `/pages/NotFoundPage.tsx`
- `/pages/TermsPage.tsx`
- `/pages/PrivacyPage.tsx`
- `/pages/ComponentShowcasePage.tsx`

---

## 🛠️ Color Replacement Script

### Automatic Replacement Using Node.js

A color replacement script has been created at `/scripts/update-colors.js`.

**To use the script:**

```bash
cd /path/to/your/project
node scripts/update-colors.js
```

This will automatically replace all instances of:
- `#0A66C2` → `#004AAD`
- `#003C78` → `#002D6E`
- `#E8F3FF` → `#E6F0FF`

### Manual Find & Replace (Alternative)

If you prefer manual replacement using your code editor:

1. **Find**: `#0A66C2` → **Replace**: `#004AAD`
2. **Find**: `#003C78` → **Replace**: `#002D6E`
3. **Find**: `#E8F3FF` → **Replace**: `#E6F0FF`

Search in files with these extensions: `.tsx`, `.ts`, `.css`, `.jsx`, `.js`

---

## 📝 CSS Custom Properties

Global CSS variables have been updated in `/styles/globals.css`:

```css
:root {
  /* Primary Colors */
  --primary-blue: #004AAD;
  --primary-blue-light: #E6F0FF;
  --primary-blue-dark: #002D6E;
  
  /* Accent Colors */
  --accent-blue: #0066FF;
  --accent-blue-light: #78A9FF;
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --light-gray: #F5F7FA;
  --dark-text: #1A1A1A;
  
  /* Glass Effects */
  --glass-bg: rgba(255, 255, 255, 0.35);
  --glass-border: rgba(255, 255, 255, 0.6);
}
```

---

## 🎨 Color Usage Guide

### Buttons
- **Primary CTA**: `bg-[#004AAD]` with `hover:bg-[#002D6E]`
- **Secondary**: `bg-[#E6F0FF]` with `text-[#004AAD]`
- **Glass Style**: `glass-panel` class with `text-[#004AAD]`

### Text
- **Headings**: `text-[#002D6E]`
- **Body Text**: `text-[#1A1A1A]`
- **Links**: `text-[#004AAD]` with `hover:text-[#002D6E]`
- **Icons**: `text-[#004AAD]`

### Backgrounds
- **Hero Sections**: `bg-gradient-to-br from-[#E6F0FF] to-white`
- **Dark Sections**: `bg-gradient-to-br from-[#002D6E] to-[#004AAD]`
- **Card Backgrounds**: `bg-white` or `bg-[#F5F7FA]`
- **Hover States**: `hover:bg-[#E6F0FF]`

### Borders & Accents
- **Primary Border**: `border-[#004AAD]`
- **Subtle Border**: `border-[#78A9FF]`
- **Accent Elements**: `bg-[#0066FF]` or `text-[#0066FF]`

---

## ✨ New Features

### Accent Blue Colors
The new color system includes two accent blue shades not in the previous palette:

- **Accent Blue** (`#0066FF`): For secondary CTAs, links, and badges
- **Accent Blue Light** (`#78A9FF`): For subtle UI elements and decorative accents

These can be used to add more visual variety while maintaining brand consistency.

---

## 🚀 Next Steps

1. ✅ Global styles updated (`/styles/globals.css`)
2. ✅ Color constants defined (`/utils/colors.ts`)
3. ✅ Header component updated
4. ✅ Footer component updated
5. ⏳ Run color replacement script for remaining components
6. ⏳ Update all page files
7. ⏳ Test all pages for visual consistency
8. ⏳ Update component library showcase

---

## 📊 Impact Summary

- **Total Files to Update**: ~25 files
- **Approximate Color Occurrences**: 200+ instances
- **Components Affected**: All UI components
- **Pages Affected**: All 20+ pages

---

## 🎯 Testing Checklist

After applying all color updates, verify:

- [ ] Navigation bar colors (active, hover, default states)
- [ ] All buttons (primary, secondary, tertiary)
- [ ] Form inputs (focus, error, success states)
- [ ] Cards (course, program, event, blog)
- [ ] Icons and badges
- [ ] Hover effects throughout
- [ ] Gradient backgrounds
- [ ] Footer styling
- [ ] Mobile responsiveness
- [ ] Glass morphism effects
- [ ] Text readability (contrast ratios)

---

**Last Updated**: December 10, 2024  
**Status**: Core components updated, bulk replacement ready to execute
