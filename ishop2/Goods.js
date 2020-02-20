'use strict'


var Goods = React.createClass({

    displayName: 'Goods',

     propTypes: {
       img:React.PropTypes.string.isRequired,
      
       name: React.PropTypes.string.isRequired,
       id: React.PropTypes.string.isRequired,
       selectedGood:React.PropTypes.string.isRequired,
       deleteGood:React.PropTypes.func.isRequired,
       select:React.PropTypes.func.isRequired,
       price:React.PropTypes.string.isRequired,
       count:React.PropTypes.number.isRequired,
       url: React.PropTypes.string.isRequired,
      }, 
      selectedRow: function() {
        this.props.select(this.props.id)
    
      }, 

      deleteRow: function() {
        var question=confirm('Удалить товар?');
        
        if (question) this.props.deleteGood(this.props.name)
      },
     
    render: function(){
      var color='';
        if (this.props.selectedGood==this.props.id) {
          color='red';
        } else color='white';
      return React.DOM.tr( {key:this.props.name,id:this.props.name, style:{background:color}, onClick:this.selectedRow,}, 
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