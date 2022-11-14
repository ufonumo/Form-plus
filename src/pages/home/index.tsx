import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/rootReducer"
import { useAppDispatch } from "../../app/store"
import { SearchBar, Select, WarningMessage } from "../../components"
import { Pagination } from "../../components/Pagination"
import { getTemplates } from "../../features/home/homeSlice"
import Templates from "../../components/templates"
import Loader from "../../assets/loader.gif"
import { categoryData, dateData, orderData } from "../../app/data"

const Home = () => {
    const dispatch = useAppDispatch()
    const [searchItems, setSearchItems] = useState("")
    const [category, setCategory] = useState("All")
    const [order, setOrder] = useState("")
    const [date, setDate] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const templateData: any = useSelector(
        (state: RootState) => state?.TemplateSlice
    )

    let [itemsPerPage] = useState(15)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentTemplate = templateData.templates.slice(
        indexOfFirstItem,
        indexOfLastItem
    )

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // function that handles the search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchItems(e.target.value)
        setCategory("")
        setOrder("")
        setDate("")
    }

    // function that handles the previous pagination button
    const previousClickHandler = () => {
        setCurrentPage(currentPage - 1)
    }

    // function that handles the next pagination button
    const nextClickHandler = () => {
        setCurrentPage(currentPage + 1)
    }

    // function that handles the category select
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCategory(e.target.value)
        setSearchItems("")
        setOrder("")
        setDate("")
    }

    // function that handles the order select
    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setOrder(e.target.value)
        setCategory("")
        setSearchItems("")
        setDate("")
    }

    // function that handles the date select
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
