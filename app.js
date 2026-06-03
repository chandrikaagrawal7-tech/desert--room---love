// Desert Room - Safari E-commerce Application Logic

// Global Application State
const state = {
    currency: 'INR',
    exchangeRate: 83.5, // 1 USD = 83.5 INR
    activePackage: null,
    searchParams: {
        date: '',
        guests: 1,
        type: 'all'
    },
    booking: {
        date: '',
        guests: 1,
        addons: [],
        travelers: [],
        payment: {}
    },
    packages: {
        'sunset-camel': {
            id: 'sunset-camel',
            name: 'Sunset Camel Tour',
            priceINR: 800,
            image: 'assets/camel_sunset.png',
            duration: '4 Hours',
            category: 'day',
            highlights: ['Camel Ridge Ride', 'Sunset Tea & Snacks', 'Local Musician Tour']
        },
        'imperial-camp': {
            id: 'imperial-camp',
            name: 'Imperial Dunes Overnight Camp',
            priceINR: 9500,
            image: 'assets/overnight_camp.png',
            duration: '1 Night / 2 Days',
            category: 'overnight',
            highlights: ['Private Luxury Tent', 'Rajasthani Feast', 'Folk Dance Night']
        },
        'jeep-stargazing': {
            id: 'jeep-stargazing',
            name: 'Dune Bashing & Stargazing Jeep Tour',
            priceINR: 7000,
            image: 'assets/jeep_dunes.png',
            duration: '6 Hours',
            category: 'adventure',
            highlights: ['4x4 Dune Bashing', 'Astronomy Guide', 'Private Dune Dinner']
        },
        'paramotoring': {
            id: 'paramotoring',
            name: 'Desert Paramotoring (Sky Safari)',
            priceINR: 5000,
            image: 'assets/paramotoring.png',
            duration: '15 Mins',
            category: 'adventure',
            highlights: ['Co-pilot Included', 'Safety Harness Fitted', 'HD Action Cam Footage']
        },
        'quad-bike': {
            id: 'quad-bike',
            name: 'ATV Quad Bike Dune Ride',
            priceINR: 2000,
            image: 'assets/quad_bike.png',
            duration: '30 Mins',
            category: 'adventure',
            highlights: ['250cc Power ATV', 'Desert Track Guide', 'Helmet & Safety Gear']
        },
        'parasailing': {
            id: 'parasailing',
            name: 'Desert Parasailing Experience',
            priceINR: 1500,
            image: 'assets/parasailing.png',
            duration: '20 Mins',
            category: 'adventure',
            highlights: ['4x4 Towing Vehicle', 'Parachute Equipment', 'Sunset Sky Views']
        },
        'village-safari': {
            id: 'village-safari',
            name: 'Traditional Desert Village Safari',
            priceINR: 2000,
            image: 'assets/village_safari.png',
            duration: '5 Hours',
            category: 'day',
            highlights: ['Kuldhara Ghost Town Visit', 'Clay Pottery Workshop', 'Rajasthani Home Lunch']
        },
        'dune-dinner': {
            id: 'dune-dinner',
            name: 'Luxury Candlelit Dune Dinner',
            priceINR: 4500,
            image: 'assets/dune_dinner.png',
            duration: '4 Hours',
            category: 'day',
            highlights: ['Secluded Dune Setup', 'Live Rajasthani Music', '4-Course Traditional Feast']
        },
        'overnight-camel': {
            id: 'overnight-camel',
            name: 'Overnight Camel Stargazing Safari',
            priceINR: 2500,
            image: 'assets/stargazing_bed.png',
            duration: '1 Night / 2 Days',
            category: 'overnight',
            highlights: ['Dune Campfire Cooking', 'Sleeping Under Stars', 'Sunrise Camel Ride']
        },
        'half-day-camel': {
            id: 'half-day-camel',
            name: 'Half-Day Desert Camel Safari',
            priceINR: 1000,
            image: 'assets/camel_sunset.png',
            duration: '6 Hours',
            category: 'day',
            highlights: ['Afternoon Dune Trek', 'Desert Village Stop', 'Fireside Sunset Dinner']
        },
        'full-day-camel': {
            id: 'full-day-camel',
            name: 'Full-Day Wilderness Camel Safari',
            priceINR: 3000,
            image: 'assets/camel_day.png',
            duration: '12 Hours',
            category: 'day',
            highlights: ['Morning Oasis Trek', 'Desert Shade Picnic', 'Sunset Ridge Campfire']
        },
        'jeep-wildlife': {
            id: 'jeep-wildlife',
            name: 'Desert National Park Wildlife Jeep Tour',
            priceINR: 2100,
            image: 'assets/jeep_wildlife.png',
            duration: '5 Hours',
            category: 'adventure',
            highlights: ['Wildlife Park Entry', 'Gazelle & Fox Spotting', 'Naturalist Guide']
        },
        'jeep-heritage': {
            id: 'jeep-heritage',
            name: 'Ghost Town & Khabha Fort Jeep Tour',
            priceINR: 3000,
            image: 'assets/jeep_heritage.png',
            duration: '4 Hours',
            category: 'day',
            highlights: ['Kuldhara Ruins Visit', 'Khabha Fort Entry', 'Local History Guide']
        },
        '1n2d-deluxe-tent': {
            id: '1n2d-deluxe-tent',
            name: '1N/2D Deluxe Desert Tent Stay',
            priceINR: 4500,
            image: 'assets/overnight_camp.png',
            duration: '1 Night / 2 Days',
            category: 'overnight',
            highlights: ['Attached Bathroom Tent', 'Rajasthani Buffet Dinner', 'Camel Sunset Ride']
        },
        '1n2d-premium-tent': {
            id: '1n2d-premium-tent',
            name: '1N/2D Premium Swiss AC Tent Stay',
            priceINR: 5500,
            image: 'assets/overnight_camp.png',
            duration: '1 Night / 2 Days',
            category: 'overnight',
            highlights: ['AC Canvas Swiss Tent', 'Dune Candlelit Dinner', 'Folk Dance Night']
        },
        '1n2d-luxury-cottage': {
            id: '1n2d-luxury-cottage',
            name: '1N/2D Luxury Stone Cottage Stay',
            priceINR: 8500,
            image: 'assets/desert_sunrise.png',
            duration: '1 Night / 2 Days',
            category: 'overnight',
            highlights: ['Sandstone Cottage Wall', 'Plunge Pool Access', 'Private Terrace Dune View']
        },
        '2n3d-deluxe-tent': {
            id: '2n3d-deluxe-tent',
            name: '2N/3D Deluxe Dunes Camping Safari',
            priceINR: 8500,
            image: 'assets/overnight_camp.png',
            duration: '2 Nights / 3 Days',
            category: 'overnight',
            highlights: ['2 Nights Stay', 'Village & Oasis Jeep Tours', 'Traditional Cooking Class']
        },
        '2n3d-premium-tent': {
            id: '2n3d-premium-tent',
            name: '2N/3D Premium Swiss Tent glamping',
            priceINR: 12500,
            image: 'assets/overnight_camp.png',
            duration: '2 Nights / 3 Days',
            category: 'overnight',
            highlights: ['AC Swiss Tent Stay', 'Jeep & Camel Safaris', 'Parasailing Experience']
        },
        '2n3d-luxury-cottage': {
            id: '2n3d-luxury-cottage',
            name: '2N/3D Luxury Stone Cottage Retreat',
            priceINR: 18500,
            image: 'assets/desert_sunrise.png',
            duration: '2 Nights / 3 Days',
            category: 'overnight',
            highlights: ['Sandstone Cottage Stay', 'Private Jeep & Camel Tours', 'Stargazing with Astronomer']
        }
    },
    addons: {
        'jeep-upgrade': {
            id: 'jeep-upgrade',
            name: 'Upgrade to 4x4 Private Jeep',
            priceINR: 2500,
            perGuest: true,
            description: 'Skip the camel ride and ride in style across dunes.'
        },
        'private-dinner': {
            id: 'private-dinner',
            name: 'Private Candlelit Dune Dinner',
            priceINR: 3500,
            perGuest: false,
            description: 'Secluded setup away from the main camp, perfect for couples.'
        },
        'sleeping-stars': {
            id: 'sleeping-stars',
            name: 'Overnight Sleeping Under Stars Setup',
            priceINR: 2000,
            perGuest: true,
            description: 'Traditional charpay bed set up directly on the dunes.'
        }
    },
    timerInterval: null
};

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearchWidget();
    initCurrencySwitcher();
    initThemeToggle();
    initLanguageSwitcher();
    initViewRouter();
    renderPackages();
});

