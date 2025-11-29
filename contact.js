document.addEventListener('DOMContentLoaded', function () {
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


});


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
                if (value) {
                    const cleanPhone = value.replace(/\D/g, '');
                    if (!/^(010|011|012|015)\d{8}$/.test(cleanPhone))
                        return { valid: false, msg: 'Must start with 010, 011, 012, or 015 + 8 digits' };
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
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) errorElement.remove();
    }

    function clearAllErrors() {
        document.querySelectorAll('.error-field').forEach(f => f.classList.remove('error-field'));
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
        `;
        document.body.appendChild(n);
        setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 400); }, 4000);
    }

    // --- Format Phone Number ---
    function formatPhoneNumber(field) {
        let value = field.value.replace(/\D/g, '').substring(0, 11);
        if (value.length > 7) value = value.substring(0, 3) + '-' + value.substring(3, 7) + '-' + value.substring(7);
        else if (value.length > 3) value = value.substring(0, 3) + '-' + value.substring(3);
        field.value = value;
    }

    // --- Add blur/input validation ---
    const fields = ['firstName', 'lastName', 'email', 'phone', 'message', 'subject'];
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
            showNotification('Please correct the errors in the form before submitting.', 'error');
            return;
        }

        // Prepare submit button
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Sending...';
        submitBtn.disabled = true;

        const timestamp = new Date().toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        const ownerPayload = {
            to_email: "egytopia3@gmail.com",
            user_name: "Egytopia Team",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone || "Not provided",
            subject: formData.subject,
            message: formData.message,
            name: `${formData.firstName} ${formData.lastName}`,
            timestamp
        };

        emailjs.send(ACCOUNT1_CONFIG.SERVICE_ID, ACCOUNT1_CONFIG.TEMPLATE_ID, ownerPayload)
            .then(res => {
                console.log('Owner email sent:', res);
                // Send to user
                const userPayload = {
                    to_email: formData.email,
                    user_name: formData.firstName,
                    subject: formData.subject,
                    timestamp
                };
                emailjs.init(ACCOUNT2_CONFIG.PUBLIC_KEY);
                return emailjs.send(ACCOUNT2_CONFIG.SERVICE_ID, ACCOUNT2_CONFIG.TEMPLATE_ID, userPayload);
            })
            .then(res => {
                console.log('User auto-reply sent:', res);
                showNotification('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 'success');
                contactForm.reset();
            })
            .catch(err => {
                console.error('EmailJS error:', err);
                showNotification('Failed to send message. Please try again later or contact us directly.', 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });
});
