import { FormControl, MenuItem, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useSlate } from 'slate-react';
import { HeadingVariants } from 'types/util';
import { toogleHeader } from 'util/element';
import { StyledSelect, useStyles } from './styles';
import { headers } from './util';

const HeaderTypes = (): JSX.Element => {
  const classes = useStyles();
  const [heading, setHeading] = useState<HeadingVariants>('body1');
  const editor = useSlate();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHeading(event.target.value as HeadingVariants);
  };

  return (
    <FormControl>
      <StyledSelect
        variant="outlined"
        value={heading}
        onChange={handleChange}
        className={classes.select}
        inputProps={{ 'aria-label': 'Text type' }}
        MenuProps={{
          disableScrollLock: true,
          classes: {
            paper: classes.menu,
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
      >
        {headers.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => toogleHeader(editor, option.value)}
          >
            <Typography variant={option.value} component="p">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default HeaderTypes;
