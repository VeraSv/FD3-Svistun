'use strict'


var MyTable = React.createClass({

    displayName: 'MyTable',

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
            this.props.goods.forEach(drawRow);
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