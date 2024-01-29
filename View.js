'use strict';
class View{

  constructor(model){
    this.styleFortextArea={
      nightMode: "from-slate-700 to-slate-600 text-zinc-50",
      dayMode: "from-white-200 to-white-100 text-black-900"
    };

    this.model = model;     
    this.wrapperMoonAndSun = document.querySelector('#wrapperMoonAndSun');
    this.circleMask = document.querySelector('.circleMask');
    this.body = document.querySelector('body');
    this.textAreaAutoSave = document.querySelector('textarea#textAreaAutoSave');
    this.imgAnimationSavingData = document.querySelector('img#imgAnimationSavingData');
    this.textAreaAutoSave.value = this.model.fetchData();
    // console.log(this.autoSaveTextArea.className)
      

    
    this.wrapperMoonAndSun.addEventListener('click', (event)=>{
      // console.log(this.body)
      if(this.body.classList.contains('nightMode')){      
        // switch to day mode          
          this.circleMask.classList.remove('circleCoverMoon');
          this.circleMask.classList.add('circleCoverSun');
        // update text area
        this.textAreaAutoSave.className = this.textAreaAutoSave.className.replace( this.styleFortextArea.nightMode, this.styleFortextArea.dayMode);
        
      }else{          
        this.circleMask.classList.add('circleCoverMoon');        
        this.textAreaAutoSave.className =  this.textAreaAutoSave.className.replace( this.styleFortextArea.dayMode, this.styleFortextArea.nightMode);
      }    
      // update 
      this.body.classList.toggle('nightMode');                
      
    }
    );
  }

  showOrHideAnimaitonImageSavingData(){
    this.imgAnimationSavingData.classList.toggle('displayNone');
  }
  

    
  
  
}  

