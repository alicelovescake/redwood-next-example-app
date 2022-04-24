import { Controller, Control } from '@redwoodjs/forms'
import {
  Autocomplete as MuiAutocomplete,
  TextField as MuiTextField,
} from '@mui/material'

type Props = {
  defaultValue: any[]
  options: any[]
  label: string
  placeholder: string
  control: Control
  name: string
}
export const Autocomplete = ({
  defaultValue,
  options,
  label,
  placeholder,
  control,
  name,
}: Props) => {
  return (
    <Controller
      render={({ field: { onChange }, ...props }) => (
        <MuiAutocomplete
          sx={{ my: 2 }}
          multiple
          options={options}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(e, data) => onChange(data)}
          defaultValue={defaultValue}
          renderInput={(params) => (
            <MuiTextField {...params} label={label} placeholder={placeholder} />
          )}
          {...props}
        />
      )}
      name={name}
      control={control}
    />
  )
}
