import { useState } from "react"
import { Counter } from "./components/Counter"
import { Heading } from "./components/Heading"
import { List } from "./components/List"
import { Section } from "./components/Section"


function App() {
  
  const [count, setCount] = useState<number>(0)
  return (
    <>
     <Heading title={"Hello"}/>
     <Section title={"Title throu props"}>This is a children</Section>
     <Counter setCount={setCount}>Count is: {count}</Counter>
     <List items={["🍺 Beer","🎨 Painting","💾 Programming"]} render={(item: string) => <span className="bold">{item}</span>}></List>
    </>
  )
}

export default App
