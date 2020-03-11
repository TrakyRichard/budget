const budgetInput = document.getElementById('budget');
const nomdepense = document.getElementById('nomDep');
const montantDepense = document.getElementById('montantDep');
const budgetOutput = document.getElementById('budgetCFA');
const balanceOutput = document.getElementById('balanceCFA');
const depenseOutpout = document.getElementById('depenceCFA');
const table = document.getElementById('myTable');
const edit = document.querySelector(".edit");
const trash = document.querySelector(".trash")
var rIndex;
function display(e){
    document.getElementById(e).style.display = 'block';
}

function remove(e){
    document.getElementById(e).style.display = 'none';
}

let depense = Number(montantDepense.value);
let budget;
let balance = Number(balanceOutput.value);
var buttons = "<i onclick='editHtmlTbleSelectedRow()' class='fa fa-pencil-square' aria-hidden='true'></i>&nbsp<i onclick='removeSelectedRow()' class='fa trash fa-trash' aria-hidden='true'></i>";
budgetOutput.innerHTML = '0 FCFA';
depenseOutpout.innerHTML = "0 FCFA";
balanceOutput.innerHTML = "0 FCFA"
function soumissionMontant(){
   if(Number(budgetInput.value)){
    budget = Number(budgetInput.value);
    budgetOutput.innerHTML = ''+ budget +' FCFA';
    balanceOutput.innerHTML = ''+ budget +' FCFA';
    budgetInput.value = "";
    console.log(budget);
    }
}
console.log(balance);


function checkEmptyInput()
{
    var isEmpty = false;

    if(Number(montantDepense.value) === ""){
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if(Number(nomdepense.value) === ""){
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}


function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);


    cell1.innerHTML = nomdepense.value;
    cell2.innerHTML = montantDepense.value;
    cell3.innerHTML = buttons;


    // call the function to set the event to the new row
    selectedRowToInput();
}


nomdepense.value = "";
montantDepense.value = ""
}
       
// display selected row data into input text
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {

        if(budget >= 0){
            var budgetSoustrait = 0;
            budgetSoustrait -= montantDepense.value;
            Math.abs(budgetSoustrait);
            var totDep = 0;
            var totBal = budget;
            totDep += Math.abs(budgetSoustrait);
            totBal -= Math.abs(budgetSoustrait);
            balanceOutput.innerHTML = totBal+" FCFA";
            depenseOutpout.innerHTML = totDep +" FCFA";
        
            console.log(Math.abs(budgetSoustrait));
            budget -= nomdepense.value;
        }
        table.rows[i].onclick = function()
        {
            // get the seected row index
            rIndex = this.rowIndex;
            nomdepense.value = this.cells[0].innerHTML;
            montantDepense.value = this.cells[1].innerHTML;
            buttons = this.cells[2].innerHTML;

        };

    }
}



function editHtmlTbleSelectedRow()
{

   if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = nomdepense.value;
    table.rows[rIndex].cells[1].innerHTML = montantDepense.value;
  }
}



function removeSelectedRow()
{

    if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = nomdepense.value;
        table.rows[rIndex].cells[1].innerHTML = montantDepense.value;
      }
    table.deleteRow(rIndex);
    // clear input text
    nomdepense.value = "";
    montantDepense.value = ""
    buttons = "";
}
