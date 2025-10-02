# Tailwind + shadcn Usage Examples

## Your Project Already Uses Both!

### Tailwind Utility Classes (Everywhere)
```tsx
// Layout & Spacing
className="flex flex-col gap-4 p-6"          // Flexbox + spacing
className="grid grid-cols-2 gap-3"          // CSS Grid
className="min-h-screen bg-background"      // Height + background

// Responsive Design
className="max-[768px]:flex-col"            // Mobile: stack vertically
className="md:p-6 p-4"                      // Tablet+: more padding

// Interactive States
className="hover:bg-accent focus:ring-2"   // Hover & focus states
className="transition-colors duration-200"  // Smooth transitions

// Print Styles
className="print:hidden"                    // Hide on print
```

### shadcn Components (46 Installed)

**Button** - Already used in App.tsx
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

**Available Components** (in `src/components/ui/`):
- `accordion` - Collapsible sections
- `alert-dialog` - Confirmation modals
- `avatar` - User profile images
- `checkbox` - Form checkboxes
- `dialog` - Modal dialogs
- `dropdown-menu` - Context menus
- `input` - Text inputs
- `label` - Form labels
- `popover` - Floating content
- `select` - Dropdown selects
- `switch` - Toggle switches
- `tabs` - Tabbed interfaces
- `tooltip` - Hover tooltips
- `toast/sonner` - Notifications (already used!)

## Quick Examples

### Add a Dialog
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Add a Form Input
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="max-w-sm"
  />
</div>
```

### Add a Card
```tsx
// Card component should be in src/components/ui/card.tsx
// If not, you can add it from shadcn/ui

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Card content goes here
    </p>
  </CardContent>
</Card>
```

### Combine Tailwind + shadcn
```tsx
import { Button } from "@/components/ui/button"

<Button
  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
>
  Fancy Gradient Button
</Button>
```

## Custom Design System Tokens

Your app also uses custom CSS variables (in `globals.css`):

```tsx
// Using custom tokens
<div style={{
  backgroundColor: 'var(--bg-subtle)',
  color: 'var(--text-primary)',
  fontSize: 'var(--text-h1)',
  padding: 'var(--space-4)',
  borderRadius: 'var(--radius-default)',
  boxShadow: 'var(--elevation-card)'
}}>
  Custom styled div
</div>

// Or with Tailwind
<div className="p-4 rounded-lg shadow-sm bg-subtle text-primary">
  Mixed approach
</div>
```

## Next Steps

1. **Check available components**: Look in `src/components/ui/` folder
2. **Add new shadcn components**: `npx shadcn@latest add [component-name]`
3. **Read shadcn docs**: https://ui.shadcn.com/docs/components
4. **Browse Tailwind classes**: https://tailwindcss.com/docs

Your project is ready to use both frameworks!
