'use strict'
var goodsH=[{name:'"Танцор"', img:'img/card1.jpg', price:'550 ₽', count: 10},
 {name:'"Коротыш"', img:'img/card2.jpg', price:'850 ₽', count: 7},
 {name:'"Мечтатель в черном"', img:'img/card3.jpg', price:'1500 ₽', count: 15}, 
 {name:'"Лентяй"', img:'img/card4.jpg', price:'590 ₽', count: 11},
 {name:'"Вулкан"', img:'img/card5.jpg', price:'550 ₽', count: 5},
 {name:'"Совушки"', img:'img/card6.jpg', price:'850 ₽', count: 25}, 
 {name:'"Три обезьянки"', img:'img/card7.jpg', price:'1500 ₽', count: 5}, 
 {name:'"Три сердца"', img:'img/card8.jpg', price:'590 ₽', count: 18},  
 {name:'"Малыш"', img:'img/card9.jpg', price:'850 ₽', count: 20},
 {name:'"Мечтатель"', img:'img/card10.jpg', price:'1500 ₽', count: 30},
 {name:'"Йог"', img:'img/card11.jpg', price:'590 ₽', count: 10}, 
 {name:'"Атлет"', img:'img/card12.jpg', price:'550 ₽', count: 16}, 
 {name:'"Беременяша"', img:'img/card13.jpg', price:'850 ₽', count: 36},
 {name:'"Романтик"', img:'img/card14.jpg', price:'1500 ₽', count: 16}, 
 {name:'"Русалка"', img:'img/card15.jpg', price:'590 ₽', count: 6}
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
            React.DOM.td(null,"Остаток на складе"));
            tableRows.push(titleTable);    
        goodsH.forEach(drawRow);
         function drawRow(i) {
           var nameGood= React.DOM.tr({key:i.name},
            React.DOM.td(null,
                React.DOM.img({src:i.img}, null)), 
           React.DOM.td(null, i.name),
           React.DOM.td(null, i.price),
           React.DOM.td(null, i.count));
           tableRows.push(nameGood);
        }
      return React.DOM.div( {className:'MyTable'}, 
        React.DOM.h1( null, this.props.shop ),
        React.DOM.table({className:'Table'}, 
          React.DOM.tbody(null, tableRows))
        
      );
      
    },
  
  });