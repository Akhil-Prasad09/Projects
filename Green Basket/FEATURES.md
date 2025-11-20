# Green Basket - Feature Documentation

## 🎨 Design & User Experience

### Modern Animations
- **Smooth Page Transitions**: fadeIn, fadeInUp, slideDown, slideInRight animations
- **Card Hover Effects**: Elevation changes with translateY transformations
- **Button Ripple Effect**: Expanding circle animation on hover
- **Modal Animations**: Slide-up entrance with backdrop blur
- **Stats Pop-in**: Staggered animations for dashboard statistics
- **Floating Elements**: Continuous subtle animation in hero section

### Earthy Indian Color Theme
- **Primary Brown** (#8B4513): Main brand color
- **Terracotta** (#D2691E): Warm accent color
- **Saffron** (#FF9933): Vibrant highlights inspired by Indian flag
- **Sage Green** (#87A96B): Natural, earthy tone
- **Warm White** (#FFF8E7): Soft background
- **Deep Brown** (#5D3A1A): Rich text and shadows

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Poppins (clean, modern sans-serif)
- Responsive font sizing for all screen sizes

## 🏠 Pages & Components

### 1. Home Page
**Features:**
- Hero section with animated background
- Call-to-action buttons (Shop Now, Meet Artisans)
- Featured artisan profiles (top 4)
- Featured products (top 4)
- Smooth scroll navigation

**Animations:**
- Sequential fade-in for hero content
- Floating decorative elements
- Card hover effects

### 2. Artisans Page
**Features:**
- Grid layout of all artisan profiles
- Avatar placeholders with emojis
- Location information with map pin icons
- Specialty/craft description
- Product count per artisan
- Interactive cards

**User Experience:**
- Hover effects with rotation and scale
- Clean card design with gradient avatars
- Easy-to-read information hierarchy

### 3. Products Page
**Features:**
- Comprehensive product catalog
- Product cards with emoji images
- Price display in Indian Rupees (₹)
- Artisan attribution
- Multilingual support badges
- Click-to-purchase functionality

**Interactive Elements:**
- Hover zoom on product images
- Add to Cart button
- Payment modal trigger

### 4. Seller Dashboard
**Features:**
- Statistics overview (4 key metrics)
- Recent orders table
- Add new product form
- Order status tracking
- Mock SMS notifications

**Key Metrics:**
- Total Products
- Total Orders
- Monthly Revenue
- Rating

**Order Management:**
- Order ID tracking
- Product details
- Quantity and amount
- Status badges (Pending, Approved, Shipped)

**Add Product Form:**
- Product name field
- Description textarea
- Price input
- Category selector
- Submit for approval workflow

### 5. Admin Panel
**Features:**
- Platform-wide statistics
- Product approval queue
- Order approval queue
- Approval actions
- SMS notification system

**Statistics:**
- Total Artisans
- Total Products
- Total Orders
- Total Revenue

**Approval Workflows:**
- Review pending products
- Review pending orders
- One-click approve buttons
- Status badge updates
- Automated notifications

## 💳 Payment System (Mock)

### Payment Modal
**Features:**
- Product summary display
- Payment method selection
- UPI Payment option
  - Google Pay
  - PhonePe
  - Paytm
- Razorpay option
  - Credit/Debit Cards
  - Net Banking
- Success confirmation
- SMS notification simulation

**User Flow:**
1. Click product card or "Add to Cart"
2. Payment modal opens
3. Select payment method
4. Complete payment
5. Success screen with SMS confirmation
6. Auto-close after 3 seconds

## 📱 SMS Notifications (Mock UI)

### Notification Triggers
- Product submission by seller
- Product approval by admin
- Order placement by customer
- Order approval by admin
- Shipping updates

### Notification Features
- Fixed position (top-right)
- Slide-in animation
- Auto-dismiss after 5 seconds
- Success/info styling
- Mobile icon indicator

## 🌐 Multilingual Support

### Supported Languages
- English (primary)
- Hindi (देवनागरी)
- Gujarati (ગુજરાતી)

### Implementation
- Language tags on product cards
- Globe icon indicators
- Easy to extend for additional languages

## 🎯 User Roles & Permissions

### 1. Customer/Buyer
- Browse artisan profiles
- View products
- Make purchases
- Receive order confirmations

### 2. Artisan/Seller
- View dashboard statistics
- Manage products
- Add new products
- Track orders
- Receive notifications

### 3. Admin
- Platform oversight
- Approve products
- Approve orders
- Manage artisans
- Send notifications

## 🚀 Technical Features

### React Components
- Functional components with Hooks
- useState for state management
- Event handling
- Conditional rendering
- Component composition

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Media queries for tablets and mobile
- Touch-friendly interactions
- Adaptive navigation

### Accessibility
- Focus-visible styles
- Semantic HTML
- ARIA-friendly structure
- Keyboard navigation support
- Screen reader considerations

### Performance
- Lightweight (no heavy dependencies)
- CSS animations (GPU-accelerated)
- Efficient re-renders
- Optimized asset loading
- Fast initial load time

## 🔧 Offline Capabilities (Ready for PWA)

### Current Structure
- Designed for offline-first approach
- Mock data for demonstration
- State management ready for caching
- UI prepared for offline indicators

### Future PWA Integration
- Service worker registration
- Cache strategies
- Offline page
- Background sync
- Push notifications

## 🌍 Worldwide Shipping

### Features (Mock)
- Global marketplace reach
- International shipping options
- Multiple currency support (ready)
- Shipping status tracking

## 📊 Data Architecture

### Mock Data Structure
```javascript
Artisan: {
  id, name, location, specialty, avatar, products
}

Product: {
  id, name, artisan, price, languages, emoji, description
}

Order: {
  id, product, quantity, amount, status
}
```

### State Management
- Local component state
- Prop drilling for shared data
- Ready for Context API or Redux integration

## 🎨 Custom Styling Features

### CSS Variables
- Color palette as CSS custom properties
- Shadow system (small, medium, large)
- Easy theme customization

### Reusable Classes
- `.btn` - Button base styles
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.card` - Card container
- `.modal` - Modal dialog
- `.status-badge` - Status indicators

### Utility Classes
- `.section` - Content sections
- `.grid-3` - 3-column grid
- `.grid-4` - 4-column grid
- `.stats-grid` - Statistics layout

## 📱 Interactive Elements

### Buttons
- Ripple effect on hover
- Smooth color transitions
- Elevation changes
- Disabled states
- Loading states (ready)

### Forms
- Floating labels (ready)
- Input focus effects
- Validation styling
- Error messages (ready)

### Tables
- Hover row highlighting
- Responsive scrolling
- Sortable columns (ready)
- Filterable data (ready)

## 🔮 Future Enhancements

### Phase 1
- Backend API integration
- Real authentication
- Database persistence
- File upload for images

### Phase 2
- Real SMS gateway (Twilio/AWS SNS)
- Real payment gateway (Razorpay/Stripe)
- Email notifications
- Advanced search

### Phase 3
- Mobile app (React Native)
- Progressive Web App
- Analytics dashboard
- Machine learning recommendations

### Phase 4
- Video product demos
- Live chat support
- AR product preview
- Social media integration

## 🛠️ Development Tools

### Required
- Node.js (v14+)
- npm (v6+)
- Modern web browser

### Optional
- VS Code (recommended)
- React Developer Tools
- Redux DevTools (for future)

## 📈 Scalability Considerations

### Current Architecture
- Component-based structure
- Separation of concerns
- Mock data easily replaceable
- Modular CSS

### Ready for Growth
- API integration points
- State management upgrade path
- Database schema alignment
- CDN deployment ready

---

**Built with ❤️ for Rural Indian Women Artisans**
