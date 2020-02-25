'use strict'


var MyTable = React.createClass({

    displayName: 'MyTable',
    propTypes: {
        list: React.PropTypes.array,
      },  

      getInitialState: function() {
        return { 
          listH:this.props.list,
          searchValue:'',
          sortChecked:false,
        };
      },

      sortList: function(EO) {
          this.setState({sortChecked:EO.target.checked})    
      },

      searchStr: function(EO) {
        var str=EO.target.value;
        var newList=[];
        this.props.list.forEach(function(i) {
          if(i.indexOf(str)!=-1) {
            newList.push(i);
          }
          
        });
        this.setState({listH:newList})
        this.setState({searchValue:str});
        
      },
      reset: function() {
        this.setState({listH:this.props.list});
        this.setState({searchValue:''});
        this.setState({sortChecked:false});
      },
      
    render: function(){
      
       var list= [];
      if(this.state.listH) {

       if(this.state.sortChecked==false)
           {this.state.listH.forEach(function(i) {
         var item=React.DOM.option({key:i}, i)
           list.push(item)
           });} else {
            this.state.listH.slice().sort().forEach(function(i) {
              var item=React.DOM.option({key:i}, i)
                list.push(item)
                });
           }
      }
           
      return React.DOM.div( {className:'MyTable'}, 
      React.DOM.input( {type:'checkbox', className:'checkbox',checked:this.state.sortChecked, onClick:this.sortList}),
      React.DOM.input({ type:'text',className:'search', value:this.state.searchValue, onChange:this.searchStr}), 
        React.DOM.input({type:'button',value:"Сброс",className:'reset', onClick:this.reset }), 
        
         React.DOM.form(null,
          React.DOM.select({className:'select', size:5, },list )))
    },
  
  });