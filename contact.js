// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });

            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Check if this is a checkout redirect
    const urlParams = new URLSearchParams(window.location.search);
    const isCheckout = urlParams.get('checkout') === 'true';
    
    if (isCheckout) {
        setupCheckoutForm();
    }
});

function setupCheckoutForm() {
    // Get cart data from localStorage or shared manager
    const cartItems = window.cartManager ? window.cartManager.getCartItems() : [];
    const cartSubtotal = window.cartManager ? window.cartManager.getCartTotal() : 0;
    
    if (cartItems.length === 0) {
        // No items in cart, redirect back
        setTimeout(() => {
            window.location.href = 'cart.html';
        }, 2000);
        return;
    }
    
    // Calculate all prices
    const shippingCost = 50;
    const taxRate = 0.14; // 14%
    const taxAmount = cartSubtotal * taxRate;
    const totalAmount = cartSubtotal + shippingCost + taxAmount;
    
    // Show checkout indicator
    const checkoutIndicator = document.getElementById('checkout-indicator');
    if (checkoutIndicator) {
        checkoutIndicator.style.display = 'flex';
    }
    
    // Update form header
    const formHeader = document.getElementById('form-main-title');
    const formSubHeader = document.getElementById('form-sub-title');
    
    if (formHeader) {
        formHeader.textContent = 'Complete Your Order';
    }
    
    if (formSubHeader) {
        formSubHeader.textContent = `Final step: Enter your details to complete your purchase`;
    }
    
    // Update submit button
    const submitButton = document.getElementById('submit-button-text');
    if (submitButton) {
        submitButton.textContent = 'Place Order & Pay';
    }
    
    // Set subject to "Order" automatically
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect) {
        subjectSelect.value = 'Order';
    }
    
    // Create order summary in message field
    const messageField = document.getElementById('message');
    if (messageField) {
        let orderSummary = `ORDER CONFIRMATION\n\n`;
        orderSummary += `Customer: [Please enter your name above]\n`;
        orderSummary += `Shipping to: [Please enter address above]\n`;
        orderSummary += `Phone: [Please enter phone above]\n\n`;
        
        orderSummary += `ITEMS ORDERED:\n`;
        cartItems.forEach(item => {
            const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
            const itemTotal = itemPrice * item.quantity;
            orderSummary += `• ${item.title} x${item.quantity} - ${itemTotal.toLocaleString()} EGP\n`;
        });
        
        orderSummary += `\nPRICE BREAKDOWN:\n`;
        orderSummary += `Subtotal: ${cartSubtotal.toLocaleString()} EGP\n`;
        orderSummary += `Shipping: ${shippingCost.toLocaleString()} EGP\n`;
        orderSummary += `Tax (14%): ${taxAmount.toLocaleString()} EGP\n`;
        orderSummary += `TOTAL TO PAY: ${totalAmount.toLocaleString()} EGP\n\n`;
        
        orderSummary += `Please confirm all details above are correct.`;
        
        messageField.value = orderSummary;
        
        // Make it read-only but keep it for form submission
        messageField.readOnly = true;
        messageField.style.backgroundColor = '#f5f5f5';
        messageField.style.minHeight = '250px';
        messageField.style.fontFamily = 'monospace';
        messageField.style.lineHeight = '1.5';
        messageField.style.padding = '15px';
        messageField.style.borderRadius = '8px';
        messageField.style.border = '1px solid #ddd';
    }
    
    // Show and populate order summary section
    const orderSummarySection = document.getElementById('checkout-order-summary');
    const orderItemsList = document.getElementById('order-items-list');
    
    if (orderSummarySection && orderItemsList) {
        orderSummarySection.classList.add('active');
        
        // Populate order items
        orderItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
            const itemTotal = itemPrice * item.quantity;
            
            const itemRow = document.createElement('div');
            itemRow.className = 'order-item-row';
            itemRow.innerHTML = `
                <div class="order-item-name">${item.title} x${item.quantity}</div>
                <div class="order-item-details">${itemTotal.toLocaleString()} EGP</div>
            `;
            orderItemsList.appendChild(itemRow);
        });
        
        // Update totals display
        document.getElementById('order-subtotal').textContent = `${cartSubtotal.toLocaleString()} EGP`;
        document.getElementById('order-shipping').textContent = `${shippingCost.toLocaleString()} EGP`;
        document.getElementById('order-tax').textContent = `${taxAmount.toLocaleString()} EGP`;
        document.getElementById('order-total').textContent = `${totalAmount.toLocaleString()} EGP`;
    }
    
    // Add address field requirement for checkout
    const addressField = document.getElementById('address');
    if (addressField) {
        addressField.required = true;
        addressField.placeholder = "Enter your shipping address *";
        
        // Update the label
        const addressLabel = addressField.previousElementSibling;
        if (addressLabel && addressLabel.classList.contains('form-label')) {
            addressLabel.innerHTML = 'Shipping Address *';
        }
    }
    
    // Add cart data to session storage with all price details
    sessionStorage.setItem('checkoutCart', JSON.stringify({
        items: cartItems,
        subtotal: cartSubtotal,
        shipping: shippingCost,
        tax: taxAmount,
        total: totalAmount,
        timestamp: new Date().toISOString()
    }));
}

