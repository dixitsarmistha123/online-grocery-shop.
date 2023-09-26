// Layout.js
import React from 'react'; 
import ProductList from './ProductList';

const Layout = () => {
  return (
    <div>
      <ProductList />
      {/* <Switch>
        <Route path="/" exact component={ProductList} />
      </Switch> */}
    </div>
  );
};

export default Layout;
