import React, { useState } from 'react';
import './App.css';

// Mock Data
const mockArtisans = [
  { id: 1, name: 'Lakshmi Devi', location: 'Rajasthan', specialty: 'Block Printing & Textiles', avatar: '👩‍🎨', products: 12 },
  { id: 2, name: 'Anjali Kumari', location: 'Gujarat', specialty: 'Embroidery & Mirror Work', avatar: '👩‍🦰', products: 18 },
  { id: 3, name: 'Meera Bai', location: 'Madhya Pradesh', specialty: 'Pottery & Terracotta', avatar: '👩', products: 9 },
  { id: 4, name: 'Savitri Sharma', location: 'Uttar Pradesh', specialty: 'Handwoven Sarees', avatar: '👵', products: 15 }
];

const mockProducts = [
  { id: 1, name: 'Hand Block Printed Scarf', artisan: 'Lakshmi Devi', price: '₹1,299', languages: ['English', 'Hindi'], emoji: '🧣', description: 'Traditional Rajasthani block print' },
  { id: 2, name: 'Embroidered Cushion Cover', artisan: 'Anjali Kumari', price: '₹899', languages: ['English', 'Gujarati'], emoji: '🛋️', description: 'Beautiful mirror work embroidery' },
  { id: 3, name: 'Terracotta Planter Set', artisan: 'Meera Bai', price: '₹1,499', languages: ['English', 'Hindi'], emoji: '🏺', description: 'Handcrafted clay planters' },
  { id: 4, name: 'Handwoven Cotton Saree', artisan: 'Savitri Sharma', price: '₹3,999', languages: ['English', 'Hindi'], emoji: '👗', description: 'Pure cotton handloom saree' },
  { id: 5, name: 'Printed Tote Bag', artisan: 'Lakshmi Devi', price: '₹699', languages: ['English', 'Hindi'], emoji: '👜', description: 'Eco-friendly cotton bag' },
  { id: 6, name: 'Wall Hanging', artisan: 'Anjali Kumari', price: '₹2,199', languages: ['English', 'Gujarati'], emoji: '🖼️', description: 'Traditional Gujarat wall art' },
  { id: 7, name: 'Clay Tea Set', artisan: 'Meera Bai', price: '₹1,799', languages: ['English', 'Hindi'], emoji: '🍵', description: 'Handmade terracotta tea set' },
  { id: 8, name: 'Silk Stole', artisan: 'Savitri Sharma', price: '₹2,499', languages: ['English', 'Hindi'], emoji: '🧕', description: 'Handwoven silk stole' }
];

// Header Component
function Header({ onNavigate, currentView }) {
  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          <span className="logo-icon">🧺</span>
          Green Basket
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('artisans'); }}>Artisans</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('seller'); }}>Seller Dashboard</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('admin'); }}>Admin Panel</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Hero Component
function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Rural Artisans</h1>
        <p>Discover authentic handcrafted products from talented women artisans across India</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => onNavigate('products')}>
            Shop Now
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('artisans')}>
            Meet Our Artisans
          </button>
        </div>
      </div>
    </section>
  );
}

