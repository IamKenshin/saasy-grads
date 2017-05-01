	var date = new Date();
	var studentId = "";

    var currentSemester = function() {
        var month = this.date.getMonth;
        var semester;
        if (month <= 5 && month >= 0) {
            semester = "Spring";
        } else if (month < 8 && month >= 5) {
            semester = "Summer";
        } else {
            semester = "Fall";
        }
        return semester;
    }

    var setup = function() {
    	console.log("inside of controller.setup");
        var yearSelect = document.getElementById("years");

        var option1 = document.createElement("option");
        option1.text = "" + date.getFullYear();
        var option2 = document.createElement("option");
        option2.text = "" + (date.getFullYear() + 1);

        yearSelect.add(option1);
        yearSelect.add(option2);
    }
    

    var addNewClassField = function() {
        var newClass = document.createElement("input");
        newClass.setAttribute("type", "text");
        var node = document.createTextNode("");
        newClass.appendChild(node);
        var button = document.getElementById("addClassButton");

        var classesDiv = document.getElementById("classes");
        classesDiv.insertBefore(newClass, button);
        classesDiv.insertBefore(document.createElement("br"), newClass);
        classesDiv.insertBefore(document.createElement("br"), button);
    }
    
    var login = function() {
    	this.studentId = document.getElementById("id");
    }
    
    
    /*
    	call on the data to determine whether or not the student can graduate and
    	set the message on the successPage accordingly
    */
    var submitForm = function() {
    	if (true/*this.model.studentCanGraduate(this.studentId)*/) {
    		// open a page that says SUCCESS!!!
    		document.write("<h1>Success, you have successfully applied for graduation!</h1>");
    	} else {
    		// open a page that says YOU SUCK!!!!
    		document.write("<h1>Sorry, you do not meet the requirements for graduation</h1>");
    	}
    	
    	
    	
    }