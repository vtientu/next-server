'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { FormProvider, SubmitHandler, FieldValues, UseFormReturn } from 'react-hook-form'
import { DialogProps } from '@radix-ui/react-dialog'
import { memo, ReactNode } from 'react'

type ModalProps<T extends FieldValues = FieldValues> = DialogProps & {
  title?: string
  trigger: React.ReactNode
  modelHeader?: ReactNode
  description?: string
  children: ReactNode
  actions?: ReactNode
  formProps?: {
    methods: UseFormReturn<T>
    onSubmit: SubmitHandler<T>
  }
}

const Modal = <T extends FieldValues>({
  title,
  modelHeader,
  trigger,
  description,
  children,
  actions,
  formProps,
  ...props
}: ModalProps<T>) => {
  return (
    <Dialog modal {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        {formProps ? (
          <FormProvider {...formProps.methods}>
            <form onSubmit={formProps.methods.handleSubmit(formProps.onSubmit)} className='space-y-4'>
              {modelHeader ? (
                <DialogHeader>{modelHeader}</DialogHeader>
              ) : (
                <DialogHeader>
                  {title && <DialogTitle>{title}</DialogTitle>}
                  {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
              )}
              {children}
              {actions && <DialogFooter>{actions}</DialogFooter>}
            </form>
          </FormProvider>
        ) : (
          <>
            {modelHeader ? (
              <DialogHeader>{modelHeader}</DialogHeader>
            ) : (
              <DialogHeader>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && <DialogDescription>{description}</DialogDescription>}
              </DialogHeader>
            )}
            {children}
            {actions && <DialogFooter>{actions}</DialogFooter>}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default memo(Modal)
