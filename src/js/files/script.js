// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  const counter = document.querySelector(".counter")
  const timeTo = counter.getAttribute("data-timeTo")
  const targetDate = new Date(timeTo) // Преобразуем строку в дату

  // Проверяем корректность целевой даты
  if (isNaN(targetDate)) {
    console.error("Invalid date format in data-timeTo attribute. Use YYYY-MM-DD.")
    return
  }

  function updateCounter() {
    const now = new Date()
    const diff = targetDate - now

    if (diff <= 0) {
      // Если время истекло
      document.getElementById("days").textContent = 0
      document.getElementById("hours").textContent = 0
      document.getElementById("minutes").textContent = 0
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    document.getElementById("days").textContent = days
    document.getElementById("hours").textContent = hours
    document.getElementById("minutes").textContent = minutes
  }

  setInterval(updateCounter, 1000)
  updateCounter()
}
