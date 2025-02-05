"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import NavHeader from "../NavHeader"
import NavLink from "../NavLink"

const Navbar = () => {
  const [state, setState] = useState(false)
  const menuBtnEl = useRef()

  const navigation = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQs", href: "/#faqs" },
  ]

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target
      if (!menuBtnEl.current.contains(target)) setState(false)
    }
  }, [])

  return (
    <header className="relative">
      <nav
        className={`py-2 bg-[#040305] md:py-4 ${state ? "bg-[#040305] absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-[#040305]" : ""}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
          <div className={`flex-1 items-center md:flex ${state ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:items-center md:mx-auto space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-300">
              {navigation.map((item, idx) => (
                <li key={idx} className="hover:text-gray-50">
                  <Link href={item.href} className="block py-1 md:py-0">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0">
              <NavLink
                href="https://docs.f1y.pro"
                className="text-sm text-white font-medium border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-800"
              >
                Docs
              </NavLink>
              <NavLink
                href="https://app.f1y.pro"
                className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 px-3 py-1 rounded-md hover:bg-opacity-90"
              >
                Start now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

