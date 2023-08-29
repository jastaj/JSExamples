// ----CHALLANGE 3 

// var D_Score1=parseInt(prompt("Enter Dolphins Score 1 :"));
// var D_Score2=parseInt(prompt("Enter Dolphins Score 2 :"));
// var D_Score3=parseInt(prompt("Enter Dolphins Score 3 :"));
// var D_Avg=(D_Score1+D_Score2+D_Score3)/3;
// var K_Score1=parseInt(prompt("Enter Koalas Score 1 :"));
// var K_Score2=parseInt(prompt("Enter Koalas Score 2 :"));
// var K_Score3=parseInt(prompt("Enter Koalas Score 3 :"));
// var K_Avg=(K_Score1+K_Score2+K_Score3)/3;
// if (D_Avg>K_Avg)
// console.log(`Dolphins has higher Average Scores ${D_Avg} than Koals`);
// else
// console.log(`Koals has higher Average Scores ${K_Avg} than Dolphins`);

// ----Approach 2----
var D_Score1=parseInt(prompt("Enter Dolphins Score 1 :"));
var D_Score2=parseInt(prompt("Enter Dolphins Score 2 :"));
var D_Score3=parseInt(prompt("Enter Dolphins Score 3 :"));

// ---Dolphins Scores fetching---
if((D_Score2>100)&&(D_Score2>100)&&(D_Score3>100))
{
console.log(`Dolphins score accepted ${D_Score1}, ${D_Score2}, ${D_Score3}`);
var D_Avg=(D_Score1+D_Score2+D_Score3)/3;
console.log('Average of Dolphins :'+D_Avg);
}
else
{
    console.log("Dolphins score is not accepted (less than 100)");
}

    // ---Kolas Scores fetching---
var K_Score1=parseInt(prompt("Enter Koalas Score 1 :"));
var K_Score2=parseInt(prompt("Enter Koalas Score 2 :"));
var K_Score3=parseInt(prompt("Enter Koalas Score 3 :"));
if((K_Score2>100)&&(K_Score2>100)&&(K_Score3>100))
{
console.log(`Kolas score accepted ${K_Score1}, ${K_Score2}, ${K_Score3}`);
var K_Avg=(K_Score1+K_Score2+K_Score3)/3;
console.log('Average of Kolas :'+K_Avg);
}
else
{
    console.log("Kolas score is not accepted (less than 100)");
}

    // ---Which team win---
if((D_Score1==K_Score1)||(D_Score2==K_Score2)||(D_Score3==K_Score3))
console.log("No team win !!  Match Draw");
else
{
if(D_Avg>K_Avg)
console.log(`Dolphins win with average score ${D_Avg}`);
else if(K_Avg>D_Avg)
console.log(`Koalas win with average score ${K_Avg}`);
else
console.log('No team wins!!!')
}


