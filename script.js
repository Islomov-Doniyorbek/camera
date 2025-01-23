function hide() {
    let plus = document.querySelectorAll(".fa-plus"),
        minus = document.querySelectorAll(".fa-minus"),
        hide = document.querySelectorAll(".hide");
    
    console.log(hide);
    console.log(plus);
    console.log(minus);
    
    plus.forEach((e,i) => {
        e.onclick = () => {
            minus[i].style.display = 'inline';
            hide[i].style.display = 'flex';
            e.style.display = 'none';
        }
    })
    minus.forEach((e,i) => {
        e.onclick = () => {
            plus[i].style.display = 'inline';
            hide[i].style.display = 'none';
            e.style.display = 'none';
        }
    })
}

function row() {
    let holat = document.querySelector(".holat");

    let dataset = [
        {
            tuman: "Yangihayot",
            kamera: "910 ta",
            aktiv: "849 ta",
            nosignal: "48 ta",
            remont: "13 ta",
            talab: "24 ta"
        },
        {
            tuman: "Sergeli",
            kamera: "1976 ta",
            aktiv: "1847 ta",
            nosignal: "100 ta",
            remont: "29 ta",
            talab: "159 ta"
        },
        {
            tuman: "Bektemir",
            kamera: "1026 ta",
            aktiv: "812 ta",
            nosignal: "200 ta",
            remont: "14 ta",
            talab: "541 ta"
        },
        {
            tuman: "Yashnobod",
            kamera: "1564 ta",
            aktiv: "1502 ta",
            nosignal: "19 ta",
            remont: "43 ta",
            talab: "127 ta"
        },
        {
            tuman: "Mirzo Ulug'bek",
            kamera: "2691 ta",
            aktiv: "2687 ta",
            nosignal: "1 ta",
            remont: "3 ta",
            talab: "12 ta"
        },
        {
            tuman: "Yunusobod",
            kamera: "1948 ta",
            aktiv: "1897 ta",
            nosignal: "26 ta",
            remont: "25 ta",
            talab: "94 ta"
        },
        {
            tuman: "Olmazor",
            kamera: "2451 ta",
            aktiv: "2371 ta",
            nosignal: "60 ta",
            remont: "21 ta",
            talab: "17 ta"
        },
        {
            tuman: "Uchtepa",
            kamera: "1473 ta",
            aktiv: "1319 ta",
            nosignal: "124 ta",
            remont: "30 ta",
            talab: "148 ta"
        },
        {
            tuman: "Chilonzor",
            kamera: "2898 ta",
            aktiv: "2549 ta",
            nosignal: "319 ta",
            remont: "30 ta",
            talab: "251 ta"
        },
        {
            tuman: "Yakkasaroy",
            kamera: "1685 ta",
            aktiv: "1647 ta",
            nosignal: "34 ta",
            remont: "4 ta",
            talab: "49 ta"
        },
        {
            tuman: "Shayxontohur",
            kamera: "1557 ta",
            aktiv: "1538 ta",
            nosignal: "5 ta",
            remont: "14 ta",
            talab: "25 ta"
        },
    ]

    for (let i = 0; i < dataset.length; i++) {
        holat.innerHTML += `
        <div class="row">
                    <div class="title-row">
                    <h4>${dataset[i].tuman} tumani</h4>
                    <div class="icon">
                            <span><i class="fa fa-plus"></i></span>
                            <span><i class="fa fa-minus"></i></span>
                        </div>
                        </div>

                        <div class="hide">
                        <table>
                        <tbody>
                        <tr>
                        <td>Kameralar soni:</td>
                                    <td>${dataset[i].kamera}</td>
                                    </tr>
                                <tr>
                                    <td>Aktiv:</td>
                                    <td>${dataset[i].aktiv}</td>
                                </tr>
                                <tr>
                                    <td>Signal yo'q yoki past:</td>
                                    <td>${dataset[i].nosignal}</td>
                                </tr>
                                <tr>
                                    <td>Texnik sozlashda:</td>
                                    <td>${dataset[i].remont}</td>
                                </tr>
                                <tr>
                                    <td>Kamera talab hududlar:</td>
                                    <td>${dataset[i].talab}</td>
                                </tr>
                                </tbody>
                        </table>
                    </div>                    
                </div>
        `        
    }
}
row()
hide()