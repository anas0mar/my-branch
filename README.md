<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Roott Implant System Alexandria Branch - Leading Implant Solutions">
    <title>Roott Implant System - فرع إسكندرية</title>
    <link rel="icon" type="image/png" href="https://github.com/anas0mar/my-branch/blob/main/Untitled%20design%20(1).png?raw=true">
    <link rel="icon" type="image/png" href="favicon.ico">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
            <img src="https://github.com/anas0mar/my-branch/blob/main/download.png" alt="Logo" style="width: 100px; height: auto;">

        <h1 id="site-title">Roott Implant System</h1>
        <h2 id="branch-title">فرع إسكندرية</h2>
        <p id="branch-address">العصافرة بحري، شارع سليمان الفارسي، بجوار جزارة الحمد</p>
    </header>

    <div class="language-selector">
        <select onchange="changeLanguage(this.value)">
            <option value="ar">العربية</option>
            <option value="en">English</option>
        </select>
    </div>

    <nav>
        <a href="#home" id="home-link">الرئيسية</a>
        <a href="#products" id="products-link">المنتجات</a>
        <a href="tel:+201099331401" id="contact-link">اتصل بنا</a>
    </nav>

    <section id="products">
        <h2 id="products-title">المنتجات</h2>
        <div class="products">
            <div class="product">
                <a href="https://trate.com/products/rootform/implants/" target="_blank">
                    <img src="https://i.postimg.cc/FstbTzm8/R4212-05-Content-of-the-package.png" alt="ROOTT R">
                    <h3 id="product1-name">غرسة أسنان ROOTT R</h3>
                </a>
            </div>
            <div class="product">
                <a href="https://trate.com/products/compressive/implants-c/" target="_blank">
                    <img src="https://i.postimg.cc/9FTb2TJc/16884689130.png" alt="ROOTT C COMPRESSIVE">
                    <h3 id="product2-name">غرسة أسنان ROOTT C COMPRESSIVE</h3>
                </a>
            </div>
            <div class="product">
                <a href="https://trate.com/products/compressive-m/implants-cm/" target="_blank">
                    <img src="https://i.postimg.cc/cHXjQ3Pp/C5010m-02-e1683015099570.webp" alt="ROOTT M">
                    <h3 id="product3-name">غرسة أسنان ROOTT M</h3>
                </a>
            </div>
        </div>
    </section>

    <section id="order">
        <h2 id="order-title">لطلب الأوردر، اضغط هنا:</h2>
        <button type="button" onclick="openOrderForm()" id="order-button">طلب أوردر</button>
    </section>

    <div id="order-form">
        <h3 id="order-form-title">اختر المنتجات والمقاسات والكميات التي ترغب في طلبها:</h3>
        <form id="whatsapp-form" action="" method="get" target="_blank">
            <div id="order-items"></div>
            <button type="button" onclick="addProduct()" id="add-product-button">إضافة منتج</button>
            <br><br>

            <div class="note-section">
                <label for="order-notes" id="note-label">ملاحظات:</label>
                <textarea id="order-notes" name="order-notes" placeholder="اكتب ملاحظاتك هنا..."></textarea>
            </div>

            <div class="customer-info">
                <h4>أدخل بياناتك</h4>
                <div class="note-section">
                    <label for="customer-name" id="name-label">الاسم:</label>
                    <input type="text" id="customer-name" name="customer-name" placeholder="اكتب اسمك هنا..." required>
                </div>
                <div class="note-section">
                    <label for="customer-email" id="email-label">البريد الإلكتروني:</label>
                    <input type="email" id="customer-email" name="customer-email" placeholder="اكتب بريدك الإلكتروني هنا..." required>
                </div>
                <div class="note-section">
                    <label for="customer-address" id="address-label">العنوان:</label>
                    <input type="text" id="customer-address" name="customer-address" placeholder="اكتب عنوانك هنا..." required>
                </div>
            </div>
            <br>
            <button type="button" id="submit-button" onclick="generateWhatsappLink()">إرسال الطلب</button>
        </form>
    </div>

    <footer>
        <p id="footer-text">حقوق النشر © 2025 Roott Implant System</p>
    </footer>

    <script src="script.js" defer></script>
</body>
</html>
