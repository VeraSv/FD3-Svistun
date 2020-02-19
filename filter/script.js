'use strict'


var MyTable = React.createClass({

    displayName: 'MyTable',
    propTypes: {
        list: React.PropTypes.array,
      },  

      getInitialState: function() {
        return { 
          sort:false,
          listH:this.props.list
        };
      },

      sortList: function() {
        var checkbox=document.querySelector('.checkbox');
        
        if(checkbox.checked==true) { 
          this.setState({sort:true})
        } else  this.setState({sort:false})
       
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
      },
      reset: function() {
        this.setState({listH:this.props.list});
       document.querySelector('.search').value='';
        document.querySelector('.checkbox').checked=false;
      },
      
    render: function(){
      
       var list= [];
       if(this.state.sort==false)
           {this.state.listH.forEach(function(i) {
         var item=React.DOM.option({key:i}, i)
           list.push(item)
           });} else {
            this.state.listH.slice().sort().forEach(function(i) {
              var item=React.DOM.option({key:i}, i)
                list.push(item)
                });
           }
          
           
      return React.DOM.div( {className:'MyTable'}, 
      React.DOM.input( {type:'checkbox', className:'checkbox',defaultChecked:false, onClick:this.sortList}),
      React.DOM.input({type:'text',className:'search', onChange:this.searchStr}), 
        React.DOM.input({type:'button',value:"Сброс",className:'reset', onClick:this.reset }), 
        
         React.DOM.form(null,
          React.DOM.select({className:'select', size:5, },list )))
    },
  
  });