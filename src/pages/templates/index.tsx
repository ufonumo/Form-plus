import { Card } from "../../components"

interface ITemplatesProps {
    currentTemplate: any
    searchItems: string
    category: string
    order: string
    date: string
}

const Templates = ({
    currentTemplate,
    searchItems,
    category,
    order,
    date,
}: ITemplatesProps) => {
    let searchedTemplates
    let categoryTemplates
    let sortedTemplates

    if (searchItems) {
        searchedTemplates = currentTemplate.filter((template: any) =>
            template.category.some((category: string) => {
                return category
                    .toLowerCase()
                    .includes(searchItems.toLowerCase())
            })
        )
    }

    if (category) {
        categoryTemplates = currentTemplate.filter((template: any) =>
            template.category.some((category: string) => {
                return category.toLowerCase().includes(category.toLowerCase())
            })
        )
    }

    if (order || date) {
        sortedTemplates = currentTemplate.sort(function (x: any, y: any) {
            console.log(x.created)
            return x.created - y.created
        })
    }

    return (
        <div className="home__cards">
            {!searchItems &&
                !category &&
                currentTemplate.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                        link={template?.link}
                    />
                ))}
            {searchItems &&
                searchedTemplates.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                        link={template?.link}
                    />
                ))}

            {category &&
                categoryTemplates.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                        link={template?.link}
                    />
                ))}

            {order &&
                sortedTemplates.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                        link={template?.link}
                    />
                ))}
        </div>
    )
}

export default Templates
