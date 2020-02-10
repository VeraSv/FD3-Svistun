'use strict'
var goodsH=[{name:'"Танцор"', img:'img/card1.jpg', url:'https://images.app.goo.gl/zGyEEZ9g1bYx791s6', price:'550 ₽', count: 10},
 {name:'"Коротыш"', img:'img/card2.jpg', url:'https://dom-store.ru/image/catalog/image/data/Ecochelovek/1010/1.jpg', price:'850 ₽', count: 7},
 {name:'"Мечтатель в черном"', img:'img/card3.jpg', url:'https://im0-tub-by.yandex.net/i?id=71a46ff68775bceb14195f5e2cb8911a&n=13', price:'1500 ₽', count: 15}, 
 {name:'"Лентяй"', img:'img/card4.jpg', url:'https://proxy.imgsmail.ru/?h=cAZf3VIo4DCMujzma0eXcw&e=1428050186&is_https=1&url171=Z2FsbGVyeS5tYWlsY2hpbXAuY29tLzczNmIzYTg3NWFlM2QwMWY1ODg3Y2QzZGYvaW1hZ2VzLzFjMmNkYTc2LTExMzAtNDQwMS1iMTc1LWRkOThlNTY2ZjVkNy5qcGc~', price:'590 ₽', count: 11},
 {name:'"Вулкан"', img:'img/card5.jpg', url:'https://im0-tub-by.yandex.net/i?id=8174b29a98a406faa1af8bf3611a9ee3&n=13', price:'550 ₽', count: 5},
 {name:'"Совушки"', img:'img/card6.jpg', url:'https://images.cdn.inmyroom.ru/inmyroom/thumb/1240x796/jpg:60/uploads/post/teaser/b4/b415/jpg_2000_b415ff57-1633-4335-942d-eac2aa539e98.jpg?sign=63f6dbab8300fb842c1b21dfecaea91999490ccf5bf2e009590d8c0d39bd5496', price:'850 ₽', count: 25}, 
 {name:'"Три обезьянки"', img:'img/card7.jpg', url:'https://www.millionpodarkov.ru/incoming_img/podarkisosmislom.ru/3678027.jpg', price:'1500 ₽', count: 5}, 
 {name:'"Три сердца"', img:'img/card8.jpg', url:'http://www.kleus.ru/tmp/images/section18/7139a990b2505829339cf2c1871adbd1_0x600.jpg', price:'590 ₽', count: 18},  
 {name:'"Малыш"', img:'img/card9.jpg', url:'https://www.suvmedia.ru/cdn/models/71/28325ac10055029aa32728174c5eaf4c.jpeg', price:'850 ₽', count: 20},
 {name:'"Мечтатель"', img:'img/card10.jpg', url:'https://avatars.mds.yandex.net/get-pdb/1554263/3bad48f1-f680-4008-b050-9f6121c7d673/s1200', price:'1500 ₽', count: 30},
 {name:'"Йог"', img:'img/card11.jpg', url:'https://images.ru.prom.st/452161995_w640_h640_ekochelovechki-jog.jpg', price:'590 ₽', count: 10}, 
 {name:'"Атлет"', img:'img/card12.jpg', url:'https://uytterra.ru/wa-data/public/shop/products/27/79/77927/images/158229/158229.750.jpg', price:'550 ₽', count: 16}, 
 {name:'"Беременяша"', img:'img/card13.jpg', url:'https://im0-tub-by.yandex.net/i?id=17f6b927376f46bc077f953c8c4cced2&n=13', price:'850 ₽', count: 36},
 {name:'"Романтик"', img:'img/card14.jpg', url:'https://funburg.ru/upload/iblock/51e/romantik.jpg', price:'1500 ₽', count: 16}, 
 {name:'"Русалка"', img:'img/card15.jpg', url:'https://www.suvmedia.ru/cdn/models/71/e3582073eb34fdef42f883e26303881a.jpeg', price:'590 ₽', count: 6}
];

var MyTable = React.createClass({

    displayName: 'MyTable',

    getDefaultProps: function() {
        return { shop: "Эко-человеки", goods: goodsH }
      },

      propTypes: {
        shop: React.PropTypes.string,
        goods: React.PropTypes.array,
      },  
  
    render: function(){
        var tableRows=[];
        var titleTable=React.DOM.tr({key:'title'},
            React.DOM.td(null,null),
            React.DOM.td(null,"Название"),
            React.DOM.td(null,"Цена"),
            React.DOM.td(null,"Остаток"),
            React.DOM.td(null,"URL"),);
            tableRows.push(titleTable);    
        goodsH.forEach(drawRow);
         function drawRow(i) {
           var nameGood= React.DOM.tr({key:i.name},
            React.DOM.td(null,
                React.DOM.img({src:i.img}, null)), 
           React.DOM.td(null, i.name),
           React.DOM.td(null, i.price),
           React.DOM.td(null, i.count),
           React.DOM.td(null, i.url),);
           tableRows.push(nameGood);
        }
      return React.DOM.div( {className:'MyTable'}, 
        React.DOM.h1( null, this.props.shop ),
        React.DOM.table({className:'Table'}, 
          React.DOM.tbody(null, tableRows),)
        
      );
      
    },
  
  });