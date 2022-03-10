import React, { useEffect } from 'react'
import FooterGranite from './FooterGranite';
import ItemGranite from './ItemGranite';
import Layout from './../../components/Layout/index';
import { useSelector, useDispatch } from 'react-redux';
import { getGraniteMaterial } from './../../actions/components/graniteMaterial';
import Help from './../../components/Help/Help';


const GraniteCatalog = (props) => {
  const graniteMaterial = useSelector((state) => state.graniteMaterial.graniteMaterial)
  console.log(graniteMaterial)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getGraniteMaterial())
  }, [])

  let typeGraniteFooterData = [
    {
      id: 1,
      name: 'Черный габбро-диабаз (Карелия)',
      img: 'https://home-granit.ru/images/color1.jpg',
      description: `Один из самых популярных материалов для изготовления памятников на кладбище.
      Практически 90% всех гранитных изделий ритуального направления в России выполнены
      именно из этого камня. Габбро-диабаз после полировки дает классический черный цвет, он
      стойкий к влаге, перепадам температур, не выцветает от солнечных лучей. По своей
      природе диабаз иногда имеет белесые включения, которые придают камню его уникальный
      вид. В народе данный камень получил название “Седой карельский камень” `,
      nameGranite: 'Преимущества габбро-диабаза',
      text: [
        'Классический черный цвет',
        'Возможность гравировки портретов, символов, знаков, рисунков',
        'Долговечность',
        'Износостойкость',
      ],
      transition: 'diabaz',
    },
    {
      id: 2,
      name: 'Черный габбро-диабаз (Карелия)',
      img: 'https://home-granit.ru/images/color2.jpg',
      description: `Набирающий популярность (особенно в Москве) материал для изготовления памятников из
      гранита. По своей структуре норит, также как и диабаз – это габбро. И темно-зеленый
      норит имеет все свойства габбро – он легок в изготовлении, мягкая структура позволяет
      гравировать портреты с передачей всех теней и полутеней, он влаго – и термоустойчив,
      не выгорает на солнце и не окисляется в среде. А самое главное – габбро-норит лишен
      основного недостатка черного диабаза: у зеленого габбро отсутствуют белесые и другие
      включения, что делает поверхность камня “чистой” и однородной. Именно поэтому, с
      каждым днем этот камень становится все популярней при выборе материала для памятника
      на могилу.`,
      nameGranite: 'Преимущества габбро-норита',
      text: [
        'Редкий темно-зеленый цвет',
        'Возможность гравировки портретов, символов, знаков, рисунков',
        'Долговечность',
        'Прочность',
        'Однородность структуры'
      ],
      transition: 'diabazOne',
    },

    {
      id: 3,
      name: 'Коричневый дымовский гранит (Карелия)',
      img: 'https://home-granit.ru/images/color3.jpg',
      description: `Коричневый дымовский гранит все чаще используется для изготовления памятников.
      Конечно, из-за своего богатого оттенка, его применяют и при создании композиций из
      нескольких цветов. Например, памятник изготавливают из черного габбро-диабаза, а
      подставку под памятник (тумбу), цветник, столбики, гранитную ограду и плитку для
      облицовки бетонного цоколя делают из дымовского гранита. Но памятник из коричневого
      натурального камня- это красиво, интересно и богато.`,
      nameGranite: 'Преимущества дымовского гранита',
      text: [
        'Насыщенный коричневый цвет',
        'Возможность гравировки символов, знаков',
        'Долговечность',
        'Отлично подходит для благоустройства могилы (гранитные столики, лоавочки, ограды, плитка и тд)',
      ],
      transition: 'diabazTwo',
    },
    {
      id: 4,
      name: 'Светлый мансуровский гранит (Урал)',
      img: 'https://home-granit.ru/images/color4.jpg',
      description: `Знаменитый во всем мире гранит из России, известный в других странах как “русский
    белый”. Свою популярность он получил в первую очередь из-за своего цвета, который
    очень похож внешне на мрамор, но при этом лишен всех его недостатков. Прогуливаясь по
    центральным улицам Москвы (Арбат, Знаменка, Тверская и др), вы можете наблюдать под
    своими ногами этот уникальный гранит. Светлый, почти белоснежный мансуровский гранит,
    также как и дымовский коричневый, чаще применяется для изготовления не памятников, а
    других элементов надгробия – тумбы, цветочные клумбы, ограды из гранита, облицовочная
    плитка итд. Но надгробие из мансуровского гранита - это самый лучший вариант из всех
    светлых оттенков`,
      nameGranite: 'Преимущества мансуровского гранита',
      text: [
        'Белоснежный, “мраморный” цвет',
        'Возможность гравировки портретов, символов, знаков, рисунков',
        'Уникальность - единственный в мире',
        'Отлично подходит для благоустройства могилы',
      ],
      transition: 'diabazThree',
    },
  ];
  let typeGraniteData = [
    {
      id: 1,
      name: 'Карельский габбро-диабаз',
      img: 'https://home-granit.ru/images/color1.jpg',
      color: 'Черный',
      transition: '#diabaz'
    },
    {
      id: 2,
      name: 'Уральский габбро-норит',
      img: 'https://home-granit.ru/images/color2.jpg',
      color: 'Зеленый',
      transition: '#diabazOne'
    },
    {
      id: 3,
      name: 'Дымовский гранит',
      img: 'https://home-granit.ru/images/color3.jpg',
      color: 'Коричневый',
      transition: '#diabazTwo'

    },
    {
      id: 4,
      name: 'Мансуровский гранит',
      img: 'https://home-granit.ru/images/color4.jpg',
      color: 'Светлый',
      transition: '#diabazThree'
    },
  ];
  const typeGraniteElement = graniteMaterial.map((material) => (
    <ItemGranite
      material={material}

    />
  ))

  const typeGraniteFooterElement = graniteMaterial.map((material) => (
    <FooterGranite
      material={material}
    />
  ))
 




  return (
    <Layout>

      <div className="container">
        <div className="row">
          <div className="TypeGranite-title">
            <h1 className="text-center">4 Цвета гранита для изготовления памятников</h1>
            <p className="text-center">
              Отечественные натуральные камни традиционного черного, насыщенного коричневого,
              благородного темного-зеленого или светло-серого цветов
            </p>
          </div>
          <div className="container TypeGranite-total">
            <div className="row">{typeGraniteElement}</div>
          </div>
        </div>
        <div className="container TypeGranite-footer">
          {typeGraniteFooterElement}

        </div>
        <div>
          <h1>Hwllo</h1>
        </div>

</div>
    </Layout>

  );
};

export default GraniteCatalog
