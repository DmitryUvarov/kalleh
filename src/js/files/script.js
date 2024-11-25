// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  const counter = document.querySelector(".counter")

  if (counter) {
    const timeTo = counter.getAttribute("data-timeTo")

    const targetDate = new Date(timeTo)

    if (isNaN(targetDate.getTime())) {
      console.error("Invalid date format. Use ISO format: YYYY-MM-DDTHH:mm:ss")
      return
    }

    function updateCounter() {
      const now = new Date()
      const diff = targetDate - now

      if (diff <= 0) {
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
}
