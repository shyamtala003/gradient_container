let gradientCards = [{
        id: 1,
        colors: ['#6d28d9', '#db2777'],
        gradientColor: 'linear-gradient(to right, #6d28d9, #db2777)',
        gradientName: 'daring new color monster',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 2,
        colors: ['#f12711', '#f5af19'],
        gradientColor: 'linear-gradient(to right, #f12711,#f5af19)',
        gradientName: 'flare',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 3,
        colors: ['#12c2e9', '#c471ed', '#f64f59'],
        gradientColor: 'linear-gradient(to right, #12c2e9,#c471ed,#f64f59)',
        gradientName: 'jshine',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 4,
        colors: ['#00b09b', '#96c93d'],
        gradientColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        gradientName: 'ohhappiness',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 5,
        colors: ['#c0392b', '#8e44ad'],
        gradientColor: 'linear-gradient(to right, #c0392b, #8e44ad)',
        gradientName: 'mello',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 6,
        colors: ['#ad8cea', '#50dfb2'],
        gradientColor: 'linear-gradient(to right, #ad8cea, #50dfb2)',
        gradientName: 'emeald',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 7,
        colors: ['#f9e7fe', '#dafcfc'],
        gradientColor: 'linear-gradient(to right, #f9e7fe, #dafcfc)',
        gradientName: 'almost',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 8,
        colors: ['#6a11cb', '#fc6767'],
        gradientColor: 'linear-gradient(to right, #6a11cb, #fc6767)',
        gradientName: 'galaxy',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 9,
        colors: ['#ff1f01', '#ffc700'],
        gradientColor: 'linear-gradient(to right, #ff1f01, #ffc700)',
        gradientName: 'sol',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 10,
        colors: ['#d0dae0', '#8a2eff'],
        gradientColor: 'linear-gradient(to right, #d0dae0, #8a2eff)',
        gradientName: 'mikyway',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 11,
        colors: ['#e3d2c4', '#fcfcfb'],
        gradientColor: 'linear-gradient(to right, #e3d2c4, #fcfcfb)',
        gradientName: 'gold dust',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 12,
        colors: ['#1e130c', '#9a8478'],
        gradientColor: 'linear-gradient(to right, #1e130c, #9a8478)',
        gradientName: 'coffee',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 13,
        colors: ['#1a2980', '#26d0ce'],
        gradientColor: 'linear-gradient(to right, #1a2980, #26d0ce)',
        gradientName: 'aqua',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 14,
        colors: ['#4158D0', '#C850C0', 'FFCC70'],
        gradientColor: 'linear-gradient(43deg, #4158D0,#C850C0,#FFCC70)',
        gradientName: 'smesh',
        gradientMaker: 'ShyamTala'
    },
    {
        id: 15,
        colors: ['#00DBDE', '#FC00FF'],
        gradientColor: 'linear-gradient(90deg, #00DBDE, #FC00FF)',
        gradientName: 'smoothy',
        gradientMaker: 'ShyamTala'
    },
];


let gradientContaier = document.querySelector('.gradient_container');

gradientCards.forEach((element) => {

    let gradientCard = document.createElement("div");
    gradientCard.classList.add('gradient_card');
    gradientCard.setAttribute("style", `background:${element.gradientColor}`);

    let gradientInfo = document.createElement('div');
    gradientInfo.classList.add('gradient_info');

    let colors = document.createElement("div");
    colors.classList.add("colors");


    element.colors.forEach((color) => {
        let colorInput = document.createElement('input');
        colorInput.classList.add("color")
        colorInput.setAttribute("type", "color");
        colorInput.setAttribute("value", color)
        colors.append(colorInput)
    })

    let titleWithCopyBtn = document.createElement('div');
    titleWithCopyBtn.classList.add("title_with_copy_btn");

    let gradientTitle = document.createElement('h1');
    gradientTitle.classList.add('gradient_title');
    gradientTitle.textContent = element.gradientName;
    gradientTitle.setAttribute("style", `background:${element.gradientColor};-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`);

    let coptToClipBoard = document.createElement('button');
    coptToClipBoard.classList.add('copy_to_clipboard');
    coptToClipBoard.setAttribute("data-clipboard-text", `background:${element.gradientColor};`)
    coptToClipBoard.innerHTML = `<ion-icon name="copy-outline"></ion-icon>`;

    let gradientAuther = document.createElement('p');
    gradientAuther.classList.add("gradient_maker");
    gradientAuther.textContent = `by ${element.gradientMaker}`;


    // append elements
    titleWithCopyBtn.append(gradientTitle);
    titleWithCopyBtn.append(coptToClipBoard);

    gradientInfo.append(colors)
    gradientInfo.append(titleWithCopyBtn);
    gradientInfo.append(gradientAuther);

    gradientCard.append(gradientInfo);

    gradientContaier.append(gradientCard);

})