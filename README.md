# twheo-expo-template

This template is designed for solo developers and small projects that require maximum speed and minimum boilerplate.

It is based on the proven architecture of [obytes](https://github.com/obytes/react-native-template-obytes), but stripped down to its essentials. The goal is to provide a clean and simple foundation without unnecessary features, allowing you to focus solely on building your core product.

## File Structure

This template utilizes a **Domain-Driven** folder structure. The goal of this architecture is to maximize scalability, maintainability, and development velocity.

The conventional **"Folder-by-Type"** structure is shown below:

```
src/
├── api/ # userApi.ts, productApi.ts ...
├── components/ # UserCard.tsx, ProductList.tsx, Button.tsx ...
├── hooks/ # useUser.ts, useProducts.ts, useDebounce.ts ...
└── screens/ # UserScreen.tsx, ProductScreen.tsx ...
```

This approach, however, presents two significant issues:

1.  Files from multiple domains are co-located, which complicates navigation and discovery.
2.  Domain-related logic becomes fragmented across the codebase.

This template solves these problems with a **Domain-Driven** approach, which provides:

- **High Cohesion:** Related code (APIs, hooks, components) is co-located within a single domain folder (e.g., `features/product`).
- **Low Coupling:** Modules are independent (`features/user` is unaware of `features/product`), making features easy to modify or delete.
- **Clear Separation of Concerns:** A sharp distinction is made between business logic (`features/`), pure UI (`components/`), and page assembly (`screens/`).
- **Easy Navigation:** All code for a specific domain (e.g., "user") is located in one place (`features/user`).

```
├── assets/
├── app/ # Routing Layer (Expo Router)
│ ├── \_layout.tsx
│ ├── index.tsx # Renders src/screens/HomeScreen.tsx
│ ├── (tabs)/
│ │ ├── \_layout.tsx
│ │ ├── dashboard.tsx # Renders src/screens/DashboardScreen.tsx
│ │ └── settings.tsx # Renders src/screens/SettingsScreen.tsx
│ └── product/
│ └── [id].tsx # Renders src/screens/ProductDetailScreen.tsx
│
├── src/
│ ├── features/ # Domain Logic (Core)
│ │ ├── user/
│ │ │ ├── useUserQuery.ts
│ │ │ ├── UserProfileWidget.tsx
│ │ │ ├── useAuth.ts
│ │ │ └── types.ts
│ │ │
│ │ ├── product/ # Organize with sub-folders as files grow
│ │ │ ├── api/ # useProductsQuery
│ │ │ ├── components/ # ProductCard, ProductList
│ │ │ ├── hooks/
│ │ │ └── types.ts # Product
│ │ │
│ │ └── (another-domain)/
│ │
│ ├── screens/ # Page Assembly Layer
│ │ ├── HomeScreen.tsx
│ │ ├── DashboardScreen.tsx
│ │ ├── SettingsScreen.tsx
│ │ └── ProductDetailScreen.tsx
│ │
│ ├── components/ # Pure, Shared UI
│ │ ├── ui/
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ ├── Modal.tsx
│ │ │ └── Card.tsx
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── BottomTabBar.tsx
│ │ │ └── ScreenWrapper.tsx
│ │ ├── forms/
│ │ └── feedback/
│ │
│ ├── lib/ # Shared Utilities
│ │ ├── constants.ts
│ │ ├── utils.ts
│ │ └── api.ts
│ │
│ ├── hooks/ # Shared Hooks (Domain-Agnostic)
│ │ ├── useDebounce.ts
│ │ ├── useAppState.ts
│ │ └── useTheme.ts
│ │
│ └── store/ # Shared State (Domain-Agnostic)
│ └── uiStore.ts # (Theme, modal state, etc.)
│
```

- **`app/`**
  - **Role:** Manages routing configurations exclusively.

- **`features/`**
  - **Role:** Contains core business logic, with folders divided by domain.
  - As a domain's complexity increases, it can be flexibly organized into sub-folders (e.g., `components/`, `api/`, `hooks/`).

- **`screens/`**
  - **Role:** Assembles components from `features/` to create a specific page.
  - **Note on necessity:** This layer intentionally decouples routing (`app/`) from page implementation (`screens/`). This adheres to the Single Responsibility Principle and prevents `app/` files from becoming bloated with both routing configuration and complex page assembly logic.

- **`components/`**
  - **Role:** Contains only pure, domain-agnostic UI components.
  - These are consumed by the `features/` layer to compose domain-specific components. This same principle of shared, domain-agnostic logic applies to `lib/`, `hooks/`, and `store/`.
