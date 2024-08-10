import Link from "next/link"

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: "https://github.com/kanhaiya-bhayana"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kanhaiya-bhayana/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link target="_blank" href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })
    }
  </div>
}

export default Social