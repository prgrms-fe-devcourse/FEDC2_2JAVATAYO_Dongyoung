import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkillIcon from ".";

export default {
  title: "Component/SkillIcon",
  component: SkillIcon,
  argTypes: {
    name: {
      options: [
        "Angular",
        "Appwrite",
        "Bootstrap",
        "C",
        "Cpp",
        "Django",
        "Express",
        "FastApi",
        "Figma",
        "Firebase",
        "Flutter",
        "Gatsby",
        "GraphQl",
        "Html5",
        "Java",
        "Julia",
        "Kotlin",
        "Lua",
        "MongoDb",
        "Mui",
        "MySql",
        "NestJs",
        "NextJs",
        "NodeJs",
        "NuxtJs",
        "Oracle",
        "PostgreSql",
        "Python",
        "R",
        "React",
        "Recoil",
        "Redux",
        "RN",
        "Sass",
        "Spring",
        "Svelte",
        "Swift",
        "Tailwind",
        "TensorFlow",
        "TypeScript",
        "Vue",
        "Zeplin"
      ],
      control: { type: "select" }
    },
    alt: { defaultValue: "Angular" }
  }
} as ComponentMeta<typeof SkillIcon>;

export const Default: ComponentStory<typeof SkillIcon> = (args) => {
  return <SkillIcon {...args} />;
};
