
/*showPage: This smaller function displays a "page" or a list of ten students based which "page number" the user selected.

function showPage(/* arguments here for page number and student list */
    
    // Then loop through all students in our student list argument
       // if student should be on this page number
        // show the student

//Set the Variables 
const students = document.querySelectorAll('.student-item');
console.log(students);
const perPage = 10;
console.log(perPage);

//Hide All of the students with function
 function hide(){
  for (i=0; i<students.length; i++){
  students[i].style.display='none';
 // students[i].slice(0,10).style.display='block';
  }
}; 
// ShowPage taking two parameters pageNumber , Student List , depending on page number selected a different set of students would be shown to correspond to the page
function showPage (pageNumber, studentList){
  //HIde All Students
  hide();
  // Then loop through all students in our student list argument
  for (i=0; i<studentList.length; i++){
       // if student should be on this page number
       if( i>=(pageNumber*perPage)-perPage && i< pageNumber*perPage){
        studentList[i].style.display='block';
       }
       else {
        studentList[i].style.display='none';
       }
  }
}
//Call Show Page Function with 1 as default page number and students as parameter
showPage(1,students)

//Second function with student list as paramenter to show students that correspond once a button is clicked
function appendPageLinks(studentList) {
    // determine how many pages for this student list 
    const totalPages = Math.ceil(studentList.length/perPage);
    console.log(totalPages)
   
    // create a page link section
    //I have created a couple of elements including a div, ul to match the required list
    let navSection = document.createElement('div')
    navSection.classList.add('pagination')
    console.log(navSection);
    let navList = document.createElement('ul');
    console.log(navList);
    console.log(navSection);

    // “for” every page
        // add a page link to the page link section

    for (i=1; i<totalPages+1; i++){
      navList.innerHTML  += "<li ><a href='#' class='links'>" +i+ "</a></li>";
    }
    // remove the old page link section from the site
    // append our new page link section to the site
    navSection.appendChild(navList);
    console.log(navList);
    //I have added the new created elements to the dom and attached to each other in the correct order
    let main = $('.page');
    console.log(main)
       main.append(navSection);
    console.log(main);

    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”

    let navLinks = document.getElementsByClassName('links');
    console.log(navList);
    console.log(navLinks)

    //Show the the first link with class active 
    navLinks[0].classList.add('active');

    for (i=0; i<totalPages; i++){
      console.log(totalPages)

    navLinks[i].addEventListener('click', function(e){
      console.log(e.target.innerHTML);
      e.preventDefault();
      showPage(e.target.innerHTML, studentList);
       $(e.target).addClass('active');
       //$(!e.target).className='';
       
     
    for (i=0; i<totalPages; i++){
      console.log('success')
      console.log(navList);  
      if(e.target.innerHTML !== navLinks[i].innerHTML  ){
            console.log(e.target.innerHTML);
            console.log(navLinks[i])
            navLinks[i].className="";
           // e.target.className='active';
        }
       } 
    });
  };
};


appendPageLinks(students);
/*

  <div class="pagination">
        <ul>
          <li>
            <a class="active" href="#">1</a>
          </li>
           <li>
            <a href="#">2</a>
          </li>
           <li>
            <a href="#">3</a>
          </li>
           <li>
            <a href="#">4</a>
          </li>
           <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>

  */

