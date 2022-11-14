import { Card } from "../../components"

interface ITemplatesProps {
    currentTemplate: any
    searchItems: string
    category: string
}

const Templates = ({
    currentTemplate,
    searchItems,
    category,
}: ITemplatesProps) => {
    let searchedTemplates
    let categoryTemplates

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
                    />
                ))}
            {searchItems &&
                searchedTemplates.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                    />
                ))}

            {category &&
                categoryTemplates.map((template: any, index: number) => (
                    <Card
                        key={index}
                        title={template?.name}
                        subtext={template?.description}
                        footerText="Use Template"
                    />
                ))}
        </div>
    )
}

export default Templates
