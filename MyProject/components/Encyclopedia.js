import React from 'react';
import Page from './Page'

class Encyclopedia extends React.PureComponent {


   
   componentDidMount() {
  
 }
  render() {
      
    return (
      <div className="Component">
      
      <div className='List'>
        
 {<Page point={'A'}/>}
{ <Page point={'Б'}/>}
 {<Page point={'В'}/>} 

      </div>
 
    <p>{'Любой пользователь может редактировать статьи энциклопедии. Все правки сохраняются.'}</p>
    <p>{`Пользователи могут размещать статьи в энциклопедию растений.
     Перед созданием статьи убедитесь, что нет аналогичной.`}<br /></p>
    <p>{'Для этого воспользуйтесь поиском или посмотрите нет ли данного растения в списке.'}</p>


</div>
    
    )
    ;

  }

}

export default Encyclopedia;