function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => showAll(data))
}

function showAll(dataAll){
    console.log(dataAll);

    const divContainer=document.getElementById('post')

    for(const post of dataAll){
        const div=document.createElement('div')
        div.classList.add('post') //to link and add css.
        div.innerHTML=`
        
        <h3>${post?.id}</h3>
        <h4>${post?.title}</h4>
        <p>${post?.body}</p>
        
        `
        divContainer.appendChild(div)
    }

}