
// redirect from home page to blogs page 
document.getElementById('blogs').addEventListener('click', function(){
    window.location.href = 'blogs.html'
})




let count = 0;

// table raw push
function tableRaw(name,area){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}.</td>
    <td>${name}</td>
    <td class="pl-3">${area}cm<sup>2</sup></td>
    <td><button class="p-2 bg-blue-500 rounded text-white ml-2">Convert to m<sup>2</sup></button></td>
    
    
   
`;
    tableContainer.appendChild(tr);

}

// get value form input id 
function getNumberValueFromInput(inputId){
    const inputText = document.getElementById(inputId);
    const numberValueString = inputText.value;
    const number = parseFloat(numberValueString);

    return number ;
}



// get text from a tag 
function getTextFromTag(tagId){
    const tagText = document.getElementById(tagId);
    const text = tagText.innerHTML;

    return text;
}




document.getElementById('triangle-calculate').addEventListener('click', function () {
  
    const base = getNumberValueFromInput('triangle-b');
    const height = getNumberValueFromInput('triangle-h');
    

    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number')
    }

    else if(base < 0 || height < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const area = 0.5* base * height ;
   
        const name = getTextFromTag('triangle')
    
    
    tableRaw(name, area);
    }

})


