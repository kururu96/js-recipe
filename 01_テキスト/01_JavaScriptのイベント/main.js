const Button = document.getElementById("button")
const InputText = document.getElementById("inputtext")
const DisPlay = document.getElementById("display")
const Output = document.getElementById("output")
Button.onclick = function() {
  DisPlay.textContent = "こんにちわ"
}
InputText.onclick = function() {
  Output.textContent = "入力された内容は「」です。"
}
