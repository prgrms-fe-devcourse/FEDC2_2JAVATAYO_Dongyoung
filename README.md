# 2JAVATAYO 🚐
![image](https://user-images.githubusercontent.com/15838144/173588144-7b85ad68-8736-4746-95b0-89a56e1e0dd3.png)
> 사이드 팀 프로젝트를 하고 싶은 분들을 위한 팀원 모집 서비스입니다.
---
<br>

## 🚪 프로젝트 소개
---
- 경력이 있는 신입을 원하는 사회, 협업 경험을 쌓고 싶으시다면 2JAVATAYO의 문을 두드려주세요.✊ 
- 👷‍♂️ 개발자 🧑‍🏫 디자이너 👩‍🔧AI엔지니어 등 다양한 포지션을 서로가 필요로 하고 있습니다.
- 규모가 작아도 실속있는 팀 프로젝트를 하고 싶은 개발자들이 모여 만든 서비스입니다.
---
<br>

## 🙋🏻 팀원 소개
|[박유현](https://github.com/YuHyun-P)|[김남경](https://github.com/NamgyungKim)|[마혜경](https://github.com/Hyevvy)|[정현진](https://github.com/hyunjin0910)|[주형진](https://github.com/hwoo3303)|
|:-:|:-:|:-:|:-:|:-:|
|![image](https://user-images.githubusercontent.com/15838144/173637134-d4c7f73a-b6de-49a5-9f96-eaa737d6e77c.png)|![image](https://user-images.githubusercontent.com/15838144/173637508-156a7456-924a-4c99-913b-07d1e3885852.png)|![image](https://user-images.githubusercontent.com/15838144/173637485-f877f1af-148f-4c29-9611-6f94be449cd6.png)|![image](https://user-images.githubusercontent.com/15838144/173637733-adc7103b-3cf8-4039-a2c1-55662786c9b3.png)|![image](https://user-images.githubusercontent.com/15838144/173637791-afd31c0a-6d87-464e-ab22-a15058b1361c.png)|
---
<br>

## ⚙️ 개발환경

### 💪 언어 & 라이브러리
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Context API](https://img.shields.io/badge/ContextAPI-4dd0e1.svg?&style=for-the-badge&logo=React&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-af8eb5.svg?&style=for-the-badge&logo=EmotionJS&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?&style=for-the-badge&logo=Storybook&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?&style=for-the-badge&logo=ESLint&logoColor=white)

### 🔧 도구
![Git](https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
---
<br>

## 설치 및 실행
- 설치 : $ `npm install`
- 실행 : $ `num run start`
- 스토리북 실행 : $ `npm run storybook`

## 폴더 구조
```
🚐 2JAVATAYO
├── package.json
├── node_modules
├── craco.config.js
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc.json
├── 📂 public
│   ├── favicon.ico
│   ├── index.html
│   └── 📂 assets
│          └── 📂 icons
├── 📂 src
│   ├── index.js
│   ├── App.tsx
│   ├── 📂 assets
│   ├── 📂 components
│   │      ├── 📂 404
│   │      ├── 📂 create
│   │      ├── 📂 detail
│   │      ├── 📂 edit
│   │      ├── 📂 home
│   │      ├── 📂 profile
│   │      ├── 📂 result
│   │      ├── 📂 signIn
│   │      ├── 📂 signUp
│   │      └── 📂 common
│   │             ├── 📂 AppLayout
│   │             ├── 📂 Button
│   │             ├── 📂 ErrorMessage
│   │             ├── 📂 Footer
│   │             ├── 📂 Icon
│   │             ├── 📂 Input
│   │             ├── 📂 Label
│   │             ├── 📂 ProfileImage
│   │             ├── 📂 SkillIcon
│   │             └── index.tsx
│   ├── 📂 constants
│   │      └── skill.ts
│   ├── 📂 hooks
│   │      ├── index.tsx
│   │      ├── useHover.stories.js
│   │      └── useHover.ts
│   ├── 📂 pages
│   │      ├── 404.tsx
│   │      ├── create.tsx
│   │      ├── detail.tsx
│   │      ├── edit.tsx
│   │      ├── home.tsx
│   │      ├── profile.tsx
│   │      ├── result.tsx
│   │      ├── signIn.tsx
│   │      ├── signUp.tsx
│   ├── 📂 routes
│   │      └── Router.tsx
│   ├── 📂 styles
│   │      ├── reset.tsx
│   │      └── theme.tsx
│   ├── 📂 types
│   │      ├── App.ts
│   │      └── model.ts
│   └── 📂 utils
│          ├── storage.ts
│          └── 📂 apis
│                 ├── auth.ts
│                 ├── channel.ts
│                 ├── comment.ts
│                 ├── common.ts
│                 ├── follow.ts
│                 ├── index.ts
│                 ├── like.ts
│                 ├── notification.ts
│                 ├── post.ts
│                 ├── search.ts
│                 ├── setting.ts
│                 └── user.ts
└── README.md
```
---
<br>

## 👷‍♂️ 지속적으로 추가 예정입니다. ☺️
