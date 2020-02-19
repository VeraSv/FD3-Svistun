'use strict'


var Goods = React.createClass({

    displayName: 'Goods',

     propTypes: {
       
       name: React.PropTypes.string.isRequired,
       id: React.PropTypes.string.isRequired,
       select:React.PropTypes.func.isRequired,
       price:React.PropTypes.string.isRequired,
       count:React.PropTypes.number.isRequired,
       url: React.PropTypes.string.isRequired,
      }, 
      selectedRow: function() {
        var goodH=document.getElementsByTagName('tr');
        for(var i=0;  i<goodH.length; i++) goodH[i].style.background=('white')
         document.getElementById(this.props.id).style.background=('red')
      }, 

      deleteRow: function() {
        var question=confirm('Удалить товар?');
        if (question) document.getElementById(this.props.id).style.display=('none');
      },
     
    render: function(){
        
      return React.DOM.tr( {key:this.props.name,id:this.props.name, onClick:this.selectedRow,}, 
        React.DOM.td(null,
          React.DOM.img({src:this.props.img}, null)), 
     React.DOM.td(null, this.props.name),
     React.DOM.td(null,this.props.price),
     React.DOM.td(null,this.props.count),
     React.DOM.td(null, this.props.url),
     React.DOM.td(null,
      React.DOM.input({type:'button', value:'Delete', onClick:this.deleteRow}))
      );
      
     }
  
  });