// 1. Navigation & Scroll Effects
function initNavigation() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 2. View Router / Navigation Handler
function initViewRouter() {
    // Intercept click on links with data-target attribute
    document.querySelectorAll('[data-target]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = trigger.getAttribute('data-target');
            navigateTo(viewId);
        });
    });
}

function navigateTo(viewId) {
    // Clear page timers if navigating away from checkout
    if (viewId !== 'booking-view' && state.timerInterval) {
        clearInterval(state.timerInterval);
    }

    // Toggle active classes
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
        if (section.id === viewId) {
            section.classList.add('active');
        }
    });

    // Smooth scroll to top of view
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Currency System
function initCurrencySwitcher() {
    const currencyBtn = document.getElementById('currency-toggle');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', () => {
            state.currency = state.currency === 'INR' ? 'USD' : 'INR';
            currencyBtn.innerText = state.currency;
            
            // Recalculate and re-render across active components
            renderPackages();
            if (state.activePackage) {
                updateInvoice();
            }
        });
    }
}

function formatPrice(priceINR) {
    if (state.currency === 'INR') {
        return `₹${priceINR.toLocaleString('en-IN')}`;
    } else {
        const priceUSD = Math.round(priceINR / state.exchangeRate);
        return `$${priceUSD}`;
    }
}

