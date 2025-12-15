"use client";

// Disabled Lenis completely - using native browser smooth scroll
// This matches navbar click behavior (scrollIntoView) for consistent, fast scrolling
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // No Lenis - use native smooth scroll (same as navbar clicks)
  // This provides fast, responsive scrolling without library overhead
  return <>{children}</>;
}
