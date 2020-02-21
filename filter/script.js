'use strict'


var MyTable = React.createClass({

    displayName: 'MyTable',
    propTypes: {
        list: React.PropTypes.array,
      },  

      getInitialState: function() {
        return { 
          key1:'resetSort',
          key2:'resetSearch',
          listH:this.props.list,
          searchValue:'',
          sortCheked:false,
          
        };
      },

      sortList: function() {
       
        if(this.state.sortCheked==true) { 
          this.setState({sortCheked:false})
          this.setState({key1:'resetSort'})
        } else {
           this.setState({sortCheked:true})
           this.setState({key1:'chekedSort'})
        }
      
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
        this.setState({key2:'search'});
      },
      reset: function() {
        this.setState({listH:this.props.list});
        this.setState({key1:'resetSort'})
        this.setState({key2:'resetSearch'});
        this.setState({searchValue:''});
        this.setState({sortCheked:false});
      },
      
    render: function(){
      
       var list= [];
       if(this.state.sortCheked==false)
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
      React.DOM.input( {key:this.state.key1,type:'checkbox', className:'checkbox',defaultChecked:this.state.sortCheked, onClick:this.sortList}),
      React.DOM.input({key:this.state.key2, type:'text',className:'search', defaultValue:this.state.searchValue, onChange:this.searchStr}), 
        React.DOM.input({type:'button',value:"Сброс",className:'reset', onClick:this.reset }), 
        
         React.DOM.form(null,
          React.DOM.select({className:'select', size:5, },list )))
    },
  
  });