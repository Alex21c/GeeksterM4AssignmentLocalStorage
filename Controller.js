'use strict';
class Controller{ 

  constructor(view, model){
    this.view = view;
    this.model = model;

    this.textAreaAutoSave = document.querySelector('textarea#textAreaAutoSave');
    this.debouncedInput = this.debounce(function(){
      this.view.showOrHideAnimaitonImageSavingData();
      this.model.saveData(this.textAreaAutoSave.value);
      setTimeout(()=>{
        this.view.showOrHideAnimaitonImageSavingData();
      },1000);
    }, 500)

    this.textAreaAutoSave.addEventListener('input', this.debouncedInput);
  }

  debounce(func, delay) {
    let timeoutId;
    
    return (...args) =>{
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  

}
