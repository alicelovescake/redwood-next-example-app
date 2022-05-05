import CloseIcon from '@mui/icons-material/Close'
import { Alert as MuiAlert, IconButton, Snackbar } from '@mui/material'

type Props = {
  setAlertOn: (bol: boolean) => void
  alertOn: boolean
  text: string
  type: 'error' | 'success'
}

export function Alert({ alertOn, setAlertOn, text, type }: Props) {
  return (
    <Snackbar
      open={alertOn}
      autoHideDuration={5000}
      onClose={() => setAlertOn(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MuiAlert
        severity={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlertOn(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {text}
      </MuiAlert>
    </Snackbar>
  )
}
