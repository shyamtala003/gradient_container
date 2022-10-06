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