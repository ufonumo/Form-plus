import SearchIcon from "../../assets/search-icon.svg"
import "./search.scss"

export interface SearchBarProps {
    text: string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const SearchBar = ({ text, handleSearch, value }: SearchBarProps) => {
    return (
        <form className="search__container">
            <input
                type="text"
                placeholder={text}
                onChange={(e) => {
                    handleSearch(e)
                }}
                name="search"
                className="search__bar"
                defaultValue={value}
            />
            <button type="button" className="btn__search">
                <img
                    src={SearchIcon}
                    className="search__bar_img"
                    alt="search"
                />
            </button>
        </form>
    )
}

export default SearchBar
