interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Network Speed Test Tool',
    description: `Easily measure your internet speed with this reliable and accurate tool.`,
    imgSrc: '/static/images/speedt.jpg',
    href: '/scan',
  },
  {
    title: 'Leaked Password Analyzer',
    description: `Analyze and detect leaked Password efficiently. This tool helps you to identify compromised accounts password and Show how many time that password is found in leaked Data`,
    imgSrc: '/static/images/passleak.jpg',
    href: '/LeakedEmail',
  },
]

export default projectsData
