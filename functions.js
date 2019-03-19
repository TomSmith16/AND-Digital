    //Candidate table
	const newCandidates = [
      { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
      { name: "Mario", skills: ["Python", "AWS"] },
      { name: "Jacquline", skills: ["JavaScript", "Azure"] },
      { name: "Kathy", skills: ["JavaScript", "Java"] },
      { name: "Anna", skills: ["JavaScript", "AWS"] },
      { name: "Matt", skills: ["PHP", "AWS"] },
      { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
    ];
	
	var skilltitle = "";

	//Remove rows
    function removeRowsFromTable(table) {
      const rows = table.getElementsByTagName("tr");

      while (rows.length > 1) {
        table.deleteRow(1);
      }
    }

	//Add new candidate
    function insertCandidate(tbody, name, skills) {
      const newRow = tbody.insertRow();
      const nameCell = newRow.insertCell();
      const skillCell = newRow.insertCell();

      const candidateName = document.createTextNode(name);
      const candidateSkills = document.createTextNode(skills.join(', '));

      nameCell.appendChild(candidateName);
      skillCell.appendChild(candidateSkills);
    }

    function addCandidatesToTable(table, candidates) {
      candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
    }

	
	
	
	//Filter by skill, future work could implement searching for multiple skills.
    function filterCandidateBySkill(candidates, skill) {
		
		const filtertemp = [];
		//Cycle through candidates and skills.
		for(var i=0; i<candidates.length; i++)
		{
			
			for(var j = 0; j<candidates[i].skills.length; j++)
			{
				//If skill contains the filtered skill, add to temp array. toUpperCase allows for case insensitive search
				if(candidates[i].skills[j].toUpperCase() === skill.toUpperCase())
				{
					filtertemp.push(candidates[i]);
					skilltitle = candidates[i].skills[j];
				}
			}
		}
		
		//Return the filtered list of candidates.
		console.log(filtertemp);
		candidates = filtertemp;
		
      return candidates;
    }
	
	//Get table
	const candidatesTable = document.getElementById("candidates_example");
		
	//Clone table
	const newCandidatesTable = candidatesTable.cloneNode(true);
	
	
	//Button to filter using the term in the text field.
	function filterbutton(){
		
		//Empty table
		removeRowsFromTable(newCandidatesTable);
		const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];
			
		skill = document.getElementById("skill").value;
		console.log(skill);	
		
		const filteredCandidates = filterCandidateBySkill(newCandidates, skill)
		addCandidatesToTable(newTbody, filteredCandidates)
			
		//Change filtered title.
		document.getElementById("filtertitle").innerHTML = skilltitle + " Candidates";

		//If no results
		if(filteredCandidates.length < 1)
			document.getElementById("filtertitle").innerHTML = "No results found. <br> Please try again.";
		
		//add new table.
		document.body.appendChild(newCandidatesTable);
	}

	
	
	/*
	function addFunction(){
		var tempname = document.getElementById("newname")
		var tempskills = document.getElementById("newskills");
		var temp = tempname + tempskills;
		
		newCandidates.push(temp)
		console.log(newCandidates);
	}
	*/
	