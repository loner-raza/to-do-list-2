const activePage = document.getElementById('active__page')
const endPage = document.getElementById('endPage')
const deletePage = document.getElementById('deletePage')

const createPost = () => {
    let body = document.getElementById('body')
    let title = document.getElementById('title')

    if(body.value  !== "" && title.value !== ""){
        const activePage = document.getElementById('active__page')

        const contentPage = document.createElement('div')
        contentPage.className = "content__page"
    
        const inner__content__page = document.createElement('div')
        inner__content__page.className = "inner__content__page"

        const p_body = document.createElement('p')
        p_body.className = "body"

        const p_title = document.createElement('p')
        p_title.className = "title"

        const buttons = document.createElement('div')
        buttons.className = "buttons"

        const end = document.createElement('button')
        end.className = "end"
        end.innerHTML = "Ended"

        const deleted = document.createElement('button')
        deleted.className = "delete"
        deleted.innerHTML = "Delete"

        contentPage.append(inner__content__page)
        contentPage.append(buttons)

        inner__content__page.append(p_body)
        p_body.innerHTML = body.value
    
        inner__content__page.append(p_title)
        p_title.innerHTML = title.value

        buttons.append(deleted)
        buttons.append(end)

        activePage.append(contentPage)

        deleted.addEventListener('click', (e) => {
            e.preventDefault()
            const thisPost = deleted.parentNode.parentNode
            deleted.remove(this)
            deletePage.append(thisPost)
        })

        end.addEventListener('click', (e) => {
            e.preventDefault()
            const thisPost = end.parentNode.parentNode
            end.parentNode.remove(deleted)
            end.remove(this)
            endPage.append(thisPost)
        })

        body.value = ""
        title.value = ""
    }
}

addPostBtn.addEventListener('click',(e) => {
    e.preventDefault()
    createPost()
})

const select = document.getElementById('sel')

function SS(){
    switch(select.value){
        case '1':
            activePage.style.display = 'block'
            endPage.style.display = 'none'
            deletePage.style.display = 'none'
            break
        case '2':
            activePage.style.display = 'none'
            endPage.style.display = 'block'
            deletePage.style.display = 'none'
            break
        case '3':
            activePage.style.display = 'none'
            endPage.style.display = 'none'
            deletePage.style.display = 'block'
            break
    }
}

