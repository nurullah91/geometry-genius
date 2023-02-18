
// table raw push




let count = 0 ;
document.getElementById('triangle-calculate').addEventListener('click', function(){
    count += 1 ;
    const baseValue = document.getElementById('triangle-b');
    const heightValue = document.getElementById('triangle-h');
    const geometryName = document.getElementById('triangle');


    const name = geometryName.innerHTML ;
    const baseValueString = baseValue.value ;
    const heightValueString = heightValue.value ;

    const base = parseFloat(baseValueString);
    const height = parseFloat(heightValueString);

    const area = 0.5 * base * height ;



    const tableContainer = document.getElementById('table-container');
const tr = document.createElement('tr');
tr.innerHTML = `
    <td>${count}.</td>
    <td>${name}</td>
    <td class="pl-3">${area}cm<sup>2</sup></td>
    <td><button class="p-2 bg-blue-500 rounded text-white ml-2">Convert to m<sup>2</sup></button></td>
    
    
   
`;
tableContainer.appendChild(tr);
   
})


