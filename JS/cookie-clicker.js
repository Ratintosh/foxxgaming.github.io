    
         Points=99999999999
         Pointsperclick=1
         
         function myFunction() {
             Points=Points+Pointsperclick
           document.getElementById("money").innerHTML = +Points
         
         
         
         
         }
         
         function purchase() {
            if (Points>99) {
               Points=Points-100
               document.getElementById('money').innerHTML = Points

               document.getElementById('cookie').src='../Images/sadcookie.png'
               Pointsperclick=2
            } 


         }
         
         
         