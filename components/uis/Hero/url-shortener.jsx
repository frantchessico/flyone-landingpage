'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ClipboardCopy, ArrowDown, LinkIcon, MoreVertical, ChevronDown } from 'lucide-react'
import { QRCodeModal } from './qr-code-modal'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'
import { generateImprovedLinkRandomKey } from '@/lib/utils'
import { pubSub } from '@/lib/pubsub'

// URL validation schema
const urlSchema = z.string().url()

// Number of links to show initially
const INITIAL_LINKS_COUNT = 3

export default function UrlShortener() {
  const [mounted, setMounted] = useState(false)
  const [links, setLinks] = useState([])
  const [inputUrl, setInputUrl] = useState('')
  const [showAllLinks, setShowAllLinks] = useState(false)

  useEffect(() => {
    setLinks([
      { shortUrl: 'f1y.li/flyone', longUrl: 'https://app.f1y.pro', clicks: 58800 },
    ])
    setMounted(true)
  }, [])

  const handleShorten = () => {
    try {
      urlSchema.parse(inputUrl)
      
      const linkId = generateImprovedLinkRandomKey(7)
      const newLink = {
        shortUrl: `https://f1y.li/${linkId}`,
        longUrl: inputUrl,
        isNew: true,
        linkId
      }

      setLinks([newLink, ...links])
      setShowAllLinks(false) // Collapse the list when adding new link

      pubSub.publish('flyone-externa-short-links', JSON.stringify(newLink), ['flyone-external-short-links'])
        .then(() => {
          toast.success('Link encurtado com sucesso! 🎉')
          setInputUrl('')
        })
        .catch((error) => {
          toast.error('houve um erro durante o processo!')
        })
      
    } catch (err) {
      toast.error('Por favor, insira uma URL válida!')
    }
  }

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Copiado para a área de transferência!')
    } catch (err) {
      toast.error('Falha ao copiar para a área de transferência. Tente novamente!')
    }
  }

  if (!mounted) {
    return null
  }

  const visibleLinks = showAllLinks ? links : links.slice(0, INITIAL_LINKS_COUNT)
  const hasMoreLinks = links.length > INITIAL_LINKS_COUNT

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative px-4"
      >
        <div className="relative flex items-center">
          <Input
            type="url"
            placeholder="Encurte qualquer link..."
            className="pr-24 h-14 text-lg shadow-sm border-2 focus-visible:ring-primary/20"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleShorten()
              }
            }}
          />
          <Button
            className="absolute right-1 transition-all h-12"
            style={{
              backgroundColor: '#57d468',
              color: 'white',
            }}
            onClick={handleShorten}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Encurtar
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {visibleLinks.map((link, index) => (
          <motion.div
            key={link.shortUrl}
            initial={link.isNew ? { opacity: 0, y: 20, height: 0 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card
              className={`p-5 bg-card-link hover:shadow-md transition-shadow ${
                link.isNew ? 'border-green-500/20 bg-green-500/5 mb-4' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${
                      link.isNew
                        ? 'bg-gradient-to-br from-green-500 to-green-600'
                        : 'bg-gradient-to-br from-gray-900 to-gray-700'
                    }`}
                  >
                    <span className="text-white text-lg font-medium">{link.shortUrl[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white text-lg">{link.shortUrl}</span>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleCopy(link.shortUrl)}
                        >
                          <ClipboardCopy className="h-4 w-4 text-white" />
                        </Button>
                        <QRCodeModal className="h-4 w-4 text-white" url={link.shortUrl} />
                      </div>
                    </div>
                    <span className="text-sm text-white truncate block">
                      {link.longUrl}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {link.isNew ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full">
                      <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-green-600">Novo</span>
                    </div>
                  ) : link.clicks !== undefined ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full">
                      <div className="size-2 bg-primary/60 rounded-full" />
                      <span className="text-sm font-medium">
                        {link.clicks.toLocaleString()} cliques
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {hasMoreLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setShowAllLinks(!showAllLinks)}
            >
              {showAllLinks ? 'Show Less' : 'Show More'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllLinks ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster richColors />
    </div>
  )
}

