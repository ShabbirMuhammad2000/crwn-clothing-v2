import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import ProductCard from '../../product-card/product-card.component'
import Spinner from '../../spinner/spinner.component'

import { CategoryContainer, Title } from './category.styles'

import { selectIsLoading, selectCategoriesMap } from '../../../store/categories/category.selector'



const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;