
'use strict';

let userName = prompt('What is your name?')
console.log(userName);
alert('Welcom' + ' ' + userName);
function q1 (){
    let aboutMe = prompt('Do you think i\'m interested in technology?');
console.log(aboutMe);

switch (aboutMe.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log( 'correct I\'m interested in technology');
        alert('correct I\'m interested in technology');
        break;
    case 'no':
    case 'n':
        //console.log('wrong guessing');
        alert('wrong guessing, yes I am');
        break;
    default:
        // console.log('answer with yes/no or y/n with lowercase')
        alert('answer with yes/no or y/n with lowercase');

}}
q1();


function q2(){
    let expert = prompt('Am I an expert in technical fields?');
console.log(expert);
switch (expert.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('incorrect I\'m not an expert' );
        alert('incorrect I\'m not an expert');
        break;
    case 'no':
    case 'n':
        //console.log('correct, Im a beginner programmer');
        alert('correct, Im a beginner programmer');
        break;
    default:
        //console.log('answer with yes/no or y/n with lowercase')
        alert('answer with yes/no or y/n with lowercase');

}}
q2();


function q3(){
    let country = prompt('Am I based in the united states?');
console.log(country);
switch (country.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('incorrect I;m based in Jordan' );
        alert('incorrect I\'m based in Jordan');
        break;
    case 'no':
    case 'n':
        //console.log('correct, Im outside of USA specifically in Jordan');
        alert('correct, Im outside of USA specifically in Jordan');
        break;
    default:
        // console.log('answer with yes/no or y/n with lowercase')
        alert('answer with yes/no or y/n with lowercase');
}}
q3();




function q4()
{
    let userInterest = prompt('Are you interested in programming?');
console.log(userInterest);
switch (userInterest.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log( 'This website will help you learn more');
        alert('This website will help you learn more');
        break;
    case 'no':
    case 'n':
        //console.log('You can surf this website whenever you want programming information');
        alert('You can surf this website whenever you want programming information');
        break;
    default:
        // console.log('answer with yes/no or y/n with lowercase')
        alert('answer with yes/no or y/n with lowercase');
}}
q4();


function q5()
{
    let courses = prompt('Are you looking for courses?');
console.log(courses);

switch (courses.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log( we provide general articles not courses');
        alert('we provide general articles not courses');
        break;
    case 'no':
    case 'n':
        //console.log('this web site talks about programming in general');
        alert('this web site talks about programming in general');
        break;
    default:
        // console.log('answer with yes/no or y/n with lowercase')
        alert('answer with yes/no or y/n with lowercase');
}}
q5();     



function q6()
{
    let htmlquestion = prompt('what version of HTML is used nowadays?' + 'answer with the version number');
console.log(htmlquestion);


let score = 0
let version = [1, 3, 4, 5];
for (let i = 0; i < version.length; i++) {
    if (i < 5) { let wrongAnswer = prompt('guess the version number') + alert(' too low '); console.log(wrongAnswer); } 
}}

    





//let version2 = [5, 6, 7, 8];



/*for (let i = 0; i > version2.length; i++) {
    if (i > 5) { let wrongAnswer2 = prompt('guess the version number'); + alert(' too high '); console.log(wrongAnswer2); }
}*/




    //else if (i > 5) { let wrongAnswer2 = prompt('guess the version number') + alert('too high'); }

    //else if (i=5)


//{alert(version[i]);
//console.log(version[i]);}














//if(htmlquestion=[4]){alert('correct');}




//}




/*for (i = 0; i < 4; i++) {
    if ( i= 0; i < version.length || i > version.length; i++) {
        alert('wrong');

    } else {
         { alert('correct'); break; }

    }
}
*/

//else  (let i=0;i=version.length;i){alert('correct'); break;
//let i = 0; i = version.length; i)







