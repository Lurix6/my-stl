import React from 'react';
import './style.scss';
import CategoryItem from './categoryItem/';
import CategoryExample from './categoryExample';
import { Link } from 'react-router-dom';

const imgExample = [
  'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-236-1079x606.jpg',
  'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-235-1079x606.jpg',
  'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-234-1079x606.jpg',
  'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-233-1079x606.jpg',
  'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-232-400x250.jpg',
]

const categories = [
  { 
    title: 'Багети',
    img: 'http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-072-1079x606.jpg'
  },
  { 
    title: 'Балясини',
    img: 'http://art-master3d.com/image/cache/data/Category/Lestnica/baljasina-dlya-chpu-005-1079x606.jpg'
  },
  { 
    title: 'Двері',
    img: 'http://art-master3d.com/image/cache/data/Category/Kronshtein/dver-dlya-chpu-011-1079x606.jpg'
  },  
  { 
    title: 'Декор',
    img: 'http://art-master3d.com/image/cache/data/Category/Dekor/dekor-dlya-chpu-235-1079x606.jpg'
  },  
  { 
    title: 'Декор угловий',
    img: 'http://art-master3d.com/image/cache/data/Category/Yglovoi%20element/ugol-dlya-chpu-034-1079x606.jpg'
  },  
  { 
    title: 'Ікони',
    img: ''
  },  
  { 
    title: 'Капітель',
    img: 'http://art-master3d.com/image/cache/data/Category/Kolona/kronshtein-dlya-chpu-040-1079x606.jpg'
  },  
  { 
    title: 'Кронштейни',
    img: 'http://art-master3d.com/image/cache/data/Category/Kronshtein/kronshtein-dlya-chpu-016-1079x606.jpg'
  },  
  { 
    title: 'Мебель',
    img: 'http://art-master3d.com/image/cache/data/Category/Mebel/chair/stul-dlya-chpu-001-400x250.jpg'
  },  
  { 
    title: 'Рамки',
    img: 'http://art-master3d.com/image/cache/data/Category/Zerkala/zerkalo-dlya-chpu-042-400x250.jpg'
  },  
  { 
    title: 'Розетки',
    img: 'http://art-master3d.com/image/cache/data/Category/Rozetka/Kruglaya/rozetka-dlya-chpu-079-400x250.jpg'
  },
  { 
    title: 'Фасади',
    img: 'http://art-master3d.com/image/cache/data/Category/Fasad/fasad-dlya-chpu-019-1079x606.jpg'
  },
]

const Categories = (props) => (
  <div className="categories-page">
    <h1> Всі категорії </h1>
    <div className="categories-grid">
      {
          categories.map(({title, img}) => 
            <CategoryItem key={title} title={title} imgSrc={img} />
          )
      }
      </div>
      {
        categories.map(({title, img}) => 
          (
            <CategoryExample key={title} title={title}>
              <Link to='/model/id'>
                <img src={imgExample[0]} />
              </Link>
              <div className="category-example__thumbnail__list">
                {
                  imgExample.map( img => 
                    {
                      if( img !== imgExample[0])
                      return (
                        <Link to='/model/id'>
                          <img src={img} />
                        </Link>)
                    }
                  )
                }
              </div>
            </CategoryExample>
          )
        )
      }
  </div>
)

export default  Categories;