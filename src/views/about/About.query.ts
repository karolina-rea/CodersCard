import { graphql, useStaticQuery } from 'gatsby';

import type { LevelRange } from '@/components/Skill';

type Technology = {
  technologyName: string;
  technologyValue: LevelRange;
};

type Tool = {
  toolName: string;
  toolValue: LevelRange;
};

type Skill = {
  otherSkillName: string;
  otherSkillValue: LevelRange;
};

type Testimonial = {
  testimonialText: string;
  testimonialImage: {
    publicURL: string;
  };
  testimonialName: string;
  testimonialJob: string;
};

type AboutData = {
  aboutPageTitle?: string;
  aboutPageDescription?: string;
  aboutPageImage?: {
    publicURL?: string;
  };
  description: string;
  socialMedia: {
    technologies?: Technology[];
    tools?: Tool[];
    otherSkills?: Skill[];
  };
  testimonials?: Testimonial[];
};

type QueryResult = {
  aboutPage: {
    frontmatter: AboutData;
  };
};

export const useAboutQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    {
      aboutPage: markdownRemark(fileAbsolutePath: { regex: "/about-me/index-1.md/" }) {
        frontmatter {
          aboutPageTitle
          aboutPageDescription
          aboutPageImage {
            publicURL
          }
          description
          socialMedia {
            technologies {
              technologyName
              technologyValue
            }
            tools {
              toolName
              toolValue
            }
            otherSkills {
              otherSkillName
              otherSkillValue
            }
          }
          testimonials {
            testimonialText
            testimonialImage {
              publicURL
            }
            testimonialName
            testimonialJob
          }
        }
      }
    }
  `);

  return result.aboutPage.frontmatter;
};
