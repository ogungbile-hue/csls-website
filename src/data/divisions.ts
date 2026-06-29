import { Dna, Globe, Cpu, GraduationCap, Rocket, LucideIcon } from "lucide-react";

export interface Division {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  leader: string;
  introduction: string;
  vision?: string;
  mission?: string;
  mandate?: string;
  units?: string;
  keyResearchAreas?: string;
  currentProjects?: string;
  collaborationImpact?: string;
  globalPartnershipImpact?: string;
  innovationImpact?: string;
  communityImpact?: string;
  terrestrialBenefits?: string;
  staffMembers: string[];
}

export const divisionsData: Division[] = [
  {
    id: "asm",
    title: "Astrobiology and Space Medicine (ASM)",
    shortTitle: "ASM Division",
    icon: Dna,
    leader: "Dr. Juliet Oluwayemisi AYANTUNJI (Head of Division)",
    introduction: "The Division of Astrobiology and Space Medicine (ASM) serves as the critical interdisciplinary nexus within the Centre for Space Life Sciences, Ibadan, Nigeria. We are dedicated to exploring the fundamental and interconnected questions of how life adapts to the space environment and how we can protect human health for long-term exploration. Our work bridges the gap between understanding life’s potential beyond Earth and developing practical solutions for astronaut health by integrating research from microbes to humans. Through foundational projects like “Project IBADAN Microbiome” and strategic partnerships, we are establishing the building blocks for Africa’s leadership in space life sciences, with the ultimate goal of contributing to ground-breaking research that benefits humanity both on Earth and in space.",
    vision: "To pioneer Africa’s understanding of space life sciences, thereby promoting quality health and sustainable wellbeing beyond Earth.",
    mission: "Conducting revolutionary interdisciplinary research by exploring the effects of space environments on biological systems that benefit humanity on Earth and in space.",
    keyResearchAreas: "Origins of Life, Habitability, Extremophiles, Biosignatures, Space Missions.",
    currentProjects: "Collaborative research with international space agencies, development of new analytical techniques for detecting life, and educational initiatives to promote science literacy in astrobiology.",
    collaborationImpact: "We actively collaborate with leading research institutions worldwide, contributing to the global scientific conversation about humanity's place in the universe. Our research has implications for medicine, biotechnology, and our understanding of planetary science.",
    staffMembers: [
      "Dr. Juliet Oluwayemisi AYANTUNJI",
      "Akeem GBENLE",
      "Badirat Olajumoke IMRAN",
      "Ellen OMORODIN",
      "Johnson Oluwasegun IKARE",
      "Emmanuel Oluwafemi ORUNGBEJA",
      "Florence Bamidele ADEOYE",
      "Oladayo Emmanuel AKEREDOLU",
      "Olayinka Daniel OYEKOLA"
    ]
  },
  {
    id: "aeols",
    title: "Agriculture and Earth Observation (AEOLS)",
    shortTitle: "AEOLS Division",
    icon: Globe,
    leader: "Mr. Obimba Ogechukwu Harry (Head of Division)",
    introduction: "The Agriculture and Earth Observation Division of the Center for Space Live Science is dedicated to applying satellite data, remote sensing, and geospatial technologies to address challenges in agriculture, land management, and environmental monitoring. By integrating space science with practical field applications, the division serves as a bridge between cutting-edge research and real-world solutions for sustainable development.",
    vision: "We envision becoming a leading African hub for space-enabled agriculture and environmental stewardship, recognized globally for: Driving innovation in earth observation applications, Empowering communities with data-driven solutions, Advancing sustainable practices that safeguard ecosystems, Building resilience against climate change through science and technology.",
    mission: "Our mission is to harness the power of earth observation and space-based technologies to: Enhance agricultural productivity and food security, Support climate resilience and environmental sustainability, Provide actionable data for policymakers, researchers, and farmers, Promote innovation in precision agriculture and natural resource management.",
    currentProjects: "Innovative projects in satellite-based crop monitoring, development of space-adapted crop varieties, and creation of integrated life support demonstration modules.",
    globalPartnershipImpact: "We work with international agricultural organizations and space agencies to translate our research into practical solutions for food security. Our work has direct implications for developing nations seeking to improve agricultural yields and for space exploration missions planning long-duration missions.",
    staffMembers: [
      "Obimba Ogechukwu Harry",
      "Abdul Adegbite",
      "Abegunde Linda Oluwakemi",
      "Adamu Ismaila",
      "Ogungbile Precious Oluwapelimi"
    ]
  },
  {
    id: "sict",
    title: "Space ICT Division (SICT)",
    shortTitle: "Space ICT Division",
    icon: Cpu,
    leader: "Mr. Aileru Jamiu Taiwo (Head of Space ICT Division)",
    introduction: "The Space Information, Communication and Technology (Space ICT) Division of the Centre for Space Life Sciences (CSLS) serves as the technological and digital backbone of the Centre. The division is responsible for the development, deployment, and management of space-enabled information systems, communication platforms and emerging technologies that support space life sciences research, space security, innovation and national development.",
    mandate: "To provide advanced ICT infrastructure, space-based data services, secure communication systems, and innovation platforms that enhance research, training, intelligence, and technology transfer within CSLS and to national stakeholders.",
    vision: "To become a leading national hub for space information, communication, and digital technologies supporting space life sciences, security, and innovation.",
    mission: "To design and deploy innovative space ICT solutions, promote technology-driven entrepreneurship, and build national capacity in space-related information and communication systems.",
    keyResearchAreas: "Satellite Communications, Data Management, Network Technologies, Signal Processing, Cybersecurity.",
    currentProjects: "Advanced communication protocols for satellite systems, creating data analysis platforms for space missions, and designing next-generation ICT infrastructure for space exploration.",
    innovationImpact: "Terrestrial telecommunications, disaster management, climate monitoring, and remote sensing. We are committed to transferring space technology innovation to address real-world challenges.",
    staffMembers: [
      "Aileru Jamiu Taiwo",
      "Idowu Mayowa Opakunle",
      "Oladejo Emmanuel Olatunde",
      "Abubakar Abdullahi Jalli",
      "Olabode Olajide",
      "Usman Fortune Temitope",
      "Renner Moses Adeolu",
      "Ogundare Alaba George",
      "Bula Wilfred Msughter"
    ]
  },
  {
    id: "education-outreach",
    title: "Space Life Science Education & Outreach",
    shortTitle: "Education & Outreach",
    icon: GraduationCap,
    leader: "Mrs. Abegunde Linda Olukemi (Head of Space Life Science Education & Outreach)",
    introduction: "The education Outreach division develops programs and activities that teach, inform and connect people with knowledge, resources and opportunities in the space science field.",
    vision: "To be a leading division in space life sciences education and outreach, fostering a scientifically informed society and inspiring the next generation of life scientists in Nigeria.",
    mission: "To promote space life sciences knowledge through education, outreach programs, stakeholder engagement, and capacity-building initiatives that support national development and scientific advancement.",
    keyResearchAreas: "Science Education, Public Outreach, Student Development, Science Communication, STEM Promotion.",
    currentProjects: "Educational programs including science camps, school partnerships, university collaborations, public science festivals, teacher training workshops, mentorship programs, and scholar support initiatives.",
    communityImpact: "Creating pathways for talented individuals from underrepresented communities to pursue scientific careers, while fostering public understanding and appreciation for space research and its applications.",
    staffMembers: [
      "Abegunde Linda Olukemi",
      "Coker Quadry Ajani",
      "Samuel Akinbode Dosumu",
      "Usman Fortune Temitope",
      "Abdullahi Abubakar Jalli",
      "Nuhu Shalom Dauramen",
      "Bula Wilfred Msughter"
    ]
  },
  {
    id: "stlss",
    title: "Space Technology & Life Support System (STLSS)",
    shortTitle: "STLSS Division",
    icon: Rocket,
    leader: "Engr. Dr. Adedoja Oluwaseye Samson, CE (Head of STLSS Division)",
    introduction: "The Space Technology and Life Support System (STLSS) Division is dedicated to supporting Nigeria’s and Africa’s participation in human space exploration through the development of space travel technologies, sustainable habitation systems, and life-support infrastructure. Responsibilities include developing, testing, deploying, and maintaining facilities and technologies that enable safe human space travel, sustainable habitation, and life support systems.",
    units: "Space Travel and Habitation Unit; Instrumentation and Innovative Technologies Unit; Maintenance and Technical Support Services Unit.",
    terrestrialBenefits: "The research conducted has significant applications for treating Earth-bound conditions including osteoporosis, muscle atrophy disorders, cardiovascular disease, and aging-related decline. We bridge the gap between space medicine and clinical medicine, creating innovations that improve healthcare quality for all.",
    staffMembers: [
      "Engr. Dr. Adedoja Oluwaseye Samson CE",
      "Akomolafe Olawale Tayo",
      "Ayanleke Bolaji Blessing",
      "Arotiowa Joel Ilesanmi",
      "Aminu Odunayo Peter",
      "Olakunle Taiwo Joshua",
      "Afolabi Ezekiel Bode",
      "Ogundare Alaba George"
    ]
  }
];
