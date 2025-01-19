import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import QRCode from 'qrcode.react'



export function QRCodeModal({ url }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code for {url}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center p-4">
          <QRCode value={url} size={256} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

