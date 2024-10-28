$(function(){
    $('button').click(function(){
     //alert('ok'); 
     var name = $('#name-text').val();
     var roll = $('#roll').val();
     var cls = $('#class-text').val();
     var section = $('#section-text').val();
     
     var ban_mark = $('#ban-text').val();
     var eng_mark = $('#eng-text').val();
     var math_mark = $('#math-text').val();
     var bio_mark = $('#bio-text').val();
     var phy_mark = $('#phy-text').val();
          
           
     if (ban_mark>=80 && ban_mark<=100) {
            var gp_b = 5.00;
            var grade = 'A+';
        } 
        else if (ban_mark>=70 && ban_mark<=79) {
            var gp_b = 4.00;
            var grade = 'A';
        } 
        else if (ban_mark>=60 && ban_mark<=69) {
            var gp_b = 3.50;
            var grade = 'A-';
        } 
        else if (ban_mark>=50 && ban_mark<=59) {
            var gp_b = 3.00;
            var grade = 'B';
        } 
        else if (ban_mark>=40 && ban_mark<=49) {
            var gp_b = 2.00;
            var grade = 'C';
        } 
        else if (ban_mark>=33 && ban_mark<=39) {
            var gp_b = 1.00;
            var grade = 'D';
        } 
        else {
            var gp_b = 0.00; 
            var grade = 'F';
        }
           
           
           if (eng_mark>=80 && eng_mark<=100) {
            var gp_e = 5.00;
            var grade = 'A+';
        } 
        else if (eng_mark>=70 && eng_mark<=79) {
            var gp_e = 4.00;
            var grade = 'A';
        } 
        else if (eng_mark>=60 && eng_mark<=69) {
            var gp_e = 3.50;
            var grade = 'A-';
        } 
        else if (eng_mark>=50 && eng_mark<=59) {
            var gp_e= 3.00;
            var grade = 'B';
        } 
     else if (eng_mark>=40 && eng_mark<=49) {
            var gp_e = 2.00;
            var grade = 'C';
        } 
        else if (eng_mark>=33 && eng_mark<=39) {
            var gp_e = 1.00;
            var grade = 'D';
        } 
        else {
            var gp_e = 0.00; 
            var grade = 'F';
        }
           
           
           if (math_mark>=80 && math_mark<=100) {
            var gp_m = 5.00;
            var grade = 'A+';
        } 
        else if (math_mark>=70 && math_mark<=79) {
            var gp_m = 4.00;
            var grade = 'A';
        } 
        else if (math_mark>=60 && math_mark<=69) {
            var gp_m = 3.50;
            var grade = 'A-';
        } 
        else if (math_mark>=50 && math_mark<=59) {
            var gp_m = 3.00;
            var grade = 'B';
        } 
        else if (math_mark>=40 && math_mark<=49) {
            var gp_m = 2.00;
            var grade = 'C';
        } 
        else if (math_mark>=33 && math_mark<=39) {
            var gp_m = 1.00;
            var grade = 'D';
        } 
        else {
            var gp_m = 0.00; 
            var grade = 'F';
        }
           
           
           if (bio_mark>=80 && bio_mark<=100) {
            var gp_i = 5.00;
            var grade = 'A+';
        } 
        else if (bio_mark>=70 && bio_mark<=79) {
            var gp_i = 4.00;
            var grade = 'A';
        } 
        else if (bio_mark>=60 && bio_mark<=69) {
            var gp_i = 3.50;
            var grade = 'A-';
        } 
        else if (bio_mark>=50 && bio_mark<=59) {
            var gp_i = 3.00;
            var grade = 'B';
        } 
        else if (bio_mark>=40 && bio_mark<=49) {
            var gp_i = 2.00;
            var grade = 'C';
        } 
        else if (bio_mark>=33 && bio_mark<=39) {
            var gp_i = 1.00;
            var grade = 'D';
        } 
        else {
            var gp_i = 0.00; 
            var grade = 'F';
        }
           
           
           if (phy_mark>=80 && phy_mark<=100) {
            var gp_p = 5.00;
            var grade = 'A+';
        } 
        else if (phy_mark>=70 && phy_mark<=79) {
            var gp_p = 4.00;
            var grade = 'A';
        } 
        else if (phy_mark>=60 && phy_mark<=69) {
            var gp_p = 3.50;
            var grade = 'A-';
        } 
        else if (phy_mark>=50 && phy_mark<=59) {
            var gp_p = 3.00;
            var grade = 'B';
        } 
        else if (phy_mark>=40 && phy_mark<=49) {
            var gp_p = 2.00;
            var grade = 'C';
        } 
        else if (phy_mark>=33 && phy_mark<=39) {
            var gp_p = 1.00;
            var grade = 'D';
        } 
        else {
            var gp_p = 0.00; 
            var grade = 'F';
        }
           
                  
           
     
        //console.log(name,roll);
     $('#dis-name').text(name);
     $('#dis-roll').text(roll);
     $('#dis-class').text(cls);
     $('#dis-sec').text(section);
     
     $('#dis-ban').text(ban_mark);
     $('#dis-eng').text(eng_mark);
     $('#dis-math').text(math_mark);
     $('#dis-bio').text(bio_mark);
     $('#dis-phy').text(phy_mark);
             
     
     $('#dis-ban-gp').text(gp_b);
     $('#dis-ban-grade').text(grade);
           
      
     $('#dis-eng-gp').text(gp_e);
     $('#dis-eng-grade').text(grade);

 
     $('#dis-math-gp').text(gp_m);
     $('#dis-math-grade').text(grade);

            
     $('#dis-bio-gp').text(gp_i);
     $('#dis-bio-grade').text(grade);

            
     $('#dis-phy-gp').text(gp_p);
     $('#dis-phy-grade').text(grade);
           
           
           var gpa =(gp_b+gp_e+gp_m+gp_i+gp_p)/5;
           $('.gpa').text(gpa);
    });
});