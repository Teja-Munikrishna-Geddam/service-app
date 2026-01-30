// Service costs mapping
const serviceCosts = {
    "AC Repair": "Rs.600/- + GST",
    "AC Service": "Rs.500/- + GST",
    "Fridge Service": "Rs.550/- +GST",
    "AC Installation": "Rs.1500/- +GST"
};

// Show modal on page load
window.onload = function() {
    document.getElementById('offerModal').style.display = 'flex'; // Changed to flex for centering
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
};


function openCharges() {
    document.getElementById('serviceModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('offerModal').style.display = 'none';
    document.getElementById('serviceModal').style.display = 'none';
}

// Update service cost display on selection
document.getElementById('serviceType').addEventListener('change', function() {
    const selectedService = this.value;
    const costDisplay = document.getElementById('serviceCostDisplay');
    if (selectedService && serviceCosts[selectedService]) {
        costDisplay.textContent = `Service Cost: ${serviceCosts[selectedService]}`;
    } else {
        costDisplay.textContent = 'Service Cost: Select a service to see the cost.';
    }
});

// Form submission to WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const service = document.getElementById('serviceType').value;
    const cost = serviceCosts[service] || 'N/A';
    
    // Construct WhatsApp message including cost
    const message = `New Technician Request:\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nService: ${service}\nEstimated Cost: ${cost}`;
    const whatsappUrl = `https://wa.me/+918828491981?text=${encodeURIComponent(message)}`; // Replace 1234567890 with your number
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    this.reset();
    document.getElementById('serviceCostDisplay').textContent = 'Service Cost: Select a service to see the cost.';
});
