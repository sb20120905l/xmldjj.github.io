<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>东方树叶 · 致敬妈妈</title>
    <!-- 柔雅字体 & 图标库 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(145deg, #f2f8e9 0%, #e0efd3 100%);
            font-family: 'Quicksand', 'Noto Serif SC', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            position: relative;
            overflow-x: hidden;
        }

        /* 柔和背景装饰——漂浮的叶片光晕 */
        body::before {
            content: '';
            position: absolute;
            width: 280px;
            height: 280px;
            background: rgba(184, 210, 150, 0.25);
            border-radius: 50%;
            top: -60px;
            left: -80px;
            z-index: 0;
            filter: blur(70px);
        }

        body::after {
            content: '';
            position: absolute;
            width: 340px;
            height: 340px;
            background: rgba(255, 220, 190, 0.25);
            border-radius: 50%;
            bottom: -90px;
            right: -70px;
            z-index: 0;
            filter: blur(80px);
        }

        /* 主卡片 */
        .tea-card {
            position: relative;
            z-index: 10;
            max-width: 680px;
            width: 100%;
            background: rgba(255, 255, 255, 0.78);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 42px 42px 42px 42px;
            box-shadow: 0 28px 48px -20px rgba(60, 70, 40, 0.4),
                        0 8px 20px rgba(90, 110, 60, 0.15),
                        inset 0 2px 4px rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(200, 220, 170, 0.5);
            padding: 2.2rem 2rem 2.5rem 2rem;
            transition: all 0.2s ease;
        }

        /* 叶子装饰条 — 浮动小叶片 */
        .leaf-float {
            display: flex;
            justify-content: center;
            gap: 0.8rem 1.5rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            color: #7b9c6b;
            font-size: 1.7rem;
            opacity: 0.75;
        }

        .leaf-float i {
            filter: drop-shadow(0 4px 6px rgba(100, 120, 70, 0.2));
            animation: leafWave 4s infinite ease-in-out;
            transform-origin: center;
        }

        .leaf-float i:nth-child(2) {
            animation-delay: 0.6s;
            color: #8faf7a;
            font-size: 2rem;
        }
        .leaf-float i:nth-child(3) {
            animation-delay: 1.3s;
            color: #658354;
        }
        .leaf-float i:nth-child(4) {
            animation-delay: 0.2s;
            color: #b1c89b;
        }
        .leaf-float i:nth-child(5) {
            animation-delay: 1.8s;
        }

        @keyframes leafWave {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(5deg) scale(1.08); }
            50% { transform: rotate(-3deg) scale(1.02); }
            75% { transform: rotate(4deg) scale(1.04); }
            100% { transform: rotate(0deg) scale(1); }
        }

        /* 东方树叶 logo 感标题 */
        .brand {
            text-align: center;
            margin-bottom: 0.6rem;
        }

        .brand h1 {
            font-family: 'Noto Serif SC', 'Times New Roman', serif;
            font-size: 3.4rem;
            font-weight: 600;
            letter-spacing: 6px;
            color: #2f4b2f;
            text-shadow: 2px 2px 8px rgba(130, 150, 100, 0.3);
            line-height: 1.1;
            margin-bottom: 0.1rem;
            position: relative;
            display: inline-block;
        }

        .brand h1:before, .brand h1:after {
            content: "🌱";
            font-size: 2rem;
            opacity: 0.5;
            position: relative;
            top: -8px;
            margin: 0 12px;
            display: inline-block;
            transform: rotate(15deg);
        }
        .brand h1:after {
            content: "🍃";
            transform: rotate(-15deg) scaleX(-1);
        }

        /* 副标题 + 三八祝福 */
        .greeting {
            text-align: center;
            margin: 1.2rem 0 1.8rem 0;
        }

        .greeting .to-mom {
            font-size: 1.6rem;
            font-weight: 300;
            color: #5d754b;
            letter-spacing: 1px;
            background: rgba(240, 250, 230, 0.7);
            display: inline-block;
            padding: 0.4rem 2rem;
            border-radius: 60px;
            backdrop-filter: blur(4px);
            box-shadow: inset 0 1px 4px #fff, 0 4px 8px rgba(130, 140, 90, 0.15);
            margin-bottom: 0.8rem;
        }

        .greeting .festival {
            font-size: 2.4rem;
            font-weight: 600;
            line-height: 1.2;
            color: #5a3e2b;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem 1.2rem;
            flex-wrap: wrap;
        }

        .festival .big38 {
            font-family: 'Noto Serif SC', serif;
            font-size: 3.2rem;
            background: linear-gradient(130deg, #b1845b, #7b5e44);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            padding: 0 0.2rem;
            position: relative;
        }

        .festival .big38::before {
            content: "♡";
            font-size: 2rem;
            color: #e9b6a6;
            margin-right: 8px;
            font-weight: 300;
            -webkit-text-fill-color: initial;
            background: none;
            opacity: 0.8;
        }

        .festival .big38::after {
            content: "♡";
            font-size: 2rem;
            color: #e9b6a6;
            margin-left: 8px;
            font-weight: 300;
            -webkit-text-fill-color: initial;
        }

        .festival .mom-word {
            background: #fef7e9;
            padding: 0.2rem 1.2rem;
            border-radius: 50px;
            font-size: 1.9rem;
            border: 1px dashed #c5b28b;
            color: #6c4f32;
            box-shadow: 0 2px 6px rgba(170, 140, 100, 0.15);
        }

        /* 手绘风格茶具 + 妈妈孩子小图标 */
        .icon-family {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.2rem 1.8rem;
            flex-wrap: wrap;
            margin: 2rem 0 1.2rem;
            font-size: 2.4rem;
            color: #7f6b5a;
        }

        .icon-family .mom-icon {
            background: #f1cfb0;
            border-radius: 100px;
            padding: 0.5rem 1rem 0.5rem 1.2rem;
            box-shadow: 0 6px 0 #cfa776;
            transform: translateY(-3px);
        }

        .icon-family .child-icon {
            background: #fde4c2;
            border-radius: 100px;
            padding: 0.5rem 1.2rem 0.5rem 1rem;
            box-shadow: 0 6px 0 #dbb68c;
            transform: translateY(-3px);
        }

        .icon-family i {
            margin: 0 0.2rem;
        }

        /* 主祝福段落 — 像一封信 */
        .letter {
            background: rgba(255, 250, 240, 0.7);
            border-radius: 48px 24px 48px 24px;
            padding: 2rem 1.8rem;
            margin: 2rem 0 2rem 0;
            border: 1px solid rgba(200, 180, 140, 0.4);
            box-shadow: inset 0 0 0 2px #fffaf0, 0 10px 20px rgba(100, 80, 50, 0.1);
            line-height: 1.9;
            color: #3b3a2f;
        }

        .letter p {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            text-indent: 2em;
            word-break: break-word;
        }

        .letter p:last-of-type {
            margin-bottom: 0;
        }

        .letter .tea-quote {
            font-style: italic;
            text-align: center;
            text-indent: 0;
            font-size: 1.3rem;
            background: #e7efdb;
            padding: 0.8rem 0;
            border-radius: 36px;
            margin: 1.4rem 0 0.6rem;
            color: #3d5e3d;
            border-left: 6px solid #afc8a5;
            border-right: 6px solid #afc8a5;
        }

        .letter .tea-quote i {
            color: #887458;
            margin: 0 6px;
        }

        .signature {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.4rem 1rem;
            margin-top: 2rem;
            font-size: 1.4rem;
            color: #6b5840;
            border-top: 2px dotted #dac29c;
            padding-top: 1.4rem;
        }

        .signature .stamp {
            font-family: 'Noto Serif SC', serif;
            background: #cfb38b;
            color: #2b3f2b;
            padding: 0.2rem 1.2rem;
            border-radius: 40px;
            font-size: 1rem;
            letter-spacing: 2px;
            font-weight: 600;
            box-shadow: 0 2px 0 #7f6e4f;
            margin-left: 10px;
        }

        /* 底部小物 — 爱心与日期 */
        .footer-note {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1.5rem;
            color: #7a8f6a;
            font-size: 1.1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .footer-note .heart-tea {
            background: rgba(240, 240, 220, 0.7);
            padding: 0.3rem 1rem;
            border-radius: 40px;
            backdrop-filter: blur(2px);
        }

        .footer-note .date {
            font-weight: 300;
            background: #f0f0e0;
            padding: 0.3rem 1.5rem;
            border-radius: 40px;
        }

        .footer-note i {
            color: #c17171;
            margin: 0 4px;
        }

        /* 响应式优化 */
        @media (max-width: 480px) {
            .tea-card { padding: 1.5rem 1.2rem; }
            .brand h1 { font-size: 2.8rem; letter-spacing: 3px; }
            .brand h1:before, .brand h1:after { font-size: 1.4rem; margin: 0 5px; }
            .greeting .festival { font-size: 1.8rem; }
            .festival .big38 { font-size: 2.6rem; }
            .festival .mom-word { font-size: 1.5rem; }
            .letter p { font-size: 1.15rem; }
            .icon-family { font-size: 2rem; }
        }

        /* 一些点缀小圆 */
        .dot-decoration {
            display: flex;
            justify-content: center;
            gap: 0.6rem;
            margin: 1rem 0 0.2rem;
        }
        .dot-decoration span {
            width: 8px;
            height: 8px;
            background: #aec09a;
            border-radius: 50%;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <div class="tea-card">
        <!-- 飘动的小叶子们 -->
        <div class="leaf-float">
            <i class="fas fa-leaf"></i>
            <i class="fas fa-leaf"></i>
            <i class="fas fa-leaf"></i>
            <i class="fas fa-leaf"></i>
            <i class="fas fa-leaf"></i>
        </div>

        <!-- 东方树叶标志性标题 -->
        <div class="brand">
            <h1>东方树叶</h1>
        </div>

        <!-- 献给妈妈的38节祝福 -->
        <div class="greeting">
            <div class="to-mom">
                <i class="fas fa-heart" style="color: #d98866; font-size: 1.2rem;"></i> 献给最亲爱的妈妈 <i class="fas fa-heart" style="color: #d98866;"></i>
            </div>
            <div class="festival">
                <span class="big38">3 8</span>
                <span class="mom-word">妇女节快乐</span>
            </div>
        </div>

        <!-- 温馨小图标：妈妈与孩子 + 茶壶 -->
        <div class="icon-family">
            <span class="mom-icon">
                <i class="fas fa-female"></i>
                <i class="fas fa-heart" style="font-size: 1.2rem; color: #e68c7c;"></i>
                <i class="fas fa-child"></i>
            </span>
            <span style="color: #839b6b;">
                <i class="fas fa-mug-hot"></i>
                <i class="fas fa-seedling" style="margin-left: 5px;"></i>
            </span>
        </div>

        <!-- 信笺部分：文字祝福 + 东方树叶的比喻 -->
        <div class="letter">
            <p>妈妈，您就像一杯温润的东方树叶——初品是淡淡的清苦，回味却是无尽的甘甜。那些您默默付出的日夜，都化作了时光里的茶香，温柔了我的整个世界。</p>
            <p>今天是您的节日，38妇女节，女儿/儿子没有什么珍贵的礼物，只想借这一缕东方茶意，对您说：感谢您用爱烹煮生活的茶汤，让我学会从容与坚韧。</p>
            <div class="tea-quote">
                <i class="fas fa-leaf"></i> 茶从不言语，却把深情留在水中 <i class="fas fa-leaf"></i><br>
                正如您，妈妈
            </div>
            <p>愿岁月对您温柔，愿健康与快乐如茶芽般在您心中舒展。未来的每一天，换我来为您泡一杯暖茶，陪您细数年华。</p>
        </div>

        <!-- 署名 + 东方树叶的小印记 -->
        <div class="signature">
            <span>— 永远爱您的孩子</span>
            <span class="stamp"><i class="fas fa-leaf" style="margin-right: 4px;"></i> 东方树叶 · 敬上</span>
        </div>

        <!-- 底部爱心 & 日期 -->
        <div class="footer-note">
            <span class="heart-tea">
                <i class="fas fa-heart"></i> 茶香伴母爱 <i class="fas fa-heart"></i>
            </span>
            <span class="date">
                <i class="far fa-calendar-alt"></i> 2026 · 三八妇女节
            </span>
        </div>

        <!-- 小小的装饰圆点 -->
        <div class="dot-decoration">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <!-- 再补一片大大的叶子意境（纯粹装饰） -->
        <div style="text-align: center; margin-top: 0.8rem; opacity: 0.5; font-size: 1.1rem; color: #9bb386;">
            <i class="fas fa-leaf"></i>  <i class="fas fa-feather-alt"></i>  <i class="fas fa-leaf"></i>
        </div>
    </div>
</body>
</html>
