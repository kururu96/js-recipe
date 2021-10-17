const addButton = document.getElementById("add-button")
const Container = document.getElementById("memo-container")
const Input = document.getElementById("memo-input")

/*const Container =console.dir(text)*/
// 追加ボタンを押したら
addButton.onclick = function() {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = Input.value
  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  card.textContent = text
  Container.append(card)
  // 入力欄を空にする
  Input.value = ""
  // 削除ボタン を作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタン を押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  // 削除ボタン を card の中に追加する
  card.append(deleteButton)
  // card を container の中に追加する
  Container.append(card)
}
