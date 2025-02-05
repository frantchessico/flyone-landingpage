"use client"

import { Facebook, Twitter, Youtube, Mail, Github, Briefcase, BookOpen, Rocket, Bot, Link2 } from "lucide-react"
import { TikTok } from "./tiktok-icon"



export function ProfileCard({ variant }) {
  const variants = {
    1: "bg-gradient-to-br from-gray-900 to-gray-800",
    2: "bg-gradient-to-br from-purple-900 to-purple-800",
    3: "bg-gradient-to-br from-blue-900 to-blue-800",
    4: "bg-gradient-to-br from-emerald-900 to-emerald-800",
    5: "bg-gradient-to-br from-rose-900 to-rose-800",
    6: "bg-gradient-to-br from-amber-900 to-amber-800",
  }

  const buttonVariants = {
    1: "bg-gray-800 hover:bg-gray-700 border border-gray-700",
    2: "bg-purple-800 hover:bg-purple-700 border border-purple-700",
    3: "bg-blue-800 hover:bg-blue-700 border border-blue-700",
    4: "bg-emerald-800 hover:bg-emerald-700 border border-emerald-700",
    5: "bg-rose-800 hover:bg-rose-700 border border-rose-700",
    6: "bg-amber-800 hover:bg-amber-700 border border-amber-700",
  }

  return (
    <div className={`w-[320px] rounded-[40px] overflow-hidden ${variants[variant]}`}>
      <div className="relative px-6 py-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-white/10 to-white/5 p-1">
            <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center">
              {variant === 1 && <Rocket className="w-8 h-8 text-white/80" />}
              {variant === 2 && <Bot className="w-8 h-8 text-white/80" />}
              {variant === 3 && <Github className="w-8 h-8 text-white/80" />}
              {variant === 4 && <Briefcase className="w-8 h-8 text-white/80" />}
              {variant === 5 && <BookOpen className="w-8 h-8 text-white/80" />}
              {variant === 6 && <Link2 className="w-8 h-8 text-white/80" />}
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-white flex items-center justify-center gap-2">
              <span role="img" aria-label="rocket">
                🚀
              </span>
              Francisco Inoque
            </h2>
            <p className="text-white/80 text-sm flex items-center justify-center gap-2">
              Backend Developer{" "}
              <span role="img" aria-label="robot">
                🤖
              </span>
            </p>
            <p className="text-white/60 text-sm">
              Apaixonado por tecnologia,
              <br />
              desempenho e escalabilidade.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {[
            { text: "Waza Cursos", icon: BookOpen },
            { text: "SavanaPoint", icon: Link2 },
            { text: "GitHub Profile", icon: Github },
            { text: "Flyone - Smart Links", icon: Rocket },
            { text: "Portfolio", icon: Briefcase },
          ].map(({ text, icon: Icon }) => (
            <button
              key={text}
              className={`w-full py-3 px-4 rounded-full text-white text-sm flex items-center gap-3
                ${buttonVariants[variant]} backdrop-blur-sm
                transition-all duration-200 hover:scale-[1.02]`}
            >
              <Icon className="w-4 h-4" />
              <span>{text}</span>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          {[Facebook, Twitter, Mail, TikTok, Youtube].map((Icon, index) => (
            <button
              key={index}
              className={`${buttonVariants[variant]} p-2 rounded-full
                text-white/80 hover:text-white transition-all duration-200
                hover:scale-110`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-white/40">Made with Flyone</div>
      </div>
    </div>
  )
}

