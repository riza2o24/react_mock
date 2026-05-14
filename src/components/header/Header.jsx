import axios from "axios"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"

function Header({page,logo, text,card}) {
    const [open,setOpen] = useState(false)

    const [texts,setTexts] = useState([])

    useEffect(() => {
      axios.get("https://dummyjson.com/recipes")
      .then(res => setTexts(res.data.recipes))
    }, [])
  return (
    <div className="flex justify-between w-[1440px] m-auto bg-[#F6F5F5]">
      {/* header */}
      <div className={`${open ? "w-[220px] h-[900px] pt-[40px] px-[20px] bg-[#fff] shadov"  : "w-[120px] h-[900px]  pt-[40px] px-[20px] bg-[#fff] shadov"}`}>
        <div className={`${open ?"flex items-center gap-[20px]" : "flex items-center justify-center"}`}>
            <img src={logo} alt="logo" />

            <div  className={`${open  ? "block" : "hidden" }`}>
                <h2 className="font-[700] Nunito text-[19px]">{text}</h2>
            </div>
        </div>

      <div className={`${open ? "flex items-center flex justify-between mt-[50px] " : "flex items-center flex justify-center gap-[20px] mt-[50px] "}`} >
                <RiArrowLeftDoubleLine color="#A49EBD" onClick={() => setOpen(open ? false : false)}/>
                <RiArrowRightDoubleLine color="#A49EBD" onClick={() => setOpen(open ? true : true)}/>
            </div>

        <div>
            <ul>{page.map(item => (
                <li className="flex items-center mt-[35px] gap-[20px] justify-center">
                    <div className={`${open ? "w-[180px] h-[50px] hoverss border-2 flex items-center justify-center gap-[10px] rounded-[16px] border-[#d8d8d8]" : "block"}`}>
                      <div  className={`${open ? "block "  : " hovers m-auto flex w-[50px] h-[50px] items-center justify-center"}`}>
                        <img src={item.img} alt="img" />
                      </div>
                      <p className={`${open ? "block text-[#028170] font-[600]" : "hidden"}`}>{item.title}</p>
                    </div>
                </li>

            ))
            }
            </ul>
        </div>

      </div>


      {/* 2 */}
      <div className="w-[900px] ">
        <div className="w-[100%] h-[60px] mt-[40px] rounded-[12px] bg-[#fff] flex items-center gap-[20px] p-[18px] shadov">
          <CiSearch className="text-[25px] text-[#7e7e7e]"/>
          <input type="text" className="w-[600px] outline-none"  placeholder="Search menu" />
        </div>

        <div className="mt-[50px] mb-[50px] flex items-center justify-between">{card.map(item => (
          <div className="flex items-center gap-[8px] w-auto rounded-[8px] border-3 border-[#F6F5F5] bg-[#fff] text_hover px-[16px] py-[18px]  h-[60px]">
            <h4>{item.icon}</h4>
            <p className="font-[600] text-[20px]">{item.text}</p>
          </div>
        ))
          }</div>
      </div>

      <div className="flex grid grid-cols-4">{texts.map(item => (
        <div className="w-[212px] p-[8px] h-[192px] rounded-[8px] bg-[#fff]" key={item.id}>
          <img src={item.images} alt="iamge" />
          <h3></h3>

          <div className="">

          </div>
        </div>
      ))
        }</div>
    </div>
  )
}

export default Header