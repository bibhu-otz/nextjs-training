# 📋 Next.js App Router - Quick Reference Cheat Sheet

## 🗂️ File Conventions

```
app/
├── layout.tsx      → Shared UI (wraps children)
├── page.tsx        → Unique route UI
├── loading.tsx     → Suspense fallback UI
├── error.tsx       → Error boundary UI [client]
├── not-found.tsx   → 404 UI
├── template.tsx    → Re-rendered layout
├── default.tsx     → Parallel route fallback
└── route.ts        → API endpoint
```

---

## 🛤️ Route Patterns

### Basic Routes
```
app/page.tsx             →  /
app/about/page.tsx       →  /about
app/blog/posts/page.tsx  →  /blog/posts
```

### Dynamic Routes
```tsx
// Single parameter
app/products/[id]/page.tsx     →  /products/1, /products/abc

// Access params (Next.js 15+)
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Product {id}</div>;
}
```

### Catch-All Routes
```tsx
// Required segments
app/docs/[...slug]/page.tsx    →  /docs/a, /docs/a/b/c
// params.slug = ['a', 'b', 'c']

// Optional segments
app/shop/[[...slug]]/page.tsx  →  /shop, /shop/a, /shop/a/b
// params.slug = undefined | ['a'] | ['a', 'b']
```

---

## 📁 Route Groups

```
app/
├── (marketing)/           # NOT in URL
│   ├── layout.tsx         # Marketing layout
│   ├── about/page.tsx     →  /about
│   └── blog/page.tsx      →  /blog
└── (shop)/
    ├── layout.tsx         # Shop layout
    └── products/page.tsx  →  /products
```

---

## 🔀 Parallel Routes

```
app/
├── layout.tsx             # Receives slots as props
├── page.tsx               # {children}
├── @dashboard/page.tsx    # {dashboard}
└── @sidebar/page.tsx      # {sidebar}
```

```tsx
// layout.tsx
export default function Layout({
  children,
  dashboard,
  sidebar,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <aside>{sidebar}</aside>
      <section>{dashboard}</section>
    </div>
  );
}
```

**⚠️ REQUIRED: default.tsx in each slot!**

---

## 🚦 Intercepting Routes

| Syntax | Intercepts |
|--------|------------|
| `(.)folder` | Same level |
| `(..)folder` | One level up |
| `(..)(..)folder` | Two levels up |
| `(...)folder` | From root |

### Modal Pattern
```
app/
├── layout.tsx              # Has {modal} prop
├── @modal/
│   ├── default.tsx         # Returns null
│   └── (.)products/[id]/
│       └── page.tsx        # Modal content
└── products/
    ├── page.tsx            # Product grid
    └── [id]/page.tsx       # Full page
```

**Behavior:**
- Click Link `/products/1` → Modal shows
- Refresh/Direct URL → Full page shows

---

## ⏳ Loading States

```tsx
// app/products/loading.tsx
export default function Loading() {
  return <div className="skeleton">Loading...</div>;
}

// Automatic Suspense wrapper:
<Suspense fallback={<Loading />}>
  <Page />
</Suspense>
```

---

## ❌ Error Handling

```tsx
// app/products/error.tsx
'use client'; // Required!

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Error: {error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
```

---

## 🔗 Navigation

### Link Component
```tsx
import Link from 'next/link';

<Link href="/about">About</Link>
<Link href={`/products/${id}`}>Product</Link>
<Link href="/login" replace>Login</Link>
<Link href="/heavy" prefetch={false}>Heavy</Link>
```

### useRouter Hook
```tsx
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();

router.push('/dashboard');    // Navigate
router.replace('/dashboard'); // Replace history
router.back();                // Go back
router.refresh();             // Refresh data
```

### Server Redirect
```tsx
import { redirect } from 'next/navigation';

// In Server Component
if (!session) {
  redirect('/login');
}
```

---

## 🔌 Route Handlers (API)

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ users: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(body, { status: 201 });
}

// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ id });
}
```

---

## 🛡️ Middleware

```tsx
// middleware.ts (root level)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Auth check
  const token = request.cookies.get('token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};
```

---

## 📊 Metadata

```tsx
// Static
export const metadata = {
  title: 'My Page',
  description: 'Page description',
};

// Dynamic
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  return {
    title: product.name,
    description: product.description,
  };
}
```

---

## ⚡ Quick Tips

1. **Server Components by default** - Only add `'use client'` when needed
2. **Always add `default.tsx`** for parallel routes
3. **Use `loading.tsx`** for instant feedback
4. **Colocate files** - Keep related files together
5. **Route groups `()`** don't affect URLs
6. **Prefetch important routes** for faster navigation

---

## 🎯 Common Patterns

### Protected Route
```tsx
// app/dashboard/layout.tsx
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) redirect('/login');
  return <>{children}</>;
}
```

### Modal with Intercepting Route
```
@modal/(.)items/[id]/page.tsx  →  Modal view
items/[id]/page.tsx            →  Full page view
```

### Multi-Layout App
```
(auth)/layout.tsx    →  Auth pages layout
(main)/layout.tsx    →  Main app layout
```
