export type ProjectItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string[];
  content?: string | null;
  is_show: boolean;
  is_featured: boolean;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
}
