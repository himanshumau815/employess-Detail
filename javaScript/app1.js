let allEmpData = newArray();
let allempbutton = document.querySelector('#allemp'); 

				
	
let displayemploye = (employes) =>{
	let totalLength = employes.length;
	document.querySelector('#total').innerText = totalLength;
	let tabelBodyTag = document.querySelector('#tabelbody');
	let tbody = '';
	for(let emp of employes){
		 tbody += `<tr>
							<td>${emp.id}</td>
							<td>${emp.first_name}</td>
							<td>${emp.last_name}</td>
							<td>${emp.email}</td>
							<td>${emp.gender}</td>
							<td>${emp.country}</td>
					</tr>`	
	}
	tabelBodyTag.innerHTML = tbody;
}
// all employe

allempbutton.addEventListener('click',function(){
	displayemploye(allEmpData);

})
let maleempbutton = document.querySelector('#maleemp'); 
// male employe
maleempbutton.addEventListener('click',function(){
let male=allEmpData.filter((employe) =>{
		return employe.gender === 'Male'
	})
	displayemploye(male);
	// console.log(male)
})

// Female employe
let femaleempbutton = document.querySelector('#femaleemp'); 
femaleempbutton.addEventListener('click',function(){
let female=allEmpData.filter((employe) =>{
		return employe.gender === 'Female'
	})
	displayemploye(female);
	// console.log(male)
})

// search button

let searchBtn = document.querySelector('#search'); 
searchBtn.addEventListener('keyup',function(){
let EnteredValue = searchBtn.value;
if(EnteredValue !== ''){

let search=allEmpData.filter((employe) =>{
		return employe.first_name.toLowerCase().trim().startsWith(EnteredValue.toLowerCase())
	})
	displayemploye(search);

}
else if(EnteredValue.length===0){
	displayemploye([])
}
else{
	displayemploye([])
}
})