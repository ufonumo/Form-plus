import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/rootReducer"
import { useAppDispatch } from "../../app/store"
import { SearchBar, Select, WarningMessage } from "../../components"
import { Pagination } from "../../components/Pagination"
import { getTemplates } from "../../features/home/homeSlice"
import Templates from "../templates"
import Loader from "../../assets/loader.gif"

const Home = () => {
    const categoryData = ["All", "Education", "E-commerce", "Health"]
    const orderData = ["Default", "Ascending", "Descending"]
    const dateData = ["Default", "Ascending", "Descending"]

    const dispatch = useAppDispatch()
    const [searchItems, setSearchItems] = useState("")
    const [category, setCategory] = useState("All")
    const [order, setOrder] = useState("Default")
    const [date, setDate] = useState("Default")
    const templateData: any = useSelector(
        (state: RootState) => state?.TemplateSlice
    )

    let [itemsPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentTemplate = templateData.templates.slice(
        indexOfFirstItem,
        indexOfLastItem
    )

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchItems(e.target.value)
        setCategory("")
        setOrder("Default")
        setDate("Default")
    }

    const previousClickHandler = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextClickHandler = () => {
        setCurrentPage(currentPage + 1)
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCategory(e.target.value)
        setSearchItems("")
        setOrder("Default")
        setDate("Default")
    }

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setOrder(e.target.value)
        setCategory("")
        setSearchItems("")
        setDate("Default")
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setOrder("")
        setSearchItems("")
        setDate(e.target.value)
        setCategory("")
    }

    useEffect(() => {
        dispatch(getTemplates(""))
    }, [dispatch, searchItems, category, order, date])

    return (
        <div className="home__container">
            <div className="home__header">
                <SearchBar
                    text="Search Templates"
                    handleSearch={(e) => {
                        handleSearch(e)
                    }}
                    value={searchItems}
                />
                <div className="home__sortBy">
                    <p className="home__sortBy--title">Sort By:</p>
                    <Select
                        title="Category"
                        options={categoryData}
                        handleChange={(e) => handleCategoryChange(e)}
                        value={category}
                    />
                    <Select
                        title="Order"
                        options={orderData}
                        handleChange={(e) => {
                            handleOrderChange(e)
                        }}
                        value={order}
                    />
                    <Select
                        title="Date"
                        options={dateData}
                        handleChange={(e) => {
                            handleDateChange(e)
                        }}
                        value={date}
                    />
                </div>
            </div>
            <WarningMessage />
            <div className="home__card--container">
                <p className="template__name">{category || "All"} Templates</p>
                <p className="template__found">
                    {templateData.templates.length} templates
                </p>{" "}
            </div>

            {templateData.loading && (
                <div className="loader">
                    <img src={Loader} alt="loader" />
                </div>
            )}

            {templateData?.templates?.length < 0 ? (
                <p>No templates found</p>
            ) : (
                <div>
                    <Templates
                        currentTemplate={currentTemplate}
                        searchItems={searchItems}
                        category={category}
                        order={order}
                        date={date}
                    />

                    <Pagination
                        paginate={paginate}
                        ItemsPerPage={itemsPerPage}
                        totalTemplates={templateData.templates.length}
                        currentPage={currentPage}
                        onPreviousClick={previousClickHandler}
                        onNextClick={nextClickHandler}
                        totalTemplatesCount={templateData.templates.length}
                    />
                </div>
            )}
        </div>
    )
}

export default Home
