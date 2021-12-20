var blogs = [];
function addBlog(event){
    event.preventDefault()
    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files
    image = URL.createObjectURL(image[0])

    let blog = {
      title: title,
      content: content,
      image: image,
      author: 'Andreiy Shevchenko',
      postAt: new Date()
  }
   
    blogs.push(blog)
    render()
}
function render(){
    let contentContainer = document.getElementById('contents')

    contentContainer.innerHTML = ''

    for(i = 0 ; i<blogs.length; i++){
    
        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${ getFulltime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
           ${blogs[i].content}
          </p>
          <div style="text-align:right; font-size:15 color:grey">
            ${getDistancetime(blogs[i].postAt)}
          </div>
        </div>
      </div>`
    }
}

var month = [ 
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

function getFulltime (time){
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let result = `${date}-${monthIndex}-${year} ${hours}:${minutes} WIB`
  return result
}

function getDistancetime(time){
  let timePost= time
  let timeNow = new Date()
  let distance = timeNow- timePost
  let milieSeconds  = 1000
  let secondInMinutes = 60
  let minuteInHours = 60
  let hourInDay = 23
  let distanceDay = Math.floor(distance/(milieSeconds * secondInMinutes * minuteInHours * hourInDay))
  if(distanceDay >= 1){
    return`${distanceDay} day ago`

  }else{
    let distanceHours = Math.floor(distance / (milieSeconds * secondInMinutes * minuteInHours))
    if(distanceHours >=1){
      return`${distanceHours} hours ago`
    }else{
      let distanceMinutes = Math.floor(distance /(milieSeconds * secondInMinutes))
      if(distanceMinutes>=1){
      return`${distanceMinutes} minutes ago`
      }else{
        let distanceSeconds = Math.floor(distance/ milieSeconds)
        return(`${distanceSeconds} seconds ago`)
      }
    }
  }
  
}
setInterval(()=>{
  render()
},1000)