$\color{#f77f00}{\textsf{Responsive Online Shop discount}}$ 

![PINIA](https://img.shields.io/badge/PINIA-f77f00?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-f77f00?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-f77f00?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SCSS-f77f00?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-f77f00?style=flat&logo=html5&logoColor=fff)

### Swiper | Chart.js |


## Project setup
```
npm install
```

### Starts frontend
```
npm run serve
```

###   \{^_^}/ hi!

###  Starts json-server
```
npm run mock
```

###  Starts backend
```
npm run api
```

<img width="1086" alt="Снимок экрана 2025-04-04 в 14 20 40" src="https://github.com/user-attachments/assets/8ca8fa48-5398-4b19-9842-8437b7b15ed2" />

<img width="1110" alt="Снимок экрана 2025-04-04 в 14 20 59" src="https://github.com/user-attachments/assets/a3b14f24-7d9b-49b0-9e49-5348ec4df0a4" />

<img width="1104" alt="Снимок экрана 2025-04-04 в 14 21 56" src="https://github.com/user-attachments/assets/8af084bd-4559-45eb-adf2-ebe50fd73c9a" />



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