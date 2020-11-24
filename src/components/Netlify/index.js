/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import CMS from 'netlify-cms-app';

import { BlogPostPreview } from './BlogPostPreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
