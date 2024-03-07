export interface IInfoCard {
    image:string
    description:React.ReactNode
    reverse:boolean
    title:string
}
export const infoCard:IInfoCard[] = [
    {
        image:'src/assets/image/eni.jpg',
        description:"L’Ecole Nationale d’Informatique, en abrégé ENI, est un établissement d’enseignement supérieur rattaché académiquement et administrativement à l’Université de Fianarantsoa. Le siège de l’Ecole se trouve à Tanambao-Antaninarenina à Fianarantsoa. L’adresse pour la prise de contact avec l’Ecole est la suivante : Ecole Nationale d’Informatique (ENI) Tanambao, Fianarantsoa. Le numéro de sa boîte postale est 1487 avec le code postal 301. Téléphone : 034 05 733 36 ou 032 15 204 28. Son adresse électronique est la suivante : eni@eni.mg. Il dispose également d'un site web : www.eni.mg",
        reverse:false,
        title:"A propos de l'ENI"
    },
    {
        image:'src/assets/image/aeeni.jpg',
        description:"L’Ecole Nationale d’Informatique, en abrégé ENI, est un établissement d’enseignement supérieur rattaché académiquement et administrativement à l’Université de Fianarantsoa. Le siège de l’Ecole se trouve à Tanambao-Antaninarenina à Fianarantsoa. L’adresse pour la prise de contact avec l’Ecole est la suivante : Ecole Nationale d’Informatique (ENI) Tanambao, Fianarantsoa. Le numéro de sa boîte postale est 1487 avec le code postal 301. Téléphone : 034 05 733 36 ou 032 15 204 28. Son adresse électronique est la suivante : eni@eni.mg. Il dispose également d'un site web : www.eni.mg",
        reverse:true,
        title:"A propos de l'AEENI"
    },
]