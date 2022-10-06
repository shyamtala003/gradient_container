let gradientCards = [
    {
        id: 1,
        gradientColor: 'linear-gradient(to right, #6d28d9, #db2777)',
        gradientName: 'daring new color monster',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 2,
        gradientColor: 'linear-gradient(to right, #f12711,#f5af19)',
        gradientName: 'flare',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 3,
        gradientColor: 'linear-gradient(to right, #12c2e9, #c471ed,#f64f59)',
        gradientName: 'jshine',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 4,
        gradientColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        gradientName: 'ohhappiness',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 5,
        gradientColor: 'linear-gradient(to right, #c0392b, #8e44ad)',
        gradientName: 'mello',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 6,
        gradientColor: 'linear-gradient(to right, #ad8cea, #50dfb2)',
        gradientName: 'emeald',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 7,
        gradientColor: 'linear-gradient(to right, #f9e7fe, #dafcfc)',
        gradientName: 'almost',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 8,
        gradientColor: 'linear-gradient(to right, #6a11cb, #fc6767)',
        gradientName: 'galaxy',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 9,
        gradientColor: 'linear-gradient(to right, #ff1f01, #ffc700)',
        gradientName: 'sol',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 10,
        gradientColor: 'linear-gradient(to right, #d0dae0, #8a2eff)',
        gradientName: 'mikyway',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 11,
        gradientColor: 'linear-gradient(to right, #e3d2c4, #fcfcfb)',
        gradientName: 'gold dust',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 12,
        gradientColor: 'linear-gradient(to right, #1e130c, #9a8478)',
        gradientName: 'coffee',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 13,
        gradientColor: 'linear-gradient(to right, #1a2980, #26d0ce)',
        gradientName: 'aqua',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 14,
        gradientColor: 'linear-gradient(43deg, #4158D0,#C850C0,#FFCC70)',
        gradientName: 'smesh',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 15,
        gradientColor: 'linear-gradient(90deg, #00DBDE, #FC00FF)',
        gradientName: 'smoothy',
        gradientMaker: 'ShyamTala'
    },
];


let gradientContaier = document.querySelector('.gradient_container');

gradientCards.forEach((element) => {
    gradientContaier.innerHTML += `
    <div class="gradient_card" style="background:${element.gradientColor}">
        <div class="gradient_info">
            <div class="title_with_copy_btn">
                <h1 class="gradient_title" style="background:${element.gradientColor};-webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">${element.gradientName}</h1>
                <button><ion-icon name="copy-outline"></ion-icon></button>
            </div>
            <p class="gradient_maker">by ${element.gradientMaker}</p>
        </div>
    </div>
    `;
})