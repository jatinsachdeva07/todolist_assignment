let tasklist = [
   {
      name: 'Complete Xavier’s Assignment',
      status: 'completed'
   },
   {
      name: 'Purchase Groceries on Weekend',
      status: 'incomplete'
   },
   {
      name: 'Cheque Deposit at Bank',
      status: 'completed'
   },
   {
      name: 'Potluck Dinner Party on Saturday',
      status: 'completed'
   },
   {
      name: 'Car Service',
      status: 'incomplete'
   },
]

mainbody = document.getElementById("tasklist");
AllCountLink = document.getElementById("all");
CompletedCountLink = document.getElementById("completed");
IncompleteCountLink = document.getElementById("incomplete");

document.addEventListener('DOMContentLoaded', function() {
   printToScreen();
})

function printToScreen(){
   mainbody.innerHTML = '';
   tasklist.forEach(function(element) {
      addTasksToView(element.name, element.status);
      updateListCounts();
   })
}

function addTasksToView(name, status) {
   var div = document.createElement("div");
   div.classList.add('items', status);

   var input = document.createElement("input");
   input.setAttribute('type', 'checkbox');
   if(status==="completed"){
      input.setAttribute('checked', 'checked');
   }

   var span = document.createElement("span");
   span.append(name);

   div.append(input);
   div.append(span);
   mainbody.append(div);
}

function updateListCounts() {
   // totalCount = tasklist.length;
   completeCount = 0;
   incompleteCount = 0;
   tasklist.forEach(function(element) {
      element.status === 'completed' ? completeCount ++ : incompleteCount ++;
   })

   // AllCountLink.innerHTML = '(' + totalCount + ')';
   CompletedCountLink.innerHTML = '(' + completeCount + ')';
   IncompleteCountLink.innerHTML = '(' + incompleteCount + ')';

}