// 4. Render Packages Catalog
function renderPackages() {
    const container = document.getElementById('packages-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filter = state.searchParams.type;
    
    Object.values(state.packages).forEach(pkg => {
        // Filter by category if search type is not 'all'
        if (filter !== 'all' && pkg.category !== filter) {
            return;
        }

        const highlightsHTML = pkg.highlights
            .map(h => `<li><i class="stars">★</i> ${h}</li>`)
            .join('');
            
        const cardHTML = `
            <div class="package-card">
                <div class="card-image-wrapper">
                    <span class="duration-tag">${pkg.duration}</span>
                    <img src="${pkg.image}" alt="${pkg.name}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${pkg.name}</h3>
                    <ul class="card-highlights">
                        ${highlightsHTML}
                    </ul>
                    <div class="card-footer">
                        <div class="card-price">
                            Starting from
                            <span>${formatPrice(pkg.priceINR)}</span>
                        </div>
                        <button class="btn-outline" onclick="selectPackage('${pkg.id}')">Book Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 5. Search Widget handler
function initSearchWidget() {
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        // Set default minimum date to today
        const dateInput = document.getElementById('search-date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            state.searchParams.date = document.getElementById('search-date').value;
            state.searchParams.guests = parseInt(document.getElementById('search-guests').value) || 1;
            state.searchParams.type = document.getElementById('search-type').value;

            // Save search params to global booking state
            state.booking.date = state.searchParams.date;
            state.booking.guests = state.searchParams.guests;

            // Trigger re-render to apply active category filter
            renderPackages();

            // Scroll down to the packages catalog
            const catalog = document.getElementById('catalog-view');
            catalog.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// 6. Select Package and Launch Checkout Funnel
window.selectPackage = function(packageId) {
    state.activePackage = state.packages[packageId];
    
    // Set checkout dates/guests to search widget parameters if they weren't set yet
    if (!state.booking.date) {
        const today = new Date().toISOString().split('T')[0];
        state.booking.date = today;
    }

    // Populate checkout fields
    document.getElementById('checkout-date').value = state.booking.date;
    document.getElementById('checkout-guests').value = state.booking.guests;

    // Reset checkout forms & addons selection
    state.booking.addons = [];
    
    // Switch to step 1 panel
    switchCheckoutStep(1);
    
    // Update invoice summaries
    updateInvoice();
    
    // Start temporary hold inventory timer
    startHoldTimer(15 * 60); // 15 minutes hold

    navigateTo('booking-view');
};

// 7. Checkout Funnel Step Controller
function switchCheckoutStep(step) {
    // Update visual progress indicators
    document.querySelectorAll('.step-item').forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index + 1 < step) {
            item.classList.add('completed');
        } else if (index + 1 === step) {
            item.classList.add('active');
        }
    });

    // Hide all forms, show active form
    document.querySelectorAll('.checkout-form-step').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(`step-${step}-form`).style.display = 'block';

    // Rerender specific forms as needed
    if (step === 1) {
        renderAddonsList();
    } else if (step === 2) {
        renderTravelersForm();
    } else if (step === 3) {
        renderPaymentGateway();
    }
}

// Render Addons
function renderAddonsList() {
    const list = document.getElementById('addons-list');
    if (!list) return;

    list.innerHTML = '';
    Object.values(state.addons).forEach(addon => {
        const isSelected = state.booking.addons.includes(addon.id);
        const priceLabel = addon.perGuest ? `${formatPrice(addon.priceINR)} / guest` : `${formatPrice(addon.priceINR)}`;
        
        const card = document.createElement('div');
        card.className = `addon-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="addon-info">
                <div class="addon-checkbox">
                    <i class="stars">✔</i>
                </div>
                <div class="addon-details">
                    <h4>${addon.name}</h4>
                    <p>${addon.description}</p>
                </div>
            </div>
            <div class="addon-price">+${priceLabel}</div>
        `;
        card.addEventListener('click', () => toggleAddon(addon.id));
        list.appendChild(card);
    });
}

function toggleAddon(addonId) {
    const idx = state.booking.addons.indexOf(addonId);
    if (idx > -1) {
        state.booking.addons.splice(idx, 1);
    } else {
        state.booking.addons.push(addonId);
    }
    renderAddonsList();
    updateInvoice();
}

// 8. Live Invoice Calculator
function updateInvoice() {
    if (!state.activePackage) return;

    // Grab configuration variables from inputs directly to stay in sync
    const checkoutGuests = parseInt(document.getElementById('checkout-guests').value) || 1;
    const checkoutDate = document.getElementById('checkout-date').value;
    state.booking.guests = checkoutGuests;
    state.booking.date = checkoutDate;

    // Update package info in invoice
    document.getElementById('invoice-package-name').innerText = state.activePackage.name;
    document.getElementById('invoice-date').innerText = checkoutDate;
    document.getElementById('invoice-guests').innerText = `${checkoutGuests} Traveler${checkoutGuests > 1 ? 's' : ''}`;

    // Calculations in INR
    const basePrice = state.activePackage.priceINR * checkoutGuests;
    
    // Addons calc
    let addonsPrice = 0;
    const addonsSummaryList = document.getElementById('invoice-addons-list');
    addonsSummaryList.innerHTML = '';
    
    state.booking.addons.forEach(addonId => {
        const addon = state.addons[addonId];
        const cost = addon.perGuest ? addon.priceINR * checkoutGuests : addon.priceINR;
        addonsPrice += cost;

        // Render line item on invoice
        const li = document.createElement('li');
        li.innerText = `${addon.name}: +${formatPrice(cost)}`;
        addonsSummaryList.appendChild(li);
    });

    const subtotal = basePrice + addonsPrice;
    const tax = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + tax;

    // Update displays
    document.getElementById('invoice-base-price').innerText = formatPrice(basePrice);
    document.getElementById('invoice-taxes').innerText = formatPrice(tax);
    document.getElementById('invoice-total').innerText = formatPrice(total);

    // Save final amounts to booking state
    state.booking.totalINR = total;
}

// Event Listeners for Checkout Form modifications
const checkGuestsInput = document.getElementById('checkout-guests');
const checkDateInput = document.getElementById('checkout-date');
if (checkGuestsInput) {
    checkGuestsInput.addEventListener('input', () => {
        if (checkGuestsInput.value < 1) checkGuestsInput.value = 1;
        updateInvoice();
    });
}
if (checkDateInput) {
    checkDateInput.addEventListener('change', () => {
        updateInvoice();
    });
}

// Proceed Step 1 -> Step 2
const toStep2Btn = document.getElementById('btn-to-step2');
if (toStep2Btn) {
    toStep2Btn.addEventListener('click', () => {
        if (!state.booking.date) {
            alert('Please select a valid date.');
            return;
        }
        switchCheckoutStep(2);
    });
}

// 9. Step 2: Traveler Details Form Builder
function renderTravelersForm() {
    const container = document.getElementById('travelers-forms-container');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 1; i <= state.booking.guests; i++) {
        const isLead = i === 1;
        const formHTML = `
            <div class="traveler-form-block" style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color)">
                <h4 style="margin-bottom: 15px; color: var(--title-color)">Traveler #${i} ${isLead ? '(Lead Traveler)' : ''}</h4>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="traveler-name-${i}">Full Name *</label>
                        <input type="text" id="traveler-name-${i}" class="req-field" placeholder="Firstname Lastname" required>
                    </div>
                    <div class="form-group">
                        <label for="traveler-passport-${i}">Passport Number / ID *</label>
                        <input type="text" id="traveler-passport-${i}" class="req-field" placeholder="Required for border zones" required>
                    </div>
                    ${isLead ? `
                    <div class="form-group">
                        <label for="traveler-email">Email Address *</label>
                        <input type="email" id="traveler-email" class="req-field" placeholder="yourname@gmail.com" required>
                    </div>
                    <div class="form-group">
                        <label for="traveler-phone">WhatsApp Number *</label>
                        <input type="tel" id="traveler-phone" class="req-field" placeholder="+1 234 567 890" required>
                    </div>
                    ` : ''}
                    <div class="form-group form-group-full">
                        <label for="traveler-diet-${i}">Dietary Restrictions & Allergies</label>
                        <select id="traveler-diet-${i}">
                            <option value="none">None</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="gluten-free">Gluten-Free</option>
                            <option value="halal">Halal</option>
                            <option value="other">Other (Specify in notes)</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += formHTML;
    }
}

// Proceed Step 2 -> Step 3
const toStep3Btn = document.getElementById('btn-to-step3');
if (toStep3Btn) {
    toStep3Btn.addEventListener('click', () => {
        // Simple client form validation
        let allValid = true;
        const requiredFields = document.querySelectorAll('#step-2-form .req-field');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                allValid = false;
            } else {
                field.style.borderColor = 'var(--border-color)';
            }
        });

        const emailField = document.getElementById('traveler-email');
        if (emailField && !validateEmail(emailField.value)) {
            emailField.style.borderColor = 'red';
            allValid = false;
        }

        if (!allValid) {
            alert('Please fill out all required fields marked with * with valid information.');
            return;
        }

        // Store details in state
        state.booking.travelers = [];
        for (let i = 1; i <= state.booking.guests; i++) {
            const trav = {
                name: document.getElementById(`traveler-name-${i}`).value,
                passport: document.getElementById(`traveler-passport-${i}`).value,
                diet: document.getElementById(`traveler-diet-${i}`).value
            };
            if (i === 1) {
                trav.email = document.getElementById('traveler-email').value;
                trav.phone = document.getElementById('traveler-phone').value;
            }
            state.booking.travelers.push(trav);
        }

        switchCheckoutStep(3);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Back buttons
document.getElementById('btn-back-to-step1').addEventListener('click', () => {
    switchCheckoutStep(1);
});
document.getElementById('btn-back-to-step2').addEventListener('click', () => {
    switchCheckoutStep(2);
});

// 10. Step 3: Payment Simulation
function renderPaymentGateway() {
    // Populate simple card detail parameters or listeners
    const payBtn = document.getElementById('btn-submit-payment');
    const totalLabel = payBtn.querySelector('.pay-amount');
    totalLabel.innerText = formatPrice(state.booking.totalINR);
}

// Process Payment Submission
const paymentForm = document.getElementById('payment-form-element');
if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const payBtn = document.getElementById('btn-submit-payment');
        const cardNumInput = document.getElementById('card-number');
        const cardExpiryInput = document.getElementById('card-expiry');
        const cardCvcInput = document.getElementById('card-cvc');

        // Basic fields validations
        if (cardNumInput.value.replace(/\s+/g, '').length < 15) {
            alert('Please enter a valid Card Number.');
            return;
        }
        if (!/^\d{2}\/\d{2}$/.test(cardExpiryInput.value)) {
            alert('Please enter expiration date as MM/YY.');
            return;
        }
        if (cardCvcInput.value.length < 3) {
            alert('Please enter a valid CVC.');
            return;
        }

        // Show mock processing state
        payBtn.disabled = true;
        payBtn.innerText = 'Processing Secure Payment...';
        
        setTimeout(() => {
            // Generate mock booking success codes
            const bookingRef = 'DR-' + Math.floor(100000 + Math.random() * 900000);
            
            // Build the Voucher details
            generateVoucher(bookingRef);
            
            // Stop lock timer
            if (state.timerInterval) clearInterval(state.timerInterval);
            
            // Redirect
            navigateTo('confirmation-view');
        }, 2500); // 2.5 seconds payment latency simulator
    });
}

