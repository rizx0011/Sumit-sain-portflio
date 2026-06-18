export interface ExperienceItem {
    icon: string;
    role: string;
    location: string;
    startYear: string;
    endYear: string;
    bulletPoints: string[];
}

export interface EducationItem {
    date: string;
    title: string;
    subtitle: string;
    badge?: string;
}

export interface SideProjectItem {
    name: string;
    url: string;
    image: string;
}

export interface ProjectOverviewData {
    caseStudies: { name: string; url: string }[];
    sideProjects: SideProjectItem[];
}

export interface FeaturedWorkItem {
    title: string;
    description: string;
    roles: string[];
    image: string;
}
