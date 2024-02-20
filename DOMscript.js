function UsersFunction()
{
    let usersXhr = new XMLHttpRequest();
    usersXhr.open('GET','https://jsonplaceholder.typicode.com/users');
    usersXhr.send();
    
    let todoXhr = new XMLHttpRequest();
    todoXhr.open('GET','https://jsonplaceholder.typicode.com/todos');
    todoXhr.send();

    
    usersXhr.onload = function()
    {
        let usersResponse = JSON.parse(usersXhr.response);
        todoXhr.onload = function()
        {
            let todoResponce= JSON.parse(todoXhr.response)
            usersResponse.forEach((user)=>
            {
                equal= todoResponce.filter(element => element.userId==user.id)  //I dont know how use "find" method here
                equal.forEach((todo)=>
                {
                    let row ='<tr>'
                    row+='<td>'+todo.id+'</td>'
                    row+='<td>'+user.name+'</td>'
                    row+='<td>'+todo.title+'</td>'
                    if(todo.completed == true)
                        row+='<td><input type="checkbox" checked></td>'
                    else if(todo.completed == false)
                        row+='<td><input type="checkbox"></td>'
                    else
                        row+='<td>error</td>'
                    row+='</tr>'
                    $('table tbody').append(row)
                })
            })
        }
    }
}
