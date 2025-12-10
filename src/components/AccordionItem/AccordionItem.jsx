import { useState } from "react"

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">0{num < 0 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  )
}

export default AccordionItem
