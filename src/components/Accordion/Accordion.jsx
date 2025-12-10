import { useState } from "react"
import AccordionItem from "../AccordionItem/AccordionItem"

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={index}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  )
}

export default Accordion
