import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

const InputForm = <T extends FieldValues>({
  control,
  name,
  label,
  rules,
  inputProps,
  description
}: InputFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...inputProps} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputForm

type InputFormProps<T extends FieldValues> = {
  control: Control<T, any, T>
  name: FieldPath<T>
  label: string
  inputProps?: React.ComponentProps<typeof Input>
  description?: string
  rules?: RegisterOptions<T>
}
