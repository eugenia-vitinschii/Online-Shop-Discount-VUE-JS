### $\color{#f77f00}{\textsf{Responsive Online Shop discount}}$ 

![PINIA](https://img.shields.io/badge/PINIA-f77f00?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-f77f00?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-f77f00?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SCSS-f77f00?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-f77f00?style=flat&logo=html5&logoColor=fff)
![Swiper](https://img.shields.io/badge/swiper-js?style=flat&logo=swiper&color=%23f77f00)
![Chart](https://img.shields.io/badge/chart-js?style=flat&logo=chartdotjs&logoColor=%23fff&color=%23f77f00)
![Node-js](https://img.shields.io/badge/node-js?style=flat&logo=nodedotjs&logoColor=%23fff&color=%23f77f00)
![Express-js](https://img.shields.io/badge/express-js?style=flat&logo=express&logoColor=%23ffffff&color=%23f77f00)


## Swiper | Chart.js |

# 🧪 Running the Project

### Project setup
```
npm install
```

### Starts frontend
```
npm run serve
```

### Starts json-server  \{^_^}/ hi!

```
npm run mock
```

###  Starts backend
```
npm run api
```


## 📁 Project Structure

```
discount/
├── backend/         # Node.js Express API
│   └── server.js
├── frontend/        # Vue 3 frontend
│   └── public/
│       └── index.html
│   └── src/
│       └── assets/
│           └── scss/
│              └── abstracts/
│                 └── _all.scss
│                 └── _mixins.scss
│                 └── _variables.scss
│                 └── ...
│              └── compoments/
│              └── core/
│                 └── _all.scss
│                 └── _reset.scss
│                 └── _typography.scss
│              └── layout/
│                 └── _all.scss
│                 └── _header.scss
│                 └── _footer.scss
│                 └── _navigation.scss
│              └── pages/
│              └── sections/
│              └── app.sass #import all sass folders
│       └── components/
│       └── layout/
│       └── models/
│           └── product.js #product constructor
│       └── router/
│           └── index.js
│           └── admin.routes.js
│           └── info.routes.js
│           └── products.routes.js
│       └── sections/
│       └── stores/  #Pinia stores
│           └── product 
│              └── actions.js
│              └── getters.js
│              └── state.js
│              └── index.js
│           └── brand.js
│           └── wachedProducts.js
│       └── views/
│       └── App.vue/
│   └── db.json

```
### 🚀 Features

## 👤 User Views

- Home 
   - Display of featured and washed (recently viewed) products
   - Swiper.js top products carousel, wached products carousel
   - Promo banners 
- Products
   - Filter by brand, price, promo price
   - Search products by name
   - Dynamic promo stickers based on discount logic

- Promo 
   - Display only discounted products
- Product 
   - Detailed view with price, specs, and promo details
   - Tables showing installment and credit payment plans (using dynamic components with :is)
   - Product item info table
- Cart 
   - Remove products
   - Product quantity counter
   - Calculate sum,  view totals
- Favorite  
   - Manage favorite products
- Brands  
   - Full list of available brands


## 🛠️ Admin Views
 
- Add New Product
- Update Product Info
- Delete Product
- Add New Brand
- Product Charts
- Visual representation of product data using charts.js