

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


function getNumberValueFromInput(geometryBase, geometryHeight, geometryName){
    const baseValue = document.getElementById(geometryBase);
    const heightValue = document.getElementById(geometryHeight);
    const geometryNameString = document.getElementById(geometryName);


    const name = geometryName.innerHTML;
    const baseValueString = baseValue.value;
    const heightValueString = heightValue.value;

    const base = parseFloat(baseValueString);
    const height = parseFloat(heightValueString);

    return {base,height,name};
}






document.getElementById('triangle-calculate').addEventListener('click', function () {
    count += 1;
  
    getNumberValueFromInput('triangle-b', 'triangle-h', 'triangle');

    // const area = 0.5 *base * height;
   


tableRaw(name, area);

})


