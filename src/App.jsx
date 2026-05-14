import Header from "./components/header/Header"
import logo from "./assets/Logo.png"
import vector from "./assets/Vector.png"
import vector1 from "./assets/Vector1.png"
import vector2 from "./assets/Frame.png"
import vector3 from "./assets/Vector3.png"
import vector4 from "./assets/Vector4.png"

// header
const text ="Puspa Food"


const page =[
  {
    img: vector,
    title: "Table"
  },
  {
    img: vector1,
    title: "Menus"
  },
  {
    img: vector2,
    title: "Promos"
  },
  {
    img: vector3,
    title: "Report"
  },
  {
    img: vector4,
    title: "Settings"
  }
]

function App() {
  return (
    <div>
      <Header logo={logo} text={text} page={page}/>
    </div>
  )
}

export default App