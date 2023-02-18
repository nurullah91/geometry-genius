
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
    inputText.value = '';

    return number ;
}



// get text from a tag 
function getTextFromTag(tagId){
    const tagText = document.getElementById(tagId);
    const text = tagText.innerHTML;

    return text;
}



// Triangle area calculation 
document.getElementById('triangle-calculate').addEventListener('click', function () {
  
    const base = getNumberValueFromInput('triangle-b');
    const height = getNumberValueFromInput('triangle-h');
    const name = getTextFromTag('triangle');
    

    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number')
    }

    else if(base < 0 || height < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = 0.5* base * height ;
        const area = primaryArea.toFixed(2);
   
    
    
    tableRaw(name, area);
    }

})




// rectangle area calculation 
document.getElementById('rectangle-calculate').addEventListener('click', function () {
  
    const width = getNumberValueFromInput('rectangle-w');
    const length = getNumberValueFromInput('rectangle-l');
    const name = getTextFromTag('rectangle');
    

    if(isNaN(width) || isNaN(length)){
        alert('Please enter a number')
    }

    else if(width < 0 || length < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = width * length ;
        const area = primaryArea.toFixed(2);
    
    tableRaw(name, area);
    }

})





// parallelogram area calculation ;
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
  
    const base = getNumberValueFromInput('parallelogram-b');
    const height = getNumberValueFromInput('parallelogram-h');
    const name = getTextFromTag('parallelogram');
    

    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number')
    }

    else if(base < 0 || height < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = base * height ;
        const area = primaryArea.toFixed(2);
    
    tableRaw(name, area);
    }

})




// Rhombus area calculation ;
document.getElementById('Rhombus-calculate').addEventListener('click', function () {
  
    const d1 = getNumberValueFromInput('Rhombus-d1');
    const d2 = getNumberValueFromInput('Rhombus-d2');
    const name = getTextFromTag('Rhombus');
    

    if(isNaN(d1) || isNaN(d2)){
        alert('Please enter a number')
    }

    else if(d1 < 0 || d2 < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = 0.5 * d1 * d2 ;
        const area = primaryArea.toFixed(2);
    
    tableRaw(name, area);
    }

})







// Pentagon calculation
document.getElementById('Pentagon-calculate').addEventListener('click', function () {
  
    const perimeter = getNumberValueFromInput('Pentagon-p');
    const base = getNumberValueFromInput('Pentagon-b');
    const name = getTextFromTag('Pentagon');
    

    if(isNaN(perimeter) || isNaN(base)){
        alert('Please enter a number')
    }

    else if(perimeter < 0 || base < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = 0.5 * perimeter * base ;
        const area = primaryArea.toFixed(2);
    
    tableRaw(name, area);
    }

})





// Ellipse calculation 
document.getElementById('Ellipse-calculate').addEventListener('click', function () {
  
    const base = getNumberValueFromInput('Ellipse-b');
    const height = getNumberValueFromInput('Ellipse-h');
    const name = getTextFromTag('Ellipse');
    

    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number')
    }

    else if(base < 0 || height < 0){
        alert('Please Enter positive base and height')
    }

    else{
        count += 1;
        const primaryArea = 3.14 * base * height ;
        const area = primaryArea.toFixed(2);
    
    tableRaw(name, area);
    }

})





// card background Color 

// triangle background
document.getElementById('triangle-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('triangle-body').style.backgroundColor = color;
  })


  // rectangle background
document.getElementById('rectangle-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('rectangle-body').style.backgroundColor = color;
  })


  // parallelogram background
document.getElementById('parallelogram-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('parallelogram-body').style.backgroundColor = color;
  })


  // rhombus background
document.getElementById('rhombus-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('rhombus-body').style.backgroundColor = color;
  })


  // pentagon background
document.getElementById('pentagon-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('pentagon-body').style.backgroundColor = color;
  })



 // ellipse background
document.getElementById('ellipse-body').addEventListener('mouseover', function(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const color = "#" + randomColor;
    document.getElementById('ellipse-body').style.backgroundColor = color;
  })