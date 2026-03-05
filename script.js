// ---------- WAIT FOR DOM ----------
document.addEventListener("DOMContentLoaded", function () {

    // ---------- GLOBAL CART ----------
    let cart = [];

    const services = [
        { id: 1, name: 'Dry Cleaning', price: 200 },
        { id: 2, name: 'Wash & Fold', price: 100 },
        { id: 3, name: 'Ironing', price: 30 },
        { id: 4, name: 'Stain Removal', price: 500 },
        { id: 5, name: 'Leather & Suede Cleaning', price: 999 },
        { id: 6, name: 'Wedding Dress Cleaning', price: 2800 }
    ];

    // ---------- RENDER SERVICES ----------
    function renderServiceCards() {

        const container = document.getElementById('serviceCards');
        container.innerHTML = '';

        services.forEach(service => {

            const card = document.createElement('div');
            card.className = 'service-card';

            card.innerHTML = `
                <h4>${service.name}</h4>
                <p>₹${service.price}</p>
                <button class="toggle-btn" data-id="${service.id}">
                    Add
                </button>
            `;

            container.appendChild(card);

        });

        // ---------- BUTTON CLICK ----------
        document.querySelectorAll('.toggle-btn').forEach(btn => {

            btn.addEventListener('click', function () {

                const id = parseInt(this.dataset.id);
                const service = services.find(s => s.id === id);

                const index = cart.findIndex(item => item.id === id);

                // ADD SERVICE
                if (index === -1) {

                    cart.push({ ...service });

                    this.innerText = "Remove";
                    this.style.backgroundColor = "#ef4444";

                }

                // REMOVE SERVICE
                else {

                    cart.splice(index, 1);

                    this.innerText = "Add";
                    this.style.backgroundColor = "#2563eb";

                }

                updateCart();

            });

        });

    }

    // ---------- UPDATE CART ----------
    function updateCart() {

        const tbody = document.getElementById('cartBody');
        const totalSpan = document.getElementById('cartTotal');

        tbody.innerHTML = '';

        let total = 0;

        cart.forEach((item, index) => {

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
            `;

            tbody.appendChild(row);

            total += item.price;

        });

        totalSpan.innerText = `Total: ₹${total}`;

    }

    // ---------- HERO BUTTON SCROLL ----------
    document.querySelectorAll(".book-smooth").forEach(button => {

        button.addEventListener("click", function(e){

            e.preventDefault();

            const target = this.getAttribute("data-target");
            const section = document.querySelector(target);

            if(section){
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    // ---------- BOOK NOW ----------
    document.getElementById('bookNowBtn').addEventListener('click', function () {

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const successDiv = document.getElementById('successMessage');

        if (!name || !email || !phone) {
            alert("Please fill all fields");
            return;
        }

        if (!validateEmail(email)) {
            alert("Enter valid email");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Enter valid 10 digit phone number");
            return;
        }

        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        const serviceList = cart.map(item => `${item.name} (₹${item.price})`).join(', ');
        const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

        emailjs.send(
            "service_d24e97j",
            "template_q60szot",
            {
                user_name: name,
                user_email: email,
                user_phone: phone,
                services: serviceList,
                total: totalAmount
            },
            "piLPSneJSmEHD4JPR"
        )
        .then(function () {

            successDiv.innerText =
                "Thank you For Booking the Service! We will get back to you soon!";

            cart = [];
            updateCart();

            document.getElementById('fullName').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";

            // Reset buttons
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.innerText = "Add";
                btn.style.backgroundColor = "#2563eb";
            });

        })
        .catch(function (error) {

            console.log("FULL ERROR:", error);
            alert("Email failed.");

        });

    });

    // ---------- VALIDATION ----------
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ---------- INITIALIZE ----------
    renderServiceCards();
    updateCart();

});
