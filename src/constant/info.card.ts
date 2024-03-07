export interface IInfoCard {
    image:string
    description:React.ReactNode
    reverse:boolean
    title:string
}
export const infoCard:IInfoCard[] = [
    {
        image:'src/assets/image/eni.jpg',
        description:"Fondée en 1983, l'École Nationale d'Informatique (ENI), affiliée à l'Université de Fianarantsoa, joue un rôle essentiel dans la diffusion des connaissances et des technologies informatiques à Madagascar. Elle forme des spécialistes compétents à travers des formations professionnelles adaptées aux besoins des entreprises. Dans ses espaces d'apprentissage, les lignes de code s'animent, les projets prennent vie, et les esprits s'ouvrent aux horizons infinis du numérique. Les étudiants transforment les algorithmes en solutions concrètes. L’ENI, véritable vitrine, contribue activement à façonner l’avenir numérique de Madagascar. ",
        reverse:false,
        title:"A propos de l'ENI"
    },
    {
        image:'src/assets/image/aeeni.jpg',
        description:"L’AEENI (Association des Étudiants de l’École Nationale d’Informatique), au sein de l’ENI Fianarantsoa, est une organisation étudiante dynamique et engagée. Elle vise à promouvoir l’excellence académique en encourageant les étudiants à exceller dans leurs études en informatique. De plus, elle favorise l’échange et la collaboration en créant un espace où les étudiants partagent leurs connaissances, collaborent sur des projets et s’entraident. L’AEENI organise également des événements tels que des hackathons, des conférences et des sorties pour enrichir l’expérience étudiante et permettre aux étudiants de découvrir des entreprises, des centres de recherche et des technologies innovantes. En outre, elle encourage les projets collaboratifs, facilite le réseautage professionnel avec des experts du domaine et incite les étudiants à participer à des compétitions externes pour renforcer leur expertise et leur confiance.",
        reverse:true,
        title:"A propos de l'AEENI"
    },
]