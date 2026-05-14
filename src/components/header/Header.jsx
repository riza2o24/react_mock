import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"

function Header({page,logo, text}) {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex justify-between w-[1440px] m-auto">
      {/* header */}
      <div className={`${open ? "w-[220px] h-[900px] pt-[40px] px-[20px] shadov"  : "w-[120px] h-[900px]  pt-[40px] px-[20px] shadov"}`}>
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
      <div>
        <div className="w-[900px] h-[60px] mt-[40px] rounded-[12px] flex items-center gap-[20px] p-[18px] shadov">
          <CiSearch className="text-[25px] text-[#7e7e7e]"/>
          <input type="text" className="w-[600px] outline-none"  placeholder="Search menu" />
        </div>
      </div>
    </div>
  )
}

export default Header