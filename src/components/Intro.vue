<template>
    <div>
        <nav id="navbar2" class="navbar2">
            <ul class="nav-menu2">
                <li>
                    <a data-scroll="section-1" href="#section-1" class="dot">
                        <span>블록체인</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="section-2" href="#section-2" class="dot">
                        <span>그룹화</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="section-3" href="#section-3" class="dot">
                        <span>모바일</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="section-4" href="#section-4" class="dot">
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="section">
            <section id="section-1">
                <br><br><br>
                <h3 id="section_title" style="font-family: bamin;" >블록체인 시스템 도입</h3>
                <br><br><br>
                <img src="../img/blockchain.png">
                <br><br><br>
                <p class="padding-top10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
            <section id="section-2">
                <br><br><br><br><br><br><br>
                <h3 id="section_title" style="font-family: bamin;">그룹화</h3>
                <br><br><br>
                <img src="../img/Grouping.png">
                <br><br><br>
                <p class="padding-top10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
            <section id="section-3">
                <br><br><br><br>
                <h3 id="section_title" style="font-family: bamin;">위치기반 서비스를 이용한 실시간 모니터링 WITH Mobile</h3>
                <br><br><br>
                <img src="../img/LocationCheck.png">
                <br><br><br>
                <p class="padding-top10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
            <section id="section-4">
                <br><br><br><br>
                <h3 id="section_title" style="font-family: bamin;">Profile</h3>
                <br><br><br><br>
                <img src="../img/logo.png">
                <br><br><br>
                <p class="padding-top10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }

    #section_title {
        font-size: 50px;
    }

    .navbar2 {
        position: fixed;
        z-index: 999;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
    }

    .navbar2 .nav-menu2 {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .navbar2 .nav-menu2 li {
        position: relative;
        min-width: 200px;
        text-align: right;
    }

    .navbar2 .nav-menu2 li .dot {
        display: block;
        color: #fff;
        padding: 5px 0;
    }

    .navbar2 .nav-menu2 li .dot::before,
    .navbar2 .nav-menu2 li .dot::after {
        display: block;
        position: absolute;
        content: '';
        border-radius: 50%;
        top: 50%;
        transition: all .3s ease;
    }

    .navbar2 .nav-menu2 li .dot::before {
        width: 5px;
        height: 5px;
        right: 0;
        border: 2px solid #181818;
        transform: translateY(-50%);
    }

    .navbar2 .nav-menu2 li .dot::after {
        width: 15px;
        height: 15px;
        border: 2px solid #f44336;
        right: -5px;
        transform: translateY(-50%) scale(0);
    }

    .navbar2 .nav-menu2 li .dot.active::before,
    .navbar2 .nav-menu2 li:hover .dot::before {
        background: #f44336;
        border-color: #f44336;
    }

    .navbar2 .nav-menu2 li .dot.active::after,
    .navbar2 .nav-menu2 li:hover .dot::after {
        transform: translateY(-50%) scale(1);
    }

    .navbar2 .nav-menu2 li .dot span {
        display: inline-block;
        opacity: 0;
        font-weight: 700;
        letter-spacing: .5px;
        text-transform: capitalize;
        background-color: #f44336;
        padding: 10px 20px;
        border-radius: 3px;
        margin-right: 30px;
        transform: translateX(20px);
        transition: all .3s ease;
    }

    .navbar2 .nav-menu2 li .dot span::before {
        display: block;
        position: absolute;
        content: '';
        border-left: 7px solid #f44336;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        top: 50%;
        transform: translate(7px, -50%);
        right: 0;
        transition: all .3s ease;
    }

    .navbar2 .nav-menu2 li .dot.active span,
    .navbar2 .nav-menu2 li:hover .dot span {
        transform: translateX(0px);
        opacity: 1;
    }

    .section {
        margin-top: 60px;
        line-height: 22px;
    }

    .padding-top10 {
        padding-top: 10px;
    }

    #section-1 {
        height: 1078px;
        color:black;
        padding: 20px;
    }

    #section-2 {
        height: 1078px;
        color: black;
        padding: 20px;
    }

    #section-3 {
        height: 1078px;
        color: black;
        padding: 20px;
    }

    #section-4 {
        height: 1078px;
        color: black;
        padding: 20px;
    }
</style>