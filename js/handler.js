document.getElementById('btn-update-title').addEventListener('click', function(){
    // console.log('button clicked')
    const pageTitleElement = document.getElementById('page-title');
    // console.log(pageTitleElement)
    pageTitleElement.innerText = 'Updated page title text.'
})

document.getElementById('btn-login').addEventListener('click', function(){
    // console.log('login')
    const userInfoEl = document.getElementById('user-info');
    userInfoEl.innerText = 'User Login successfully'
})


document.getElementById('btn_update').addEventListener('click', function(){
    // console.log('update')
    const nameInput = document.getElementById('input-name');
    // console.log(nameInput)
    const name = nameInput.value;
    // console.log('name', name)

    const nameP = document.getElementById('name');
    nameP.innerText = name
})