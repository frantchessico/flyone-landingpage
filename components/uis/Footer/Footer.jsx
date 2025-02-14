"use client"

import { useState } from "react"
import { Instagram, Mail, Send } from "lucide-react"
import { toast, Toaster } from "sonner"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [acceptUpdates, setAcceptUpdates] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && acceptUpdates) {
      // Aqui você normalmente enviaria o email para seu backend
      console.log("Inscrevendo:", email)
      toast.success("Inscrição realizada com sucesso!")
      setEmail("")
      setAcceptUpdates(false)
    } else if (!email) {
      toast.error("Por favor, insira um email válido.")
    } else {
      toast.error("Por favor, aceite receber as atualizações.")
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Fique por dentro das novidades</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                className="flex-grow p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center whitespace-nowrap"
              >
                <Send className="w-5 h-5 mr-2" />
                <span>Inscrever</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="acceptUpdates"
                checked={acceptUpdates}
                onChange={(e) => setAcceptUpdates(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="acceptUpdates" className="text-sm text-gray-300">
                Aceito receber novidades sobre atualizações
              </label>
            </div>
          </form>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
            © {currentYear} Flyone. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400">
            <a href="https://f1y.li/wrt4suh" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
              <Instagram className="w-6 h-6 hover:text-gray-200 duration-150" />
            </a>
            <a href="https://f1y.li/C3AdM31" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn">
              <svg className="w-6 h-6 hover:text-gray-200 duration-150" fill="none" viewBox="0 0 48 48">
                <g clipPath="url(#clip0_17_68)">
                  <path
                    fill="currentColor"
                    d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_68">
                    <path fill="currentColor" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="mailto:support@f1y.pro" target="_blank" rel="noopener noreferrer" aria-label="Contact support">
              <Mail className="w-6 h-6 hover:text-gray-200 duration-150" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