// Artisan Profiles Component
function ArtisanProfiles({ artisans }) {
  return (
    <section className="section" id="artisans">
      <h2 className="section-title">Our Talented Artisans</h2>
      <div className="grid grid-4">
        {artisans.map(artisan => (
          <div key={artisan.id} className="card artisan-card">
            <div className="artisan-avatar">{artisan.avatar}</div>
            <h3 className="artisan-name">{artisan.name}</h3>
            <div className="artisan-location">📍 {artisan.location}</div>
            <p className="artisan-specialty">{artisan.specialty}</p>
            <button className="btn btn-primary">View Products ({artisan.products})</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Product Listings Component
function ProductListings({ products, onProductClick }) {
  return (
    <section className="section" id="products">
      <h2 className="section-title">Featured Products</h2>
      <div className="grid grid-4">
        {products.map(product => (
          <div key={product.id} className="card product-card" onClick={() => onProductClick(product)}>
            <div className="product-image">{product.emoji}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-artisan">By {product.artisan}</p>
            <div className="product-price">{product.price}</div>
            <div className="product-languages">
              {product.languages.map(lang => (
                <span key={lang} className="language-tag">🌐 {lang}</span>
              ))}
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Seller Dashboard Component
function SellerDashboard() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [notification, setNotification] = useState(null);

  const mockOrders = [
    { id: '#ORD-1001', product: 'Hand Block Printed Scarf', quantity: 2, amount: '₹2,598', status: 'pending' },
    { id: '#ORD-1002', product: 'Embroidered Cushion Cover', quantity: 3, amount: '₹2,697', status: 'approved' },
    { id: '#ORD-1003', product: 'Terracotta Planter Set', quantity: 1, amount: '₹1,499', status: 'shipped' }
  ];

  const handleAddProduct = (e) => {
    e.preventDefault();
    setShowAddProduct(false);
    setNotification({ type: 'success', message: 'Product submitted for admin approval! You will receive an SMS notification.' });
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="section">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Seller Dashboard</h1>
          <button className="btn btn-primary" onClick={() => setShowAddProduct(true)}>
            ➕ Add New Product
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">24</div>
            <div className="stat-label">Total Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">156</div>
            <div className="stat-label">Total Orders</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">₹45,230</div>
            <div className="stat-label">This Month</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4.8⭐</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>

        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-brown)' }}>Recent Orders</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddProduct && (
        <div className="modal-overlay" onClick={() => setShowAddProduct(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Product</h2>
              <button className="close-btn" onClick={() => setShowAddProduct(false)}>×</button>
            </div>
            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-input" placeholder="Enter product name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Describe your product" required></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Price (₹)</label>
                <input type="number" className="form-input" placeholder="Enter price" required />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" required>
                  <option value="">Select category</option>
                  <option>Textiles</option>
                  <option>Pottery</option>
                  <option>Jewelry</option>
                  <option>Home Decor</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit for Approval
              </button>
            </form>
          </div>
        </div>
      )}

      {notification && (
        <div className={`notification ${notification.type}`}>
          <strong>📱 SMS Notification Sent!</strong>
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
}

// Admin Panel Component
function AdminPanel() {
  const [pendingProducts, setPendingProducts] = useState([
    { id: 1, name: 'Handmade Jewelry Set', artisan: 'Priya Devi', price: '₹1,899', status: 'pending' },
    { id: 2, name: 'Bamboo Basket', artisan: 'Radha Kumari', price: '₹599', status: 'pending' }
  ]);

  const [pendingOrders, setPendingOrders] = useState([
    { id: '#ORD-2001', customer: 'John Smith', product: 'Hand Block Printed Scarf', amount: '₹2,598', status: 'pending' },
    { id: '#ORD-2002', customer: 'Emma Wilson', product: 'Terracotta Planter Set', amount: '₹1,499', status: 'pending' }
  ]);

  const [notification, setNotification] = useState(null);

  const handleApproveProduct = (productId) => {
    setPendingProducts(prev => prev.map(p => p.id === productId ? { ...p, status: 'approved' } : p));
    setNotification({ type: 'success', message: 'Product approved! SMS notification sent to artisan.' });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleApproveOrder = (orderId) => {
    setPendingOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'approved' } : o));
    setNotification({ type: 'success', message: 'Order approved! SMS notifications sent to seller and customer.' });
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="section">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin Panel</h1>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">89</div>
            <div className="stat-label">Total Artisans</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">342</div>
            <div className="stat-label">Total Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1,247</div>
            <div className="stat-label">Total Orders</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">₹8.4L</div>
            <div className="stat-label">Total Revenue</div>
          </div>
        </div>

        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-brown)' }}>Pending Product Approvals</h3>
        <div className="table-container" style={{ marginBottom: '3rem' }}>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Artisan</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.artisan}</td>
                  <td>{product.price}</td>
                  <td>
                    <span className={`status-badge status-${product.status}`}>
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    {product.status === 'pending' && (
                      <button 
                        className="btn btn-primary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        onClick={() => handleApproveProduct(product.id)}
                      >
                        ✓ Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-brown)' }}>Pending Order Approvals</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    {order.status === 'pending' && (
                      <button 
                        className="btn btn-primary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        onClick={() => handleApproveOrder(order.id)}
                      >
                        ✓ Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {notification && (
        <div className={`notification ${notification.type}`}>
          <strong>📱 SMS Notification Sent!</strong>
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
}

// Payment Modal Component
function PaymentModal({ product, onClose }) {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!showSuccess ? (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Complete Purchase</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--primary-brown)', marginBottom: '1rem' }}>{product.name}</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--terracotta)' }}>{product.price}</p>
              <p style={{ color: 'var(--sage-green)' }}>By {product.artisan}</p>
            </div>

            <h3 style={{ color: 'var(--primary-brown)', marginBottom: '1rem' }}>Select Payment Method</h3>
            <div className="payment-options">
              <div 
                className={`payment-option ${selectedPayment === 'upi' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('upi')}
              >
                <span className="payment-icon">📱</span>
                <div>
                  <strong>UPI Payment</strong>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Pay via Google Pay, PhonePe, Paytm</p>
                </div>
              </div>
              
              <div 
                className={`payment-option ${selectedPayment === 'razorpay' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('razorpay')}
              >
                <span className="payment-icon">💳</span>
                <div>
                  <strong>Razorpay</strong>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Credit/Debit Card, Net Banking</p>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.5rem' }}
              onClick={handlePayment}
              disabled={!selectedPayment}
            >
              Complete Payment
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>✅</div>
            <h2 className="modal-title" style={{ marginBottom: '1rem' }}>Payment Successful!</h2>
            <p style={{ color: 'var(--sage-green)', fontSize: '1.1rem' }}>
              Your order has been placed successfully.
            </p>
            <p style={{ marginTop: '1rem' }}>
              📱 SMS confirmation sent to your mobile number.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Green Basket</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Meet the Artisans</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">Textiles</a></li>
            <li><a href="#">Pottery</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Home Decor</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Green Basket. Empowering Rural Indian Women Artisans. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} currentView={currentView} />
      
      {currentView === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <ArtisanProfiles artisans={mockArtisans.slice(0, 4)} />
          <ProductListings products={mockProducts.slice(0, 4)} onProductClick={handleProductClick} />
        </>
      )}

      {currentView === 'artisans' && (
        <ArtisanProfiles artisans={mockArtisans} />
      )}

      {currentView === 'products' && (
        <ProductListings products={mockProducts} onProductClick={handleProductClick} />
      )}

      {currentView === 'seller' && (
        <SellerDashboard />
      )}

      {currentView === 'admin' && (
        <AdminPanel />
      )}

      {selectedProduct && (
        <PaymentModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
