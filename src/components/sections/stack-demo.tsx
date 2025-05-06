import { ContainerScroll, CardSticky } from "@/components/cards-stack"

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Understanding Client Needs",
        description:
            "We begin by deeply understanding your business requirements, challenges, and goals. This phase involves detailed discussions to ensure we align our solutions with your vision and objectives.",
    },
    {
        id: "process-2",
        title: "Strategic Planning",
        description:
            "Our team develops a comprehensive strategy tailored to your needs. This includes defining project scope, timelines, and selecting the best technologies to deliver optimal results.",
    },
    {
        id: "process-3",
        title: "Custom Solution Design",
        description:
            "In this phase, we design innovative and scalable IT solutions. Our focus is on creating user-friendly interfaces and robust architectures that align with your business goals.",
    },
    {
        id: "process-4",
        title: "Implementation and Development",
        description:
            "Our skilled developers bring the designs to life by implementing the planned solutions. We ensure high-quality coding standards and seamless integration with your existing systems.",
    },
    {
        id: "process-5",
        title: "Quality Assurance and Testing",
        description:
            "Before deployment, we rigorously test the solution to ensure it meets the highest standards of performance, security, and reliability. This phase guarantees a flawless user experience.",
    },
    {
        id: "process-6",
        title: "Deployment and Support",
        description:
            "Once the solution is ready, we deploy it efficiently and provide ongoing support. Our team ensures smooth operations, regular updates, and continuous optimization to meet evolving business needs.",
    },
]

// const WORK_PROJECTS = [
//   {
//     id: "work-project-3",
//     title: "YCF DEV",
//     services: ["Portfolio", "Partnership", "UI UX Design"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: "work-project-1",
//     title: "Stridath Ecommerce",
//     services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: "work-project-2",
//     title: "Marketing Agency",
//     services: ["Partnership", "UI UX Design", "Development"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ]

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "hsla(206, 52%, 18%, 0.3)", // Dark blue
  },
  {
    id: "achivement-2",
    title: "120+",
    description: "Project Delivered",
    bg: "hsla(173, 58%, 39%,0.3)", // Teal
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "hsla(43, 74%, 66%,0.3)", // Yellow
  },
  {
    id: "achivement-4",
    title: "98%",
    description: "Client Satisfaction",
    bg: "hsla(280, 65%, 60%,0.3)", // Purple
  },
];
const Process = () => {
  return (
    <div className="container min-h-svh place-content-center bg-stone-50 px-6 text-stone-900 xl:px-12 max-w-[100vw] mx-auto">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-20 md:sticky md:h-svh md:py-12">
          <h5 className=" text-xs uppercase tracking-wide">our process</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            Planning your{" "}
            <span className="text-indigo-500">project development</span> journey
          </h2>
          <p className="max-w-prose text-sm">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index}
              className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-indigo-500">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

// const Work = () => {
//   return (
//     <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
//       <div className="text-center">
//         <h5 className=" text-xs uppercase tracking-wide">latest projects</h5>
//         <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
//           Get a glimpse of <span className="text-indigo-500">our work</span>
//         </h2>
//         <p className="mx-auto max-w-prose text-sm text-muted/80">
//           From ecommerce to startup landing pages and singl/multi page websites,
//           building fully responsive and functional website that showcase your
//           product and your unique identity.
//         </p>
//       </div>
//       <ContainerScroll className="min-h-[500vh] py-12">
//         {WORK_PROJECTS.map((project, index) => (
//           <CardSticky
//             key={project.id}
//             index={index}
//             className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
//             incrementY={60}
//             incrementZ={5}
//           >
//             <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
//               <h2 className="text-2xl font-bold tracking-tighter">
//                 {project.title}
//               </h2>
//               <div className="flex flex-wrap gap-1">
//                 {project.services.map((service) => (
//                   <div
//                     key={service}
//                     className="flex rounded-xl bg-indigo-900 px-2 py-1"
//                   >
//                     <span className="text-xs tracking-tighter text-muted">
//                       {service}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <img
//               className="size-full object-cover"
//               width="100%"
//               height="100%"
//               src={project.imageUrl}
//             />
//           </CardSticky>
//         ))}
//       </ContainerScroll>
//     </div>
//   )
// }

const Achievements = () => {
    return (    
        <ContainerScroll className="min-h-[180vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
            {ACHIEVEMENTS.map((achievement, index) => (
                <CardSticky
                    key={achievement.id}
                    incrementY={0}
                    index={index + 2}
                    className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl border border-current p-8 shadow-md backdrop-blur-sm bg-opacity-10"
                    style={{
                        background: `${achievement.bg}`,
                    }}
                >
                    <h1 className="text-left text-6xl font-semibold opacity-80">
                        {achievement.title}
                    </h1>
                    <div className="place-items-end text-right">
                        <h3 className="max-w-[10ch] text-wrap text-4xl font-semibold capitalize tracking-tight">
                            {achievement.description}
                        </h3>
                    </div>
                </CardSticky>
            ))}
        </ContainerScroll>
    )
}
export { Process, Achievements }
