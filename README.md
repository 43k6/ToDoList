<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tasks | Project Showcase</title>
    <style>
        :root {
            --primary-color: #1976d2; /* Material UI Blue */
            --bg-color: #f5f5f5;
            --text-dark: #333;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: var(--bg-color);
            color: var(--text-dark);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        header {
            text-align: center;
            border-bottom: 2px solid #eee;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .lang-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
        }
        .arabic {
            direction: rtl;
            text-align: right;
            border-left: 2px solid #eee;
            padding-left: 20px;
        }
        h1, h2 { color: var(--primary-color); }
        .tech-stack {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .tech-stack ul { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 10px; }
        .tech-stack li {
            background: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9em;
            border: 1px solid var(--primary-color);
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 30px;
        }
        .gallery img {
            width: 100%;
            border-radius: 8px;
            transition: transform 0.3s ease;
            cursor: pointer;
            border: 1px solid #ddd;
        }
        .gallery img:hover { transform: scale(1.05); }
        footer { text-align: center; margin-top: 40px; font-size: 0.8em; color: #777; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>مهامي - My Tasks App</h1>
        <p>A Professional To-Do List Application</p>
    </header>

    <div class="lang-section">
        <div class="english">
            <h2>About the Project</h2>
            <p>A React application designed to manage daily tasks efficiently. It features a clean UI with full CRUD functionality, allowing you to stay organized easily.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Add, Edit, and Delete tasks.</li>
                <li>Filter by Status (All, Done, Pending).</li>
                <li>Data persistence using <b>LocalStorage</b>.</li>
            </ul>
        </div>

        <div class="arabic">
            <h2>عن المشروع</h2>
            <p>تطبيق "مهامي" هو تطبيق مبني بلغة React لإدارة المهام اليومية بشكل فعال. يتميز بواجهة مستخدم بسيطة تدعم كافة عمليات الإضافة، التعديل، والحذف.</p>
            <h3>المميزات الرئيسية:</h3>
            <ul>
                <li>إضافة، تعديل، وحذف المهام.</li>
                <li>تصفية المهام (الكل، المنجز، غير المنجز).</li>
                <li>حفظ البيانات في <b>LocalStorage</b> لضمان عدم ضياعها.</li>
            </ul>
        </div>
    </div>

    <div class="tech-stack">
        <h3>🛠️ Tech Stack | التقنيات المستخدمة</h3>
        <ul>
            <li>React.js</li>
            <li>Material-UI (MUI)</li>
            <li>Context API (useContext)</li>
            <li>Hooks (useState, useEffect)</li>
            <li>Local Storage</li>
        </ul>
    </div>

    <h2>📸 Screenshots | معاينة المشروع</h2>
    <div class="gallery">
        <img src="assets/1(1).jpg" alt="Main Dashboard">
        <img src="assets/2.jpg" alt="Edit Task Modal">
        <img src="assets/3.jpg" alt="Delete Confirmation">
    </div>

    <footer>
        <p>Built with ❤️ using React & Material UI</p>
    </footer>
</div>

</body>
</html>
