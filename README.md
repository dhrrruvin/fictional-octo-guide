# Product Catalog Application

A modern React-based e-commerce product catalog application featuring product listing, filtering, pagination, and detailed product views.

---

## Features

### Product Listing Page

* Responsive product grid layout
* Dynamic category filters
* Dynamic brand filters
* Price range filtering
* Client-side pagination
* Skeleton loading states
* Hover animations and transitions
* Mobile-friendly design

### Product Detail Page

* Product image gallery
* Product information display
* Price and rating details
* Product description
* Responsive layout
* Back navigation support

### Filter Management

* Multi-select category filters
* Multi-select brand filters
* Price range filtering
* Reset filters functionality
* Filter state preservation using Context API

---

# Tech Stack

### Frontend

* React 19
* React Router DOM
* Tailwind CSS
* Context API
* JavaScript (ES6+)

### API

* DummyJSON API
* https://dummyjson.com

---

# Setup Instructions

## Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

## Installation

Clone the repository:

```bash
git clone https://github.com/dhrrruvin/fictional-octo-guide.git
```

Navigate into the project:

```bash
cd fictional-octo-guide
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Assumptions Made

### 1. Client-side Filtering

The DummyJSON API does not support combining multiple filters such as:

* Multiple Categories
* Multiple Brands
* Price Range
* Search

Therefore, all products are fetched once and filtering is performed client-side.

### 2. Pagination

Pagination is applied after filtering to ensure:

* Correct page counts
* Accurate product totals
* Better user experience

### 3. Filter Persistence

Filters are preserved across navigation using React Context API.

This allows users to:

* Open a product
* Return to the listing page
* Continue from the same filter and pagination state

### 4. Responsive First Design

The UI is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

---

# Architectural Decisions

## Context API for Global Filter State

Instead of prop drilling, Context API was used to manage:

* Selected Categories
* Selected Brands
* Price Range
* Current Pagination Page

Benefits:

* Simplifies state sharing
* Preserves filters between routes
* Scales well for medium-sized applications

---

## Custom Hooks

Business logic was separated into reusable hooks:

### useProducts

Responsible for:

* Product fetching
* Loading states
* Error handling

### useFilters

Responsible for:

* Category filtering
* Brand filtering
* Price filtering
* Filtered product calculations

This keeps components clean and focused on UI.

---

## Component-Based Design

UI is divided into reusable components:

* ProductCard
* ProductGrid
* FilterSidebar
* Pagination
* SkeletonLoader

---

## Tailwind CSS

Tailwind was selected because it provides:

* Rapid development
* Consistent design system
* Responsive utilities
* Easier maintenance compared to large custom CSS files

---

# Improvements If Given More Time

### Server-Side Filtering

Implement backend-driven filtering and pagination to reduce payload size and improve scalability.

### URL-Based Filters

Persist filters in URL query parameters:

```text
/products?category=beauty&brand=apple&page=2
```

### Product Search

Develop a search component through which user can find any items.

### Advanced Filtering

* Rating filters
* Sorting options
* Availability filters
* Discount filters

### Testing

* Unit tests using Vitest/Jest
* Component tests using React Testing Library

### Accessibility

* Keyboard navigation
* Screen reader support
* ARIA attributes
* Focus management

### Image Optimization

* Lazy loading
* Responsive images
* Placeholder blur effects

---

# API Reference

Products:

```http
GET https://dummyjson.com/products
```

Product Details:

```http
GET https://dummyjson.com/products/{id}
```

Categories:

```http
GET https://dummyjson.com/products/categories
```

---
