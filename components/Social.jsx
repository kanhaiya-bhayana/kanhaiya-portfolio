import { icons } from "lucide-react";
import Link from "next/link"

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/kanhaiya-bhayana"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kanhaiya-bhayana/"},
    {icon: <TbBrandLeetcode />, path: "https://leetcode.com/u/kanhaiya-dev/"}
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} target="_blank" href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })
    }
  </div>
}

export default Social