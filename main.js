// theme toggler
let themeTogglerBtn=document.getElementById('theme_toggler');
let styleLink=document.getElementById('css_link');

themeTogglerBtn.addEventListener("click",()=>{
  let icon=Array.from(themeTogglerBtn.children);
  if(icon[0].name==="moon")
  {
    icon[0].setAttribute("name","sunny");
    styleLink.setAttribute("href","./css/dark.css");
  }else
  {
    icon[0].setAttribute("name","moon");
    styleLink.setAttribute("href","./css/white.css");
  }
})



// copy to clipboard


let copyBtn = document.querySelectorAll('.copy_to_clipboard');
var clipboard = new ClipboardJS(copyBtn);


clipboard.on('success', function (e) {

  let toastDiv = document.getElementById('notify_toast');
  toastDiv.classList.add("show_toast");
  setTimeout(() => {
    toastDiv.classList.remove("show_toast");
  }, 2000)

});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});


// code for making own gradient color

let generateGradient = () => {
  let gradientCardEdit = document.getElementById('gradient_card_edit');
  let colorPosition = document.getElementById('rangeSlider').value;
  // console.log(colorDeg);
  let AllColorArray = [];

  let color = document.querySelectorAll('.colorinput');
  color.forEach(element => {
    AllColorArray.push(element.value);
  })

  let gradientColor = `linear-gradient(${colorPosition}deg,${AllColorArray.toString()})`;


  gradientCardEdit.style.background = gradientColor;
  let copyToClipboard = document.getElementById('color_maker_copy_btn');
  copyToClipboard.setAttribute("data-clipboard-text", `background:${gradientColor};`)
}

generateGradient();


// code for add more input type="color"

let addInputColor = document.getElementById('add_input_btn');
let c = 3;
let addColorInputer = () => {

  if (c <= 5) {
    let colorInputs = document.getElementById('color_inputs');
    let colorPicker = document.createElement('input');
    colorPicker.classList.add("color", "colorinput");
    colorPicker.setAttribute("type", "color");
    colorPicker.setAttribute("value", "#1f1f1f");
    colorPicker.setAttribute("oninput", "generateGradient()");
    colorInputs.append(colorPicker);
    generateGradient();
    c++;
  } else {
    alert("only 5 colors allowed!")
  }
}

// code for open and close the gradient maker div

let openBtn = document.getElementById('make_gradient_btn');
let closeBtn = document.getElementById('close');
let colorMakerDropDown = document.querySelector('.color_maker');

openBtn.onclick = () => {
  colorMakerDropDown.classList.remove("color_maker_close");
}

closeBtn.onclick= () => {
  colorMakerDropDown.classList.add("color_maker_close");
}