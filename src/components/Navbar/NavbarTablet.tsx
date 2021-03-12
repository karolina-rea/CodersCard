import React from 'react';
import { Download } from 'react-feather';
import { Box, Divider, makeStyles, MenuList, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { Button } from '@/components/Button';

import type { NavbarProps } from './Navbar';
import { renderNavItems } from './renderNavItems';

type NavbarTabletProps = Omit<NavbarProps, 'type'> & {
  withoutBlogPage: boolean;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[3],
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: theme.spacing(1.5),
  },
  menu: {
    display: 'flex',
    padding: 0,
  },
}));

export const NavbarTablet = ({
  className,
  fullName,
  image,
  position,
  resumeLink,
  withoutBlogPage,
  ...props
}: NavbarTabletProps) => {
  const classes = useStyles();

  return (
    <Box {...props} className={clsx(className, classes.root)}>
      <Box display="flex" alignItems="center" justifyContent="space-between" px={4} py={1}>
        <Box display="flex" alignItems="center">
          <img className={classes.image} src={image} alt={fullName} />
          <Box>
            <Typography variant="h5">{fullName}</Typography>
            <Typography variant="subtitle2">{position}</Typography>
          </Box>
        </Box>
        {resumeLink && (
          <Button size="small" variant="contained" color="primary" href={resumeLink} startIcon={<Download size={16} />}>
            Polish CV
          </Button>
        )}
      </Box>
      <Divider />
      <MenuList className={classes.menu} variant="menu">
        {renderNavItems(undefined, withoutBlogPage)}
      </MenuList>
    </Box>
  );
};
