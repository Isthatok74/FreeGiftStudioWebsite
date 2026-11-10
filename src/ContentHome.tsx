import styled from 'styled-components';

// ---------------------------------------------------------------------------
// Project panel data
// ---------------------------------------------------------------------------

interface ProjectData {
  name: string;
  description: string;
  link: string;
  icon: string;
  linkText: string;
}

const projects: ProjectData[] = [
  {
    name: 'Paper Volleyball',
    description:
      'A stick-figure volleyball simulator and roguelite. Available on Steam, Google Play and Apple Store. Coming soon.',
    link: 'https://freegiftstudio.ca/paper-volleyball/',
    icon: '/papervolleyball-icon.png',
    linkText: 'Visit the project page',
  },
  {
    name: 'Chord Library',
    description:
      'Browse, edit, and save chord charts for any guitar chord. Create and print charts to PDF for your favorite songs and collections.',
    link: 'https://play.google.com/store/apps/details?id=com.myproj.chordchartgenerator',
    icon: '/chordlibrary-icon.png',
    linkText: 'Get it on Google Play',
  },
  {
    name: 'leagueportal.gg',
    description:
      'Plan seasons, schedules, scores, teams, standings, documents, and tournaments in one organized league workspace.',
    link: 'https://leagueportal.gg',
    icon: '/leagueportal-icon.svg',
    linkText: 'Visit leagueportal.gg',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ContentHome(): JSX.Element {
  return (
    <HomeContentContainer>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectPanel key={project.name}>
            <ProjectIcon
              src={project.icon}
              alt={`${project.name} icon`}
            />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText}
            </ProjectLink>
          </ProjectPanel>
        ))}
      </ProjectsGrid>

      <BusinessSection>
        <h2>Business Inquiries</h2>
        <p>Free Gift Studio</p>
        <p>1001677562 Ontario Inc.</p>
        <ContactLink href="mailto:support@freegiftstudio.ca">
          support@freegiftstudio.ca
        </ContactLink>
      </BusinessSection>
    </HomeContentContainer>
  );
}

// ---------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------

const HomeContentContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProjectPanel = styled.div`
  background-color: #3a3a3a;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.07);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4);
    border-color: rgba(212, 168, 90, 0.3);
  }
`;

const ProjectIcon = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const ProjectName = styled.h2`
  font-size: 1.3em;
  margin: 0.5rem 0;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.6;
  opacity: 0.75;
  text-align: center;
  flex-grow: 1;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.6rem 1.5rem;
  background-color: #d4a85a;
  color: #1a1a1a;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.85em;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e8c27a;
    color: #1a1a1a;
  }
`;

const BusinessSection = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
  font-size: 0.9em;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
`;

export default ContentHome;
