

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    
    
    
    const answer = question.nextElementSibling;
    
    //  answer.style.display = answer.style.display === 'none' ? 'block' : 'none'; 
    // one line code
    
       if(answer.style.display == 'block')
          answer.style.display = 'none';
       else
          answer.style.display = 'block';
    

         // =========to make opeded question black===========

          const qt = document.querySelectorAll('.question_title');

          qt.forEach(qt => {
          
            qt.addEventListener('click', () => {
        
            qt.style.color = "black";
            
          });
        }); 

        // =========for rotation of arrow upward===========
        
      const rotated =  document.querySelectorAll(".arrow");

    rotated.forEach(rotated => {
    rotated.addEventListener('click',() => {
    rotated.style.transform = "rotate(180deg)";
      });
    });
    
     
  });


});

