

//function showPage(/* arguments here for page number and student list */) {
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student

// = 

// }


/*  Step 1 Hide All Students */

const students = $('.student-item') 



/*  Step 2 Show the first 10 students */

//Variables for showPage

const perPage = 10;
const totalStudents = students.length;
console.log(totalStudents);
const pageCount = Math.ceil(totalStudents / perPage);
console.log(pageCount);


//const begin = (perPage * pageNumber)-10;
//const end = start + perPage;


	$(students).hide();
	students.slice(0,perPage).show();

/*  I have started the Show Page function but am lost after running the each loop */
/*

function showPage(pageNumber studentList) {



	const start = (perPage * pageNumber)-10;
	const end = start + perPage;
	console.log('bob');
    
    studentList.each(function(index)){
    	if(studentList> start && studentList<end)

    		students.slice(start,end).show();
    	


    }

   }
   */
   
