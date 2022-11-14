import "./card.scss"

export interface CardProps {
    title: string
    subtext: string
    footerText: string
}

const Card = ({ title, subtext, footerText }: CardProps) => {
    return (
        <div className="card_container">
            <div className="card__header">
                <h4 className="card__title">{title}</h4>
                <p className="card__subtext">{subtext}</p>
            </div>
            <div className="card__footer">
                <p className="card__footer--text">{footerText}</p>
            </div>
        </div>
    )
}

export default Card
