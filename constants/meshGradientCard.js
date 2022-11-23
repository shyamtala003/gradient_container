let autoId = 0;
let meshGradientCards = [{
        id: ++autoId,
        colors: ['#aeffbe', '#94fff1', '#ffe48a', '#ff9ebe'],
        backgroundColor: '#b3ff99',
        gradientColor: `radial-gradient(at 43% 0%, hsla(97,75%,68%,1) 0px, transparent 50%),
        radial-gradient(at 100% 1%, hsla(176,100%,79%,1) 0px, transparent 50%),
        radial-gradient(at 14% 99%, hsla(50,100%,77%,1) 0px, transparent 50%),
        radial-gradient(at 100% 98%, hsla(344,100%,80%,1) 0px, transparent 50%)`,
        gradientName: 'mesh gradient',
        gradientMaker: 'ShyamTala'
    },

    {
        id: ++autoId,
        colors: ['#ff8fcd', '#c6fcfe', '#95f3ff', '#b8ffbb'],
        gradientColor: `radial-gradient(at 100% 100%, hsla(326,100%,78%,0.73) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(182,100%,88%,1) 0px, transparent 50%),
        radial-gradient(at 0% 99%, hsla(186,100%,79%,1) 0px, transparent 50%),
        radial-gradient(at 1% 0%, hsla(122,100%,86%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'smoothy mesh gradient',
        gradientMaker: 'ShyamTala'
    },
    {
        id: ++autoId,
        colors: ['#9bffe1', '#a8c5ff', '#ccedff', '#cbbcfc'],
        gradientColor: `radial-gradient(at 100% 0%, hsla(162,100%,80%,1) 0px, transparent 50%),
                    radial-gradient(at 9% 89%, hsla(219,100%,82%,1) 0px, transparent 50%),
                    radial-gradient(at 99% 98%, hsla(201,100%,90%,1) 0px, transparent 50%),
                    radial-gradient(at 0% 0%, hsla(254,91%,86%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'staunch mesh gradie',
        gradientMaker: 'ShyamTala'
    },
    {
        id: ++autoId,
        colors: ['#f2ffa3', '#deffa8', '#ff99da', '#affefb'],
        gradientColor: `radial-gradient(at 0% 0%, hsla(68,97%,83%,1) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(82,100%,82%,1) 0px, transparent 50%),
        radial-gradient(at 0% 99%, hsla(321,100%,80%,1) 0px, transparent 50%),
        radial-gradient(at 99% 98%, hsla(177,97%,84%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'mesh gradient',
        gradientMaker: 'ShyamTala'
    },
    {
        id: ++autoId,
        colors: ['#da99fd', '#fffd90', '#9b96f9', '#ffa694'],
        gradientColor: `radial-gradient(at 0% 0%, hsla(279,96%,79%,1) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(58,100%,78%,1) 0px, transparent 50%),
        radial-gradient(at 9% 89%, hsla(243,89%,78%,1) 0px, transparent 50%),
        radial-gradient(at 99% 98%, hsla(10,100%,79%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'sun-shine mesh gradie',
        gradientMaker: 'ShyamTala'
    },
    {
        id: ++autoId,
        colors: ['#ccbeff', '#c8f9fe', '#8d85ff', '#ffbec6'],
        gradientColor: `radial-gradient(at 0% 0%, hsla(252,100%,87%,1) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(185,96%,89%,1) 0px, transparent 50%),
        radial-gradient(at 9% 89%, hsla(243,100%,76%,1) 0px, transparent 50%),
        radial-gradient(at 99% 98%, hsla(352,100%,87%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'beautiful mesh gradie',
        gradientMaker: 'ShyamTala'
    },
    {
        id: ++autoId,
        colors: ['#f9bcff', '#98efff', '#ffa29a', '#be99ff'],
        gradientColor: `radial-gradient(at 0% 0%, hsla(294,100%,86%,1) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(189,100%,79%,1) 0px, transparent 50%),
        radial-gradient(at 9% 89%, hsla(4,100%,80%,1) 0px, transparent 50%),
        radial-gradient(at 99% 98%, hsla(261,100%,80%,1) 0px, transparent 50%)`,
        backgroundColor: '#b3ff99',
        gradientName: 'radial mesh gradie',
        gradientMaker: 'ShyamTala'
    },



];


let gradientContaier = document.querySelector('.gradient_container');

meshGradientCards.forEach((element) => {

    let gradientCard = document.createElement("div");
    gradientCard.classList.add('gradient_card');
    gradientCard.setAttribute("style", `background:${element.backgroundColor};background-image:${element.gradientColor}`);

    let gradientCanvas = document.createElement('div');
    gradientCanvas.classList.add("gradient_canvas");
    gradientCanvas.setAttribute("style", `height: 75%;background:${element.backgroundColor};background-image:${element.gradientColor}`);

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
    gradientTitle.setAttribute("style", `background:${element.backgroundColor};background-image:${element.gradientColor};-webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0,0,0,.2);`);

    let coptToClipBoard = document.createElement('button');
    coptToClipBoard.classList.add('copy_to_clipboard');
    coptToClipBoard.setAttribute("data-clipboard-text", `background:${element.backgroundColor};\nbackground-image:${element.gradientColor};`)
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

    gradientCard.append(gradientCanvas)
    gradientCard.append(gradientInfo);

    gradientContaier.append(gradientCard);

})