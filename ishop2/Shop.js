

var Shop = React.createClass({

  displayName: 'Shop',

   propTypes: {
     shop: React.PropTypes.string,
     goods: React.PropTypes.array,
    },  
    selectedRow: function() {

    },
  render: function(){
     var good=this.props.goods.map(i =>
      React.createElement(Goods, {key:i.name,id:i.name, select:this.selectedRow, name:i.name, img:i.img, price:i.price, count:i.count, url:i.url}))
    return React.DOM.div( {className:'Shop'}, 
      React.DOM.h1( null, this.props.shop ),
      React.DOM.table({className:'Table'}, 
        React.DOM.tbody(null,
          React.DOM.tr({key:'title'},
          React.DOM.td(null,null),
          React.DOM.td(null,"Название"),
          React.DOM.td(null,"Цена"),
          React.DOM.td(null,"Остаток"),
          React.DOM.td(null,"URL"),
          React.DOM.td(null,"Control")),
          good)
      
    ));
    
  },

});