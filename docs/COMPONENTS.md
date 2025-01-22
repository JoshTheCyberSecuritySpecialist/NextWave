# Component Documentation

## UI Components

### Button

A customizable button component with various styles and states.

```tsx
import { Button } from "@/components/ui/button";

<Button
  variant="default" // default | outline | ghost | link
  size="default"    // default | sm | lg
  disabled={false}
>
  Click me
</Button>
```

Props:
- `variant`: Button style variant
- `size`: Button size
- `disabled`: Disable button
- `className`: Additional CSS classes
- `onClick`: Click handler

### Card

A versatile card component for content containers.

```tsx
import { Card } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

## Feature Components

### Navigation

Main navigation component with mobile responsiveness.

```tsx
import { Navigation } from "@/components/navigation";

<Navigation />
```

Features:
- Responsive design
- Mobile menu
- Active link highlighting
- Accessibility support

### OptimizedImage

Image component with optimization and lazy loading.

```tsx
import OptimizedImage from "@/components/optimized-image";

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}
/>
```

Props:
- `src`: Image source URL
- `alt`: Alt text for accessibility
- `width`: Image width
- `height`: Image height
- `priority`: Load image with priority
- `className`: Additional CSS classes