import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './SearchBox.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


const SearchBox: FC<SearchBoxProps> = ({ setInput }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
                <TextField className="search" id="outlined-basic" label="Search Robots" variant="outlined" onChange={setInput}/>
        </form>
      );
}

export default SearchBox