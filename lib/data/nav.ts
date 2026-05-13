export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV: NavItem[] = [
  { label: "Capabilities", href: "/#capabilities" },
  {
    label: "Products",
    href: "/#jal-prahari",
    children: [
      { label: "Jal Prahari", href: "/products/jal-prahari", description: "Autonomous river vessel" },
      { label: "ANVAY", href: "/products/anvay", description: "Sovereign data-ontology engine" },
      { label: "QuMail", href: "/products/qumail", description: "Post-quantum communications" },
    ],
  },
  { label: "Missions", href: "/#missions" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/#team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
];