/* Contact Form JavaScript */
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const ACCOUNT1_CONFIG = {
        SERVICE_ID: "service_b1ms28k",
        TEMPLATE_ID: "template_xl5b5e8",
        PUBLIC_KEY: "lNgIYQ5Dz21bek-gV"
    };
    const ACCOUNT2_CONFIG = {
        SERVICE_ID: "service_w8a0x2n",
        TEMPLATE_ID: "template_9mvq3va",
        PUBLIC_KEY: "fS0IjqK1HUI66rjf3"
    };

    // Initialize EmailJS
    emailjs.init(ACCOUNT1_CONFIG.PUBLIC_KEY);

    // --- Validation Function ---
    function validateFieldValue(fieldId, value) {
        value = value.trim();
        switch (fieldId) {
            case 'firstName':
            case 'lastName':
                if (!value) return { valid: false, msg: 'This field is required' };
                if (!/^[A-Za-z\u00C0-\u017F\s\-']+$/.test(value)) return { valid: false, msg: 'Only letters allowed' };
                if (value.length < 2) return { valid: false, msg: 'At least 2 characters required' };
                break;
            case 'email':
                if (!value) return { valid: false, msg: 'Email is required' };
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { valid: false, msg: 'Invalid email address' };
                break;
            case 'phone':
                if (!value) return { valid: false, msg: 'Phone number is required' };
                const cleanPhone = value.replace(/\D/g, '');
                if (!/^(010|011|012|015)\d{8}$/.test(cleanPhone))
                    return { valid: false, msg: 'Must start with 010, 011, 012, or 015 + 8 digits' };
                break;
            case 'address':
                // Check if this is checkout
                const urlParams = new URLSearchParams(window.location.search);
                const isCheckout = urlParams.get('checkout') === 'true';
                if (isCheckout && !value) {
                    return { valid: false, msg: 'Shipping address is required for orders' };
                }
                break;
            case 'message':
                if (!value) return { valid: false, msg: 'Message is required' };
                if (value.length < 10) return { valid: false, msg: 'At least 10 characters required' };
                break;
            case 'subject':
                if (!value) return { valid: false, msg: 'Please select a subject' };
                break;
        }
        return { valid: true, msg: '' };
    }

    // --- Show & Clear Error ---
    function showFieldError(field, message) {
        field.classList.add('error-field');
        field.style.borderColor = '#e74c3c';
        field.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.1)';
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.cssText = 'color:#e74c3c; font-size:14px; margin-top:5px; display:block;';
    }

    function clearFieldError(field) {
        field.classList.remove('error-field');
        field.style.borderColor = '';
        field.style.boxShadow = '';
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) errorElement.remove();
    }

    function clearAllErrors() {
        document.querySelectorAll('.error-field').forEach(f => {
            f.classList.remove('error-field');
            f.style.borderColor = '';
            f.style.boxShadow = '';
        });
        document.querySelectorAll('.error-message').forEach(m => m.remove());
    }

    function showNotification(message, type = 'success') {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        const n = document.createElement('div');
        n.className = `notification ${type}`;
        n.textContent = message;
        n.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#1a2f3a' : '#e74c3c'};
            color: #e9d8b6;
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
            z-index: 10000;
            transition: opacity 0.4s ease;
            font-weight: 500;
        `;
        document.body.appendChild(n);
        setTimeout(() => { 
            n.style.opacity = '0'; 
            setTimeout(() => n.remove(), 400); 
        }, 4000);
    }

    // --- Format Phone Number ---
    function formatPhoneNumber(field) {
        let value = field.value.replace(/\D/g, '').substring(0, 11);
        if (value.length > 7) value = value.substring(0, 3) + '-' + value.substring(3, 7) + '-' + value.substring(7);
        else if (value.length > 3) value = value.substring(0, 3) + '-' + value.substring(3);
        field.value = value;
    }

    // --- Add blur/input validation ---
    const fields = ['firstName', 'lastName', 'email', 'phone', 'address', 'message', 'subject'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            clearFieldError(field);
            if (fieldId === 'phone') formatPhoneNumber(field);
        });
        if (field.tagName === 'SELECT') {
            field.addEventListener('change', () => clearFieldError(field));
        }
    });

    function validateField(field) {
        const { valid, msg } = validateFieldValue(field.id, field.value);
        if (!valid) showFieldError(field, msg);
        return valid;
    }

    // --- Form Submit ---
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearAllErrors();

        // Check if this is a checkout submission
        const urlParams = new URLSearchParams(window.location.search);
        const isCheckout = urlParams.get('checkout') === 'true';
        let cartData = null;
        let cartSubtotal = 0;
        let shippingCost = 0;
        let taxAmount = 0;
        let totalAmount = 0;
        
        if (isCheckout) {
            // Retrieve cart data from sessionStorage
            const checkoutData = sessionStorage.getItem('checkoutCart');
            if (checkoutData) {
                cartData = JSON.parse(checkoutData);
                cartSubtotal = cartData.subtotal;
                shippingCost = cartData.shipping;
                taxAmount = cartData.tax;
                totalAmount = cartData.total;
            }
        }

        const formData = {};
        let isValid = true;

        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field) return;
            const { valid, msg } = validateFieldValue(fieldId, field.value);
            if (!valid) {
                showFieldError(field, msg);
                if (isValid) field.scrollIntoView({ behavior: 'smooth', block: 'center' });
                isValid = false;
            }
            formData[fieldId] = field.value.trim();
        });

        if (!isValid) {
            const errorMessage = isCheckout ? 
                'Please correct the errors in the form before placing your order.' : 
                'Please correct the errors in the form before sending your message.';
            showNotification(errorMessage, 'error');
            return;
        }

        // Prepare submit button with correct text
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Set correct button text based on checkout or regular form
        if (isCheckout) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Placing Order...';
        } else {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Sending Message...';
        }
        
        submitBtn.disabled = true;

        const timestamp = new Date().toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });

        // Generate unique order ID for checkout
        const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        // Prepare the message that will be sent
        let finalMessage = formData.message;
        if (isCheckout && cartData) {
            // Update the message with actual customer info
            finalMessage = finalMessage.replace('[Please enter your name above]', `${formData.firstName} ${formData.lastName}`);
            finalMessage = finalMessage.replace('[Please enter address above]', formData.address);
            finalMessage = finalMessage.replace('[Please enter phone above]', formData.phone);
            
            // Add order details to the message
            finalMessage += `\n\nORDER DETAILS:\n`;
            cartData.items.forEach(item => {
                const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
                const itemTotal = itemPrice * item.quantity;
                finalMessage += `• ${item.title} x${item.quantity} - ${itemTotal.toLocaleString()} EGP\n`;
            });
            finalMessage += `\nTotal Amount: ${totalAmount.toLocaleString()} EGP`;
            finalMessage += `\nOrder ID: ${orderId}`;
        }

        // Prepare email for owner (Egytopia)
        const ownerPayload = {
            to_email: "egytopia3@gmail.com",
            user_name: "Egytopia Team",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address || "Not provided",
            subject: isCheckout ? `ORDER: ${orderId}` : formData.subject,
            message: finalMessage,
            name: `${formData.firstName} ${formData.lastName}`,
            timestamp: timestamp,
            // Add all price details if checkout
            ...(isCheckout && cartData && {
                order_subtotal: `${cartSubtotal.toLocaleString()} EGP`,
                order_shipping: `${shippingCost.toLocaleString()} EGP`,
                order_tax: `${taxAmount.toLocaleString()} EGP`,
                order_total: `${totalAmount.toLocaleString()} EGP`,
                order_items_count: cartData.items.length,
                is_order: 'YES',
                order_id: orderId
            })
        };

        // Prepare email for customer
        const customerPayload = {
            to_email: formData.email,
            user_name: formData.firstName,
            subject: isCheckout ? `Order Confirmation: ${orderId}` : `Message Received: ${formData.subject}`,
            timestamp: timestamp,
            // Include comprehensive order details in customer email
            ...(isCheckout && cartData && {
                order_subtotal: `${cartSubtotal.toLocaleString()} EGP`,
                order_shipping: `${shippingCost.toLocaleString()} EGP`,
                order_tax: `${taxAmount.toLocaleString()} EGP`,
                order_total: `${totalAmount.toLocaleString()} EGP`,
                order_id: orderId,
                order_summary: cartData.items.map(item => 
                    `• ${item.title} x${item.quantity} - ${item.price} each`
                ).join('\n'),
                shipping_address: formData.address || "Not provided",
                phone_number: formData.phone,
                order_date: timestamp
            })
        };

        // Send email to owner first
        emailjs.send(ACCOUNT1_CONFIG.SERVICE_ID, ACCOUNT1_CONFIG.TEMPLATE_ID, ownerPayload)
            .then(res => {
                console.log('Owner email sent:', res);
                
                // Send confirmation email to customer
                emailjs.init(ACCOUNT2_CONFIG.PUBLIC_KEY);
                return emailjs.send(ACCOUNT2_CONFIG.SERVICE_ID, ACCOUNT2_CONFIG.TEMPLATE_ID, customerPayload);
            })
            .then(res => {
                console.log('Customer confirmation sent:', res);
                
                if (isCheckout) {
                    // Create phone notification message with total price
                    const phoneMessage = `✅ ORDER PLACED! Total: ${totalAmount.toLocaleString()} EGP. Order ID: ${orderId}. Customer: ${formData.firstName} ${formData.lastName}, Phone: ${formData.phone}.`;
                    
                    // Show success notification with total price
                    showNotification(`✅ Order placed successfully! Total: ${totalAmount.toLocaleString()} EGP. Check your email for confirmation.`, 'success');
                    
                    // Log phone message to console (you can integrate with SMS service here)
                    console.log('📱 PHONE MESSAGE:');
                    console.log('================');
                    console.log(phoneMessage);
                    console.log('================');
                    
                    // Clear cart using shared manager
                    if (window.cartManager) {
                        window.cartManager.clearCart();
                    }
                    
                    // Clear session storage
                    sessionStorage.removeItem('checkoutCart');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Redirect to home page with success parameters
                    setTimeout(() => {
                        window.location.href = `EgyHome.html?order=success&total=${totalAmount}&id=${orderId}`;
                    }, 3000);
                } else {
                    // Regular contact form submission
                    showNotification('📧 Message sent successfully! We will respond within 24 hours.', 'success');
                    contactForm.reset();
                }
            })
            .catch(err => {
                console.error('EmailJS error:', err);
                if (isCheckout) {
                    showNotification('❌ Failed to place order. Please try again or call us directly.', 'error');
                } else {
                    showNotification('❌ Failed to send message. Please try again later.', 'error');
                }
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });

    // Initialize phone formatting on input
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', function(e) {
            formatPhoneNumber(e.target);
        });
    }
});