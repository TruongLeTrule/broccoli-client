import Alert from '@mui/material/Alert';

const CustomAlert = ({ msg, type }) => {
  return <Alert severity={type}>{msg}</Alert>;
};

export default CustomAlert;
