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
          list:this.props.list
        };
      },

      sortList: function(EO) {
          this.setState({sortChecked:EO.target.checked}, this.drawList());
      },

      searchStr: function(EO) {
        var str=EO.target.value;
        /*var newList=[];
        this.props.list.forEach(function(i) {
          if(i.indexOf(str)!=-1) {
            newList.push(i);
          }
          
        });
        this.setState({listH:newList})*/
        this.setState({searchValue:str});
        this.drawList();
      },

      reset: function() {
        this.setState({list:this.props.list});
        this.setState({searchValue:''});
        this.setState({sortChecked:false});
      },
      
      drawList: function() {
        var res=this.props.list
       // var l=[]
        if(this.state.searchValue) {
        res= res.filter(s=>s.indexOf(this.state.searchValue)!=-1)
        if(this.state.sortChecked){
          res=res.slice().sort()
         
        }/* this.props.list.forEach(function(i) {
            if(i.indexOf(str)!=-1) {
              newList.push(i);
            }
         if(this.state.sortChecked==true)
             {l= this.state.listH.slice().sort();
              this.setState({list:l})}
              else {
                l=this.state.listH;
                this.setState({list:l})
              }*/
              this.setState({list:res})
        }
       
      },

    render: function(){
      var l=[]
      
      this.state.list.forEach(function(i) {
        var item=React.DOM.option({key:i}, i)
          l.push(item)
          });
         
          
      return React.DOM.div( {className:'MyTable'}, 
      React.DOM.input( {type:'checkbox', className:'checkbox',checked:this.state.sortChecked, onClick:this.sortList}),
      React.DOM.input({ type:'text',className:'search', value:this.state.searchValue, onChange:this.searchStr}), 
        React.DOM.input({type:'button',value:"Сброс",className:'reset', onClick:this.reset }), 
        
         React.DOM.form(null,
          React.DOM.select({className:'select', size:5, },l )))
    },
  
  });