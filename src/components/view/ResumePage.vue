<script setup>
import Header from "../Header.vue";

const profile = {
  name: "Chanidapa Panta",
  nickname: "Esther",
  location:
    "8 Soi Petchkasem 45/1, Bang Khae Subdistrict, Bang Khae District, Bangkok 10160",
  email: "chanidapapanta@gmail.com",
  phone: "064-219-1941",
  instagram: "https://www.instagram.com/hxllo_esther/",
  github: "https://github.com/Chanidapaka",
};

const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["Vue.js", "Tailwind CSS"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Canva"],
  },
  {
    category: "Other",
    items: [
      "Video Editing (Adobe Premiere Pro, Capcut)",
      "Graphic Design (Canva)", "Blockchain"
    ],
  },
];

const experiences = [
  {
    role: "Blockchain Developer",
    company: "ZillaSpace, Bangkok",
    period: "November 8, 2024 ",
    points: [
      "Installed Linux on Windows to gain hands-on experience with blockchain development environments and learned best practices for cross-platform setups.",
      "Studied blockchain fundamentals, understanding its purpose, applications, and how decentralized systems operate.",
    ],
  },
];

const education = [
  {
    school: "Songpittayakom School",
    degree: "Arts-Math",
    period: "2017 - 2019",
  },
  {
    school: "Songpittayakom School",
    degree: "Arts-Math",
    period: "2020 - 2022",
  },
  {
    school: "King Mongkut's University of Technology Thonburi",
    degree: "School of Information Technology - SIT",
    period: "2023 - Present",
  },
];

const projects = [
  {
    name: "Github CloneWebtoon",
    link: "https://github.com/Chanidapaka/CloneWebtoon?tab=readme-ov-file",
    desc: "Webtoon clone with basic UI.",
    tags: ["HTML", "CSS"],
  },
  {
    name: "Github Mobile Phone E-commerce Platform",
    link: "https://github.com/Chanidapaka/Project-Ecommerce.git",
    desc: "Developed an E-commerce site for mobile phones featuring product listing, advanced filtering, and a responsive design built with Vue.js.",
    tags: ["Vue", "Tailwind"],
  },
  {
    name: "Github Personal Resume Website",
    link: "https://github.com/Chanidapaka/my-resume.git",
    desc: "Developed a responsive, single-page resume using Vue.js and Tailwind CSS for easy presentation and maintenance of personal information.",
    tags: ["Vue", "Tailwind"],
  },
  {
    name: "INT221-SSI-03 Project Demo",
    link: "https://intproj24.sit.kmutt.ac.th/ssi3/",
    desc: "Live demo of the E-commerce platform developed for the KMUTT Integrated Project (INT221).",
    tags: ["Vue", "Spring Boot"],
  },
  {
    name: "Live Resume Deployment",
    link: "https://my-resume-ten-snowy.vercel.app/",
    desc: "The live deployed version of this personal resume website, built using Vue.js and Tailwind CSS.",
    tags: ["Deployment", "Vue"],
  },
];
</script>

<template>
  <div class="container mx-auto p-6">
    <Header />

    <div class="md:grid md:grid-cols-3 gap-8">
      <!-- Left column: Profile & Skills -->
      <div class="space-y-6">
        <!-- Profile Card -->
        <div
          class="card p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 class="text-2xl font-bold text-gray-800">
            {{ profile.name }}
            <span class="text-gray-500">({{ profile.nickname }})</span>
          </h2>
    
          <div class="mt-4 space-y-2 text-sm text-gray-600">
            <p>📍 {{ profile.location }}</p>
            <p>
              ✉️
              <a
                class="underline hover:text-blue-500"
                :href="`mailto:${profile.email}`"
                >{{ profile.email }}</a
              >
            </p>
            <p>
              📞
              <a
                class="underline hover:text-blue-500"
                :href="`tel:${profile.phone}`"
                >{{ profile.phone }}</a
              >
            </p>
            <p>
              🌐
              <a
                class="underline hover:text-blue-500"
                :href="profile.instagram"
                target="_blank"
                rel="noopener noreferrer"
                >Instagram</a
              >
            </p>
            <p>
              🐙
              <a
                class="underline hover:text-blue-500"
                :href="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >
            </p>
          </div>
        </div>

        <!-- Skills Card -->
        <div
          class="card p-6 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
        >
          <h3 class="text-xl font-bold mb-5 text-gray-900 border-b pb-2">
            Technical Skills
          </h3>
          <div class="space-y-3 text-gray-700">
            <div
              v-for="(skillGroup, index) in skills"
              :key="index"
              class="flex flex-wrap items-center gap-2"
            >
              <span class="font-semibold text-blue-600"
                >{{ skillGroup.category }}:</span
              >
              <span class="text-gray-800">{{
                skillGroup.items.join(", ")
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column: Experience, Projects, Education -->
      <section class="md:col-span-2 space-y-6">
        <!-- Experience -->
        <div
          class="card p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-4">Experience</h3>
          <div class="space-y-4">
            <article v-for="(exp, i) in experiences" :key="i">
              <header
                class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
              >
                <h4 class="text-md font-medium text-gray-800">
                  {{ exp.role }} — {{ exp.company }}
                </h4>
                <p class="text-sm text-gray-500">{{ exp.period }}</p>
              </header>
              <ul class="list-disc ms-5 mt-2 space-y-1 text-gray-600 text-sm">
                <li v-for="(p, j) in exp.points" :key="j">{{ p }}</li>
              </ul>
            </article>
          </div>
        </div>

        <!-- Projects -->
        <div
          class="card p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-4">Projects</h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <a
              v-for="(p, i) in projects"
              :key="i"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-xl border hover:shadow-lg hover:bg-gray-50 transition"
            >
              <h4 class="font-semibold text-gray-800">{{ p.name }}</h4>
              <p class="text-sm text-gray-600 mt-1">{{ p.desc }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                  >#{{ t }}</span
                >
              </div>
            </a>
          </div>
        </div>

        <!-- Education -->
        <div
          class="card p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-4">Education</h3>
          <ul class="space-y-3 text-gray-700">
            <li v-for="(e, i) in education" :key="i">
              <p class="font-medium text-gray-800">{{ e.degree }}</p>
              <p class="text-sm text-gray-500">
                {{ e.school }} • {{ e.period }}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
}
</style>

<style scoped>
.card {
  background-color: white;
}
</style>
