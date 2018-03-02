
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

//Call Hide Function to Hide All Elements in Student List

  
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

showPage(1,students)


function appendPageLinks(studentList) {
    // determine how many pages for this student list 
    const totalPages = Math.ceil(studentList.length/10);
    console.log(totalPages)
   
    // create a page link section

    let div = document.createElement('div')
    div.classList.add('pagination')
    console.log(div);
    let ul = document.createElement('ul');
    console.log(ul);
    div.appendChild(ul);
    console.log(div);
    let li = document.createElement('li');

    // “for” every page
        // add a page link to the page link section

/////////////////////// This is where I am getting stuck, I am not sure why it is not adding the looped li's into the ul



    for (i=0; i<totalPages; i++){
      li[i]  += "<a href='#'>" +i+ "</a>";
      console.log(li);
      ul.appendChild(li);

      //not sure why I can't add to ul after loop, not quite understanding this section 

    }

    /////////////////  Also it is not amending the created elements to the dom

    // remove the old page link section from the site
    // append our new page link section to the site
    
    console.log(li);
    let main = document.querySelectorAll('.page');
    console.log(main)
    main.appendChild(div);
    console.log(main);

    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”

    let a = document.getElementsByTagName('a');

    for (i=0; i<a.length; a++){

    a.addEventListener('click', function(){
      showPage(this.innerHTML, students);
      $(this).addClass('active');
      for (i=0; i<a.length; i++){
        if(!this){
          a[i].addClass('');
        }
      }

    });
  }




    
    
    
}

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

appendPageLinks(students)