import React, { Component } from "react";
import Filter from "../components/common/filter";
import ProductListing from "../components/productListing/productListing";
import { getCategories } from "../services/categoryService";
import { getCategory } from "../services/categoryService";
import { getProducts } from "../services/productService";
import { paginate } from "../utils/paginate";
import Pagination from "../components/common/pagination";
import SearchBox from "../components/common/searchBox";
import _ from "lodash";

class Shop extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 6,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    selectedCategory: null
  };

  async populateCategory() {
    try {
      const categoryName = this.props.match.params.category;
      if (categoryName !== undefined) {
        const category = await getCategory(categoryName)[0];
        this.setState({
          selectedCategory: category,
          searchQuery: "",
          currentPage: 1
        });
      } else {
        return;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    const categoryData = await getCategories();
    const categories = [{ _id: "", name: "All Categories" }, ...categoryData];

    const products = await getProducts();
    this.setState({ products, categories });

    await this.populateCategory();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedCategory: null,
      currentPage: 1
    });
  };

  handleItemSelect = category => {
    this.setState({
      selectedCategory: category,
      searchQuery: "",
      currentPage: 1
    });

    this.props.history.push(`/shop/${category.name}`);
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      selectedCategory,
      sortColumn,
      searchQuery,
      products: allProducts
    } = this.state;

    let filtered = allProducts;

    if (searchQuery)
      filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedCategory && selectedCategory._id)
      filtered = allProducts.filter(
        p => p.category._id === selectedCategory._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { currentPage, pageSize, categories, selectedCategory } = this.state;

    if (count === 0)
      return <p>There are no products available at this time.</p>;

    const { totalCount, data: products, searchQuery } = this.getPagedData();

    return (
      <div className="container page shop">
        <Filter
          items={categories}
          selectedItem={selectedCategory}
          onItemSelect={this.handleItemSelect}
        />
        <div className="shop__products">
          <div className="search">
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <p>Showing {totalCount} products</p>
          </div>
          <ProductListing products={products} />
          <Pagination
            productsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Shop;
