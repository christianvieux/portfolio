// data/techStack.js
import AWSIcon        from "../Icons/AWS.js";
import DockerIcon from "../Icons/Docker.js";
import DotNetIcon from "../Icons/DotNet.js";
import ExpressIcon from "../Icons/Express.js";
import GitIcon        from "../Icons/Git.js";
import HTML5Icon      from "../Icons/HTML5.js";
import JavaScriptIcon from "../Icons/JavaScript.js";
import NodeIcon       from "../Icons/Nodejs.js";
import PostgresSQLIcon from "../Icons/PostgresSQL.js";
import ReactIcon      from "../Icons/React.js";
import TailwindCSSIcon from "../Icons/TailwindCSS.js";
import VercelIcon     from "../Icons/Vercel.js";

export const techStackData = [
  {
    title: "Frontend",
    variant: "tag-a",
    items: [
      { label: "React",        icon: ReactIcon       },
      { label: "JavaScript",   icon: JavaScriptIcon  },
      { label: "Next.js",      icon: VercelIcon      },
      { label: "HTML / CSS",   icon: HTML5Icon       },
      { label: "Tailwind CSS", icon: TailwindCSSIcon }
    ],
  },
  {
    title: "Backend",
    variant: "tag-b",
    items: [
      { label: "Node.js",   icon: NodeIcon        },
      { label: "SQL",       icon: PostgresSQLIcon },
      { label: ".NET Core", icon: DotNetIcon      },
      { label: "Express",   icon: ExpressIcon     },
    ],
  },
  {
    title: "Tools & Cloud",
    variant: "tag-c",
    items: [
      { label: "AWS",    icon: AWSIcon    },
      { label: "Docker", icon: DockerIcon },
      { label: "Git",    icon: GitIcon    },
    ],
  },
];