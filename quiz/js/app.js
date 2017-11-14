$(document).ready(function(){
	let questions = [{question:"What is our dogs name", choices:["Teemo","Fido","Software","Pillow"],correctAnswer:0},
	 {question:"Choose cat 3", choices:["cat1","cat2","cat3","cat4"],correctAnswer:2}];
	 let score = 0;
	 let index = 0;	//question index
	 for(let i=1; i<=4; i++){											//replace starting values with first set of questions
		$('#answer'+i+'t').text(questions[index].choices[i-1]);
		console.log("iteration"+i+questions[index].choices[i-1])
		}

	$('#question').text(questions[0].question);
	if(index == questions.length-1){	//FIGURE OUT WHERE TO PUT THIS TO END QUIZ
		alert("end of quiz, your score is:"+score);
	}
	
	$('#next').click(function(){										//wait for click
		index++;
		console.log(index);
		console.log(questions[index].question);
		if($('#radio'+questions[index].correctAnswer).is(':checked')){	//if answer is correct iterate score
			alert('correct');
			score++;
			console.log(score);
		};
		$('#question').text(questions[index].question);
		for(let i=1; i<=4; i++){										//replace questions with next set
			$('#answer'+i+'t').text(questions[index].choices[i-1]);
			console.log("iteration"+i+questions[index].choices[i-1])
		}
		//when at the end of questions, print score
		// if(index == questions.length-1){
		// 	alert("end of quiz, your score is:"+score);
		// }
		//if correct answer is selected iterate score
		//then change all text to next question
	});
});