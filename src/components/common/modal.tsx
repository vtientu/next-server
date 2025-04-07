import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { memo } from 'react'

const Modal = ({ title, trigger, description, children, actions }: ModalProps) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {actions && <DialogFooter>{actions}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default memo(Modal)

type ModalProps = {
  title: string
  trigger: React.ReactNode
  description?: string
  children: React.ReactNode
  actions?: React.ReactNode
}
