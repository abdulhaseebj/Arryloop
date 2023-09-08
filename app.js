
const div = document.querySelector('div');
const p = document.querySelector('p');

Array = ['Karachi', 'Islamabad', 'Quetta', 'Mansehra' ,'Lahore','Swat','Peshawar','Gujranwala','Sialkot','Faisalabad'];

for (let i = 0; i < Array.length; i++) {
    div.innerHTML += `<button class="button" onclick="print(${i})">${Array[i]}</button>`
}





function print(i) {
    // console.log(Array[i]);
    p.innerHTML += Array[i] + ' , '
    

 }