// Helper auto-formatter for expiration date
const expiryInput = document.getElementById('card-expiry');
if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
        let val = expiryInput.value.replace(/\D/g, '');
        if (val.length >= 2) {
            expiryInput.value = val.slice(0, 2) + '/' + val.slice(2, 4);
        } else {
            expiryInput.value = val;
        }
    });
}

// Format card number with spaces
const cardInput = document.getElementById('card-number');
if (cardInput) {
    cardInput.addEventListener('input', (e) => {
        let val = cardInput.value.replace(/\s+/g, '').replace(/\D/g, '');
        let formatted = '';
        for (let i = 0; i < val.length; i++) {
            if (i > 0 && i % 4 === 0) formatted += ' ';
            formatted += val[i];
        }
        cardInput.value = formatted.slice(0, 19);
    });
}

// 11. Generate PDF Ticket Voucher with Custom SVG QR Code
function generateVoucher(bookingRef) {
    // Populate voucher markup
    document.getElementById('v-booking-ref').innerText = bookingRef;
    document.getElementById('v-package-name').innerText = state.activePackage.name;
    document.getElementById('v-package-detail-name').innerText = state.activePackage.name;
    document.getElementById('v-traveler').innerText = state.booking.travelers[0].name;
    document.getElementById('v-date').innerText = state.booking.date;
    document.getElementById('v-guests').innerText = `${state.booking.guests} Guest${state.booking.guests > 1 ? 's' : ''}`;
    
    // Build list of add-ons
    const addonsArr = state.booking.addons.map(id => state.addons[id].name);
    document.getElementById('v-addons').innerText = addonsArr.length > 0 ? addonsArr.join(', ') : 'No upgrades selected';
    document.getElementById('v-diet').innerText = state.booking.travelers[0].diet.toUpperCase();
    
    // Draw SVG QR Code dynamically
    const qrContainer = document.getElementById('v-qr-code');
    qrContainer.innerHTML = generateQRcodeSVG(`https://desertroom.com/verify?ref=${bookingRef}`);

    // Dynamically configure voucher WhatsApp action button with booking details
    const waBtn = document.getElementById('v-whatsapp-btn');
    if (waBtn) {
        const text = `Hi Mr. Lucky! I have just booked the ${state.activePackage.name} safari for ${state.booking.date} (${state.booking.guests} guest${state.booking.guests > 1 ? 's' : ''}). My booking reference is ${bookingRef}. Please coordinate my pickup.`;
        waBtn.href = `https://wa.me/919772020667?text=${encodeURIComponent(text)}`;
    }
}

