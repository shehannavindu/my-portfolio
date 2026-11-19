// ඔයාට වෙනස් කරන්න ඕන ඔක්කොම තියෙන්නේ මේ file එකේ විතරයි.

export const profile = {
  name: "Navindu Shehan",
  role: "Web development enthusiast",
  intro:
    "Second-year Computer Science undergraduate at UCSC. I like building things for the web and learning how real software is designed.",
  about: [
    "I am a second-year BSc Computer Science student at the University of Colombo School of Computing (UCSC). Web development is the area I enjoy most, and I am currently working with my team on a Junior Staff Management System.",
    "Alongside coursework I have built a Monopoly game in C, written a Software Requirements Specification, and designed a course enrolment system. I am looking for internships where I can keep learning.",
  ],
  facts: [
    { label: "University", value: "University of Colombo School of Computing" },
    { label: "Degree", value: "BSc in Computer Science" },
    { label: "Year", value: "2nd year" },
    { label: "Interest", value: "Web development" },
  ],
};

export const categories = ["All", "Web", "Software Engineering", "C"];

export const projects = [
  {
    title: "Junior Staff Management System",
    category: "Web",
    status: "In progress",
    description:
      "Our second-year team project: a web system for managing junior staff.",
    tech: ["Team project", "Web"],
    link: "",
  },
  {
    title: "NexusEnroll",
    category: "Software Engineering",
    status: "Completed",
    description:
      "A university course enrolment system, designed for our Software Architecture assignment.",
    tech: ["Software Architecture", "System design"],
    link: "",
  },
  {
    title: "Software Requirements Specification",
    category: "Software Engineering",
    status: "Completed",
    description:
      "An SRS document written for a Software Engineering assignment. It sets out what the system must do and how it should behave.",
    tech: ["SRS", "Documentation"],
    link: "",
  },
  {
    title: "Monopoly Game",
    category: "C",
    status: "Completed",
    description: "The classic Monopoly board game, built entirely in C.",
    tech: ["C"],
    link: "",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C", "C++", "PHP", "SQL", "JavaScript"] },
  { group: "Tools", items: ["GitHub", "Linux", "MySQL"] },
];

export const contact = {
  email: "navindushehan.ugc.2023@gmail.com",
    github: "https://github.com/shehannavindu",
};
