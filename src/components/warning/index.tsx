import InfoIcon from "../../assets/info.svg"
import "./warning.scss"

const WarningMessage = () => {
    return (
        <div className="warning__container">
            <img src={InfoIcon} alt="info" className="warning__icon" />
            <p className="warning__text">
                Tada! Get started with a free template. Can’t find what you are
                looking for? Search from the 1000+ available templates
            </p>
        </div>
    )
}

export default WarningMessage
