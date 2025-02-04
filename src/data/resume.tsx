import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mohith",
  initials: "MOHITH",
  url: "https://mohith.io",
  location: "Vijayawada, Andhra Pradesh ",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Enthusiastic Software Engineer. I love building things and contributing my skills to real-world projects.",
  summary:
    "At present, [I am pursuing a Btech degree in computer science at SRMAP University](/#education), with specialization in cloud computing. My preffered coding language is C++ and other languages are javaScript and C. I did web development projects using mern stack and next.js.",
  avatarUrl: "/me2.jpg",
  skills: [
    "C++",
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "c"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "mailto:mohithknl@gmail.com",
    tel: "+91 7396289316",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mohith0407/mohith0407",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohith-hanumanthkar-0407raj/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HMohithraj",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohithknl@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Research Project Intern",
      href: "https://ieeexplore.ieee.org/abstract/document/10723675",
      badges: [],
      location: "SRMAP University",
      title: "Cloud Project",
      logoUrl: "/idp.png",
      start: "Jan 2024",
      end: "May 2024",
      description:
        "A research project addresses the issues by proposing a novel hybrid task allocation algorithm that combines the strengths of the Artificial Bee Colony (ABC) algorithm with Particle Swarm Optimization (PSO).",
    },
    // {
    //   company: "APSSDC Summer Intern",
    //   href: "http://engineering.apssdc.in/",
    //   badges: [],
    //   location: "Remote",
    //   title: "MERN PROJECT",
    //   logoUrl: "/apssdc.webp",
    //   start: "May 2023",
    //   end: "Jul 2023",
    //   description:
    //     "During my APSSDC Summer Internship, I gained hands-on experience in MERN (MongoDB, Express.js, React, Node.js) stack and developed a Learning Management System (LMS). This platform enables users to manage courses, track progress, and enhance the online learning experience.",
    // },
    {
      company: "Chegg Expert(Freelancing)",
      badges: [],
      href: "https://expert.chegg.com/",
      location: "Remote",
      title: "Problem solving in Mathematics",
      logoUrl: "/chegg.jpg",
      start: "April 2023",
      end: "Jan 2024",
      description:
        "Helped students by providing clear, step-by-step solutions to math problems across topics like algebra, calculus, geometry, and statistics. Created a positive learning experience by offering helpful and student-friendly explanations.",
    },
    
  ],
  education: [
    {
      school: "SRMAP University",
      href: "https://srmap.edu.in/",
      degree: "B.Tech",
      logoUrl: "/btech.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanagroup.com/",
      degree: "Intermediate",
      logoUrl: "/college.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Narayana Group of schools",
      href: "https://www.narayanaschools.in/",
      degree: "10th",
      logoUrl: "/school.jpeg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Doctor Appointment App (Using azure computing) ",
      href: "",
      dates: "Oct 2024 - Dec 2024",
      active: false,
      description:
        "Designed and developed a web-based doctor appointment booking application using React for the front end and Node.js for the back end. Implemented Azure serverless computing to efficiently store and manage data using Azure Functions and Azure DB.",
      technologies: [
        "Reactjs",
        "Javascript",
        "AzureSql",
        "TailwindCSS",
        "NodeJs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mohith0407/doctor-appointment-using-azure",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p3.webp",
      video:
        "",
    },
    {
      title: "LMS platform",
      href: "",
      dates: "Jan 2024 - March 2024",
      active: true,
      description:
        "Developed a comprehensive LMS platform using React for an interactive user interface and Node.js for back-end logic and API development. Utilized MongoDB to store and manage course data, user profiles, and progress tracking for seamless data retrieval and storage.",
      technologies: [
        "Reactjs",
        "Javascript",
        "TailwindCSS",
        "MongoDB",
        
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mohith0407/lms-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "/p2.png",
      video: "",
    },
    {
      title: "Class Managment System",
      href: "",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description:
        "Developed a Classroom Management using C++ to identify and reserve available classrooms for teachers. Leveraged file handling techniques to store and manage data locally, ensuring reliable and efficient data storage without external databases.",
      technologies: [
        "C++",
        "Cpp File Handling",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mohith0407/srm-class-rooms-lab-management/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p1.svg",
      video: "",
    },
    {
      title: "Maximizing Resource Utilization Using Hybrid Cloud-based Task Allocation Algorithm",
      href: "https://ieeexplore.ieee.org/abstract/document/10723675",
      dates: "Feb 2024 - Jul 2024",
      active: true,
      description:
        "This is a research project, a hybrid algorithm combining the Artificial Bee Colony (ABC) and Particle Swarm Optimization (PSO) techniques to improve task allocation in cloud computing environments. The empirical results demonstrated that our hybrid approach offers a marginal improvement in resource utilization accuracy, as indicated by the fitness score, when compared to traditional ABC and PSO algorithms.",
      technologies: [
        "Research Project",
        "Python",
        "Jupyter NoteBook"
      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/abstract/document/10723675",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/p4.webp",
      video:
        "",
    },
  ],
  
} as const;
