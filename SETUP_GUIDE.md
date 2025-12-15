# Portfolio Setup Guide - Part 2

## ✅ Step 7: Main Page Updated

The main page (`app/page.tsx`) has been updated to include only the Hero section. Other sections will be added in Part 3.

## 🖼️ Step 8: Add Profile Image

### Option 1: Add Your Own Image
1. Add your profile photo to `public/images/profile.jpg`
2. Recommended size: 400x400px, square aspect ratio
3. Optimized format: JPG or WebP

### Option 2: Use Placeholder (Automatic)
If no image is found, the component will automatically use a placeholder from:
```
https://ui-avatars.com/api/?name=Your+Name&size=400&background=6366f1&color=fff
```

## 🎭 Step 9: Add Resume File

1. Add your resume PDF to `public/resume.pdf`
2. Ensure the file is named exactly `resume.pdf`
3. The "Download Resume" button will automatically link to this file

## 🧪 Step 10: Test Everything

Run the development server:
```bash
npm run dev
```

### Test Checklist

- [ ] Particle background loads and responds to mouse hover
- [ ] Smooth scrolling works (scroll feels buttery)
- [ ] Scroll progress bar appears at top and fills on scroll
- [ ] Navbar transitions to glass effect on scroll
- [ ] Mobile menu opens/closes smoothly
- [ ] Profile image loads with animated glow border
- [ ] Name and role appear with stagger animation
- [ ] Typewriter effect cycles through taglines
- [ ] "View My Work" button has magnetic hover effect
- [ ] "Download Resume" button triggers download
- [ ] Scroll indicator bounces and links to next section
- [ ] Floating gradient orbs animate in background
- [ ] Everything is responsive on mobile (test with DevTools)

## 🎨 Customization Options

### Change Colors

In `components/sections/Hero.tsx`, modify:

```tsx
// Gradient background colors (in GradientMesh.tsx)
gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)"); // primary-500
gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)"); // purple-500

// Change to:
gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)"); // blue-500
gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.2)"); // indigo-500
```

### Change Typewriter Text

In `components/sections/Hero.tsx`, edit the sequence array:

```tsx
sequence={[
  "Your custom text here",
  2000,
  "Another message",
  2000,
  "Third message",
  2000,
]}
```

### Adjust Particle Settings

In `components/shared/ParticleBackground.tsx`, modify:

```tsx
particles: {
  number: {
    value: 80, // Number of particles (increase for more)
  },
  size: {
    value: { min: 1, max: 3 }, // Particle size range
  },
  links: {
    distance: 150, // Connection distance
  },
}
```

### Magnetic Effect Strength

In `components/sections/Hero.tsx`:

```tsx
// Change the 0.1 multiplier for stronger/weaker pull
mouseX.set((e.clientX - centerX) * 0.1); // 0.1 = subtle, 0.2 = stronger
mouseY.set((e.clientY - centerY) * 0.1);
```

### Typewriter Speed

In `components/sections/Hero.tsx`:

```tsx
<TypeAnimation
  speed={50} // Change to 30 for slower, 70 for faster
  // ...
/>
```

## 🐛 Troubleshooting

### Issue: Particles not showing

**Solution:**
- Check browser console for errors
- Ensure `@tsparticles/react` and `@tsparticles/slim` are installed
- Clear `.next` folder: `rm -rf .next && npm run dev` (or `Remove-Item -Recurse -Force .next` on Windows)

### Issue: Smooth scroll not working

**Solution:**
- Verify `@studio-freight/lenis` is installed correctly
- Check that `SmoothScroll` wraps the entire page in `app/page.tsx`
- Some browsers may have conflicts with extensions (test in incognito)

### Issue: Typewriter not animating

**Solution:**
- Ensure component is mounted (mounted state is true)
- Check `react-type-animation` is installed: `npm list react-type-animation`
- Verify no hydration errors in console

### Issue: Image not loading

**Solution:**
- Confirm image exists at `public/images/profile.jpg`
- Check file permissions
- The component will automatically use a placeholder if image fails to load