// Dynamic SVG QR code generator (renders simple pixels in matrix format)
function generateQRcodeSVG(text) {
    // A simplified mockup generator that creates a unique styled QR-like pattern based on input hash
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="100" height="100" fill="#FFFFFF"/>`;
    
    // Draw the 3 outer positioning squares
    svg += `<rect x="5" y="5" width="25" height="25" fill="#1A3A5F" stroke="#FFFFFF" stroke-width="2"/>`;
    svg += `<rect x="10" y="10" width="15" height="15" fill="#FFFFFF"/>`;
    svg += `<rect x="13" y="13" width="9" height="9" fill="#1A3A5F"/>`;

    svg += `<rect x="70" y="5" width="25" height="25" fill="#1A3A5F" stroke="#FFFFFF" stroke-width="2"/>`;
    svg += `<rect x="75" y="10" width="15" height="15" fill="#FFFFFF"/>`;
    svg += `<rect x="78" y="13" width="9" height="9" fill="#1A3A5F"/>`;

    svg += `<rect x="5" y="70" width="25" height="25" fill="#1A3A5F" stroke="#FFFFFF" stroke-width="2"/>`;
    svg += `<rect x="10" y="75" width="15" height="15" fill="#FFFFFF"/>`;
    svg += `<rect x="13" y="78" width="9" height="9" fill="#1A3A5F"/>`;

    // Draw dummy data pixels inside matrix based on our text string hash
    for (let x = 0; x < 12; x++) {
        for (let y = 0; y < 12; y++) {
            // Skip positioning block areas
            if ((x < 4 && y < 4) || (x > 7 && y < 4) || (x < 4 && y > 7)) continue;
            
            const bit = ((hash >> (x + y)) & 1) === 0;
            if (bit) {
                const posX = 10 + x * 6.5;
                const posY = 10 + y * 6.5;
                svg += `<rect x="${posX}" y="${posY}" width="5" height="5" fill="#1A3A5F"/>`;
            }
        }
    }
    
    svg += `</svg>`;
    return svg;
}

// Action triggers
const printBtn = document.getElementById('btn-print-voucher');
if (printBtn) {
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// 12. Checkout Inventory Hold Timer
function startHoldTimer(durationSeconds) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    const display = document.getElementById('timer-count');
    let timer = durationSeconds;
    
    function updateTimer() {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        
        display.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (--timer < 0) {
            clearInterval(state.timerInterval);
            alert('Your booking reservation hold has expired. We have released the dune slots back to the public pool. Please re-select dates.');
            navigateTo('home-view');
        }
    }
    
    updateTimer();
    state.timerInterval = setInterval(updateTimer, 1000);
}

// 13. Theme Toggle Handler
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        // Check for saved preference, otherwise default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

// 14. Language Switcher Integration
function initLanguageSwitcher() {
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langMenuItems = document.querySelectorAll('#lang-menu li');
    const currentLangLabel = document.getElementById('current-lang');
    
    if (langToggle && langMenu) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
        
        // Hide menu when clicking outside
        document.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });
    }

    langMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const langCode = item.getAttribute('data-lang');
            currentLangLabel.innerText = langCode.toUpperCase();
            
            // Trigger Google Translate engine
            changeGoogleTranslateLanguage(langCode);
        });
    });
}

function changeGoogleTranslateLanguage(langCode) {
    const select = document.querySelector('select.goog-te-combo');
    if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
    } else {
        // If google translate hasn't loaded yet, try again in 500ms
        setTimeout(() => changeGoogleTranslateLanguage(langCode), 500);
    }
}
