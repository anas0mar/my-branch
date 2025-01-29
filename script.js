const productsData = {
        "ROOTT R": [
            "R3010", "R3012", "R3014", "R3016", "R3506", "R3508", "R3510", "R3512", "R3514", "R3516", "R3806", "R3808", "R3810", "R3812", "R3814", "R3816", "R4206", "R4208", "R4210", "R4212", "R4214", "R4216", "R4806", "R4808", "R4810", "R4812", "R4814", "R4816", "R5506", "R5508", "R5510", "R5512", "R5514", "R5516"
        ],
        "ROOTT C COMPRESSIVE": [
            "C3006", "C3008", "C3010", "C3012", "C3014", "C3016", "C3506", "C3508", "C3510", "C3512", "C3514", "C3516", "C4006", "C4008", "C4010", "C4012", "C4014", "C4016", "C4506", "C4508", "C4510", "C4512", "C4514", "C4516", "C5006", "C5008", "C5010", "C5012", "C5014", "C5016", "C5506", "C5508", "C5510", "C5512", "C5514", "C5516"
        ],
        "ROOTT M": [
            "C3006M", "C3008M", "C3010M", "C3012M", "C3014M", "C3016M", "C3506M", "C3508M", "C3510M", "C3512M", "C3514M", "C3516M", "C4006M", "C4008M", "C4010M", "C4012M", "C4014M", "C4016M", "C4506M", "C4508M", "C4510M", "C4512M", "C4514M", "C4516M", "C5006M", "C5008M", "C5010M", "C5012M", "C5014M", "C5016M", "C5506M", "C5508M", "C5510M", "C5512M", "C5514M", "C5516M"
        ]
    };

let orderItemCount = 0;

function addProduct() {
    orderItemCount++;

    const orderItemsContainer = document.getElementById("order-items");
    const orderItemDiv = document.createElement("div");
    orderItemDiv.classList.add("order-item");

    const productSelect = document.createElement("select");
    productSelect.name = `product-${orderItemCount}`;
    Object.keys(productsData).forEach(product => {
        const option = document.createElement("option");
        option.value = product;
        option.innerText = product;
        productSelect.appendChild(option);
    });

    const sizeSelect = document.createElement("select");
    sizeSelect.name = `size-${orderItemCount}`;
    productSelect.addEventListener("change", function () {
        const selectedProduct = this.value;
        sizeSelect.innerHTML = "";
        productsData[selectedProduct].forEach(size => {
            const sizeOption = document.createElement("option");
            sizeOption.value = size;
            sizeOption.innerText = size;
            sizeSelect.appendChild(sizeOption);
        });
    });
    productSelect.dispatchEvent(new Event("change"));

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "العدد";

    const removeButton = document.createElement("button");
    removeButton.innerText = "إزالة";
    removeButton.onclick = function () {
        orderItemDiv.remove();
    };

    orderItemDiv.appendChild(productSelect);
    orderItemDiv.appendChild(sizeSelect);
    orderItemDiv.appendChild(quantityInput);
    orderItemDiv.appendChild(removeButton);
    orderItemsContainer.appendChild(orderItemDiv);
}

function generateWhatsappLink() {
    const name = document.getElementById("customer-name").value;
    const email = document.getElementById("customer-email").value;
    const address = document.getElementById("customer-address").value;
    const notes = document.getElementById("order-notes").value;

    if (!name || !email || !address) {
        alert("الرجاء ملء جميع الحقول المطلوبة");
        return;
    }

    const orderItemsContainer = document.getElementById("order-items");
    const orderItemDivs = orderItemsContainer.getElementsByClassName("order-item");
    if (orderItemDivs.length === 0) {
        alert("الرجاء إضافة منتج واحد على الأقل");
        return;
    }

    let orderDetails = "";
    for (let itemDiv of orderItemDivs) {
        const product = itemDiv.querySelector("select[name^='product']").value;
        const size = itemDiv.querySelector("select[name^='size']").value;
        const quantity = itemDiv.querySelector("input").value;
        if (!product || !size || !quantity) {
            alert("الرجاء ملء جميع التفاصيل لكل منتج");
            return;
        }
        orderDetails += `${product} - ${size} - ${quantity}\n`;
    }

    const message = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالعنوان: ${address}\n\nالمنتجات:\n${orderDetails}\nملاحظات: ${notes}`;
    const whatsappLink = `https://wa.me/201099331401?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}

function openOrderForm() {
    document.getElementById("order-form").style.display = "block";
}

function changeLanguage(language) {
    const translations = {
        ar: {
            "site-title": "Roott Implant System",
            "branch-title": "فرع إسكندرية",
            "order-title": "لطلب الأوردر، اضغط هنا:",
            "add-product-button": "إضافة منتج",
            "submit-button": "إرسال الطلب"
        },
        en: {
            "site-title": "Roott Implant System",
            "branch-title": "Alexandria Branch",
            "order-title": "To place an order, click here:",
            "add-product-button": "Add Product",
            "submit-button": "Submit Order"
        }
    };

    const elements = translations[language];
    for (const id in elements) {
        document.getElementById(id).innerText = elements[id];
    }
}
