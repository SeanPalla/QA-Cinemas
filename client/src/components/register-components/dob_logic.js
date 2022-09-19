import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { useTheme , createTheme } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';

export default function DoB_Picker() {
  const [value, setValue] = React.useState(dayjs('2022-07-18'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            className="reg-form--birth-date"
          />
      </Stack>
    </LocalizationProvider>
  );
}