### Issue: Button not magnetic

**Solution:**
- Ensure Framer Motion is properly installed
- Check browser console for errors
- Verify the `onMouseMove` and `onMouseLeave` handlers are attached

## ✅ Part 2 Completion Checklist

- [x] ParticleBackground component created and working
- [x] SmoothScroll wrapper implemented
- [x] ScrollProgress bar visible and functional
- [x] Navbar created with scroll behavior
- [x] Mobile menu working
- [x] Hero section fully animated
- [x] Profile image displayed with glow effect
- [x] Typewriter animation cycling
- [x] Magnetic button effect working
- [x] Scroll indicator bouncing
- [x] All animations smooth (60fps)
- [x] Responsive on all screen sizes
- [x] Resume download button functional

## 🎯 What's Next: Part 3

In Part 3, we'll build:
- ✨ About Me Section
  - Two-column responsive layout
  - Animated portrait reveal
  - Quick facts cards with icons
  - Education timeline
  - Scroll-triggered animations
  - Number counter for stats
  - Parallax background elements

## 📚 Key Concepts Learned

### Framer Motion Techniques

1. **Initial + Animate Pattern:**
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
```

2. **Staggered Animations:**
```tsx
transition={{ delay: index * 0.1 }}
```

3. **Spring Physics:**
```tsx
const x = useSpring(mouseX, { damping: 25, stiffness: 150 })
```

4. **Motion Values:**
```tsx
const mouseX = useMotionValue(0)
```

### Performance Best Practices

- Use `transform` and `opacity` for animations (GPU-accelerated)
- Lazy load heavy components (particles)
- Optimize images with Next.js Image component
- Use `will-change` CSS property sparingly

## 🎨 Animation Timing Reference

| Element | Delay | Duration | Effect |
|---------|-------|----------|--------|
| Profile Image | 0s | 0.5s | Scale + Fade |
| Name | 0.2s | 0.8s | Slide Up + Fade |
| Role | 0.4s | 0.8s | Slide Up + Fade |
| Tagline | 0.6s | 0.8s | Slide Up + Fade |
| Buttons | 0.8s | 0.8s | Slide Up + Fade |
| Scroll Indicator | 1s | 1s | Fade In |
| Navbar Links | 0-0.6s | Staggered | Slide Down + Fade |

## 💡 Pro Tips

1. **Magnetic Effect Radius:**
   - Adjust the `0.1` multiplier in `mouseX.set((e.clientX - centerX) * 0.1)` for stronger/weaker pull

2. **Typewriter Speed:**
   - Change `speed={50}` to `speed={30}` for slower typing

3. **Particle Interaction:**
   - Set `repulse.distance: 200` higher for larger repulsion area

4. **Mobile Performance:**
   - Reduce particle count on mobile: Check `window.innerWidth` and conditionally set `value: 40` instead of `80`

5. **Smooth Scroll Feel:**
   - Adjust `lerp: 0.1` (higher = faster, lower = smoother)

## 🚀 Performance Metrics Target

After completing Part 2, your page should achieve:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Lighthouse Performance Score: 85+

Test with:
```bash
npm run build
npm start
```

Then use Chrome DevTools Lighthouse.

## 🎉 Congratulations!

Your Hero section is now stunning and production-ready! The first impression is everything - you've nailed it. Ready for Part 3?

## 📸 Expected Result

Your Hero section should now have:
- ✅ Dynamic particle network that responds to mouse movement
- ✅ Smooth butter scrolling throughout the page
- ✅ Animated gradient background with floating orbs
- ✅ Glass-morphism navbar that appears on scroll
- ✅ Profile image with pulsing glow effect
- ✅ Typewriter tagline cycling through messages
- ✅ Magnetic CTA buttons that pull toward cursor
- ✅ Bouncing scroll indicator guiding users down
- ✅ Scroll progress bar at the very top
- ✅ Mobile-responsive with touch-optimized menu

