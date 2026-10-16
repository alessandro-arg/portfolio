import type { Certification } from "@/types/portfolio";

export const certifications = [
  {
    id: "python-institute-pcep",
    name: "PCEP™ - Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    issuedOn: "2025-10-16",
    credentialUrl: "https://verify.openedg.org/?id=KajY.Hjuc.7BbA",
    credentialId: "KajY.Hjuc.7BbA",
  },
  {
    id: "developer-akademie-frontend-development",
    name: "Frontend Web Development",
    issuer: "Developer Akademie GmbH",
    issuedOn: "2025-08-13",
    credentialUrl: "https://developerakademie.com/certificate/75922292137892/",
    credentialId: "75922292137892",
  },
] satisfies readonly Certification[];
