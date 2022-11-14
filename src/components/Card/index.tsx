import "./card.scss"

export interface CardProps {
    title: string
    subtext: string
    footerText: string
    link: string
}

const Card = ({ title, subtext, footerText, link }: CardProps) => {
    return (
        <div className="card_container">
            <div className="card__header">
                <h4 className="card__title">{title}</h4>
                <p className="card__subtext">{subtext}</p>
            </div>
            <div className="card__footer">
                <a href={link} className="card__footer--text">
                    {footerText}
                </a>
            </div>
        </div>
    )
}

export default Card
