'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ClipboardCopy, ArrowDown, LinkIcon, MoreVertical } from 'lucide-react';
import { QRCodeModal } from './qr-code-modal';
import { toast, Toaster } from 'sonner';
import { z } from 'zod';

// URL validation schema
const urlSchema = z.string().url();

export default function UrlShortener() {
  // Initialize state after component mounts to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [links, setLinks] = useState([]);
  const [inputUrl, setInputUrl] = useState('');

  // Set initial data after mount to avoid hydration issues
  useEffect(() => {
    setLinks([
      { shortUrl: 'f1y.li/flyone', longUrl: 'https://app.f1y.pro', clicks: 58800 },
    ]);
    setMounted(true);
  }, []);

  const handleShorten = () => {
    try {
      // Validate URL
      urlSchema.parse(inputUrl);

      const newLink = {
        shortUrl: `fly.one/${Math.random().toString(36).substr(2, 5)}`,
        longUrl: inputUrl,
        isNew: true,
      };

      setLinks([newLink, ...links]);
      setInputUrl('');
      toast.success('Link shortened successfully!');
    } catch (err) {
      // Show error message if URL is invalid
      toast.error('Please enter a valid URL!');
    }
  };

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

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
            placeholder="Shorten any link..."
            className="pr-24 h-14 text-lg shadow-sm border-2 focus-visible:ring-primary/20"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <Button
            className="absolute right-1 transition-all"
            style={{
              backgroundColor: '#57d468',
              color: 'white',
            }}
            onClick={handleShorten}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Shorten
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {links.map((link) => (
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
                      <span className="text-sm font-medium text-green-600">New</span>
                    </div>
                  ) : link.clicks !== undefined ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full">
                      <div className="size-2 bg-primary/60 rounded-full" />
                      <span className="text-sm font-medium">
                        {link.clicks.toLocaleString()} clicks
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
      <Toaster richColors />
    </div>
  );
}
