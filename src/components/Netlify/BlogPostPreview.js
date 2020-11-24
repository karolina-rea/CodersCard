/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import * as React from 'react';

import { formatDate } from '../../utils/date';
import { ThemeProvider } from '../../utils/theme';
import { BlogPost } from '../BlogPostComponent';

export const BlogPostPreview = ({ entry }) => (
  <ThemeProvider>
    <BlogPost
      title={entry.getIn(['data', 'blogTitle'])}
      text={entry.getIn(['data', 'blogDescription'])}
      tagName={entry.getIn(['data', 'blogLabel'])}
      date={formatDate(entry.getIn(['data', 'blogBody']), 'day')}
      image={entry.getIn(['data', 'blogBody.publicURL'])}
      onClick={() => ({})}
    />
  </ThemeProvider>
);
