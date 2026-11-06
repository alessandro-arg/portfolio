import { StripeDivider } from "@/components/layout/stripe-divider";
import { GitHubContributionsSection } from "@/components/sections/github-contributions-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { ProjectSection } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialLinks } from "@/components/sections/social-links";
import { StackSection } from "@/components/sections/stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

import { profile } from "@/content/profile";

export default function HomePage() {
  const personId = `${profile.contact.website}/#person`;
  const websiteId = `${profile.contact.website}/#website`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: profile.contact.website,
        jobTitle: profile.role,
        description: profile.about[0],
        homeLocation: {
          "@type": "Country",
          name: profile.location,
        },
        sameAs: [profile.contact.github, profile.contact.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: profile.contact.website,
        name: `${profile.name} Portfolio`,
        inLanguage: "en-US",
        author: {
          "@id": personId,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <HeroSection />
      <StripeDivider />
      <OverviewSection />
      <SocialLinks />
      <StripeDivider />
      <AboutSection />
      <GitHubContributionsSection />
      <StripeDivider />
      <ProjectSection />
      <StripeDivider />
      <StackSection />
      <StripeDivider />
      <ExperienceSection />
      <StripeDivider />
      <CertificationsSection />
      <StripeDivider />
      <TestimonialsSection />
      <StripeDivider />
      <ContactSection />
      <StripeDivider />
    </>
  );
}
