const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const bookList = document.getElementById('book-list')
const btn = document.querySelector('.btn')


btn.addEventListener('click',function(e){
    e.preventDefault()

    if(title.value == "" && author.value == "" && year.value =="")
    {
        alart("Please fill the form");
    } else {
         const newRow = document.createElement('section')


         const newTitle = document.createElement('div');
         newTitle.innerHTML = title.value;
         newRow.appendChild(newTitle);



         const newAuthor = document.createElement('div');
         newAuthor.innerHTML = author.value;
         newRow.append(newAuthor);


         const newYear = document.createElement('div');
         newYear.innerHTML = year.value;
         newRow.appendChild(newYear);

         bookList.appendChild(newRow);



    }
})