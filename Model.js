'use strict';
class Model{
  constructor(){    

   
  }  

  saveData(data){    
    localStorage.setItem('formUserData', data);
    return true;
  }

  fetchData(){  
    let data = localStorage.getItem('formUserData');

    // default is
      return data ? data : '';
  }


}
