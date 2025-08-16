// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Search Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');
    
    if (searchToggle && searchForm) {
        searchToggle.addEventListener('click', function() {
            searchForm.classList.toggle('active');
        });
    }
    
    // Add to Cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            addToCart(productId);
        });
    });
    
    // Add to Wishlist
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            toggleWishlist(productId);
        });
    });
    
    // Quick View
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            openQuickView(productId);
        });
    });
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            subscribeNewsletter(this);
        });
    }
    
    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-fade-in-up');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load
});

// Add to Cart Function
function addToCart(productId, quantity = 1) {
    // Show loading state
    const button = document.querySelector(`[data-product-id="${productId}"]`);
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="icon-loading"></i> جاري الإضافة...';
    button.disabled = true;
    
    // Salla API call
    salla.cart.add(productId, quantity)
        .then(response => {
            // Success
            showNotification('تم إضافة المنتج للسلة بنجاح', 'success');
            updateCartCount();
        })
        .catch(error => {
            // Error
            showNotification('حدث خطأ أثناء إضافة المنتج', 'error');
        })
        .finally(() => {
            // Reset button
            button.innerHTML = originalText;
            button.disabled = false;
        });
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const button = document.querySelector(`.wishlist-btn[data-product-id="${productId}"]`);
    
    salla.wishlist.toggle(productId)
        .then(response => {
            if (response.action === 'added') {
                button.classList.add('active');
                showNotification('تم إضافة المنتج للمفضلة', 'success');
            } else {
                button.classList.remove('active');
                showNotification('تم إزالة المنتج من المفضلة', 'info');
            }
        })
        .catch(error => {
            showNotification('حدث خطأ أثناء تحديث المفضلة', 'error');
        });
}

// Quick View
function openQuickView(productId) {
    // Implementation for quick view modal
    salla.product.fetch(productId)
        .then(product => {
            // Create and show quick view modal
            createQuickViewModal(product);
        })
        .catch(error => {
            showNotification('حدث خطأ أثناء تحميل المنتج', 'error');
        });
}

// Newsletter Subscription
function subscribeNewsletter(form) {
    const email = form.querySelector('input[name="email"]').value;
    const button = form.querySelector('button');
    const originalText = button.innerHTML;
    
    button.innerHTML = 'جاري الاشتراك...';
    button.disabled = true;
    
    salla.newsletter.subscribe(email)
        .then(response => {
            showNotification('تم الاشتراك في النشرة الإخبارية بنجاح', 'success');
            form.reset();
        })
        .catch(error => {
            showNotification('حدث خطأ أثناء الاشتراك', 'error');
        })
        .finally(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        });
}

// Update Cart Count
function updateCartCount() {
    salla.cart.fetch()
        .then(cart => {
            const cartBadges = document.querySelectorAll('.cart-action .badge');
            cartBadges.forEach(badge => {
                badge.textContent = cart.count;
                badge.style.display = cart.count > 0 ? 'block' : 'none';
            });
        });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

// Create Quick View Modal
function createQuickViewModal(product) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="product-quick-view">
                    <div class="product-images">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <div class="product-price">
                            <span class="current-price">${product.price}</span>
                            ${product.compare_price ? `<span class="original-price">${product.compare_price}</span>` : ''}
                        </div>
                        <div class="product-description">
                            ${product.description}
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                                أضف للسلة
                            </button>
                            <a href="${product.url}" class="btn btn-outline">
                                عرض التفاصيل
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Close modal events
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    
    // Add to cart from modal
    modal.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        addToCart(this.dataset.productId);
    });
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}