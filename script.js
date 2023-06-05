const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")
const operateurCase = document.getElementById("oper")
const result = document.getElementById("rez")
const selectValue = document.getElementById("operateur")
const btn = document.getElementById("btn")

selectValue.addEventListener("input", () => {
  operateurCase.textContent = selectValue.value
})

btn.addEventListener("click", (e) => {
  e.preventDefault()

  if (selectValue.value === "+") {
    result.value = `${+value1.value + +value2.value}`
  } else if (selectValue.value === "-") {
    result.value = `${+value1.value - +value2.value}`
  } else if (selectValue.value === "*") {
    result.value = `${+value1.value * +value2.value}`
  } else {
    result.value = `${+value1.value / +value2.value}`
  }
})
