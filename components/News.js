export default function News(news){  
    return `
    <section id="news" class="news">
    <h1 class="title" style="text-align: left;">News</h1>
    <form action="" method="">	
        <input type="search" class="search" name="news" id="news" placeholder="Search News...">
    </form>
    <div class="news-list">
        ${renderNewsItems(news)}
      </div>
    </section>`;
  }
export function renderNewsItems(news){
    return news.map(d=> `
      <div class="row">
          <div class="col-6">
              ${d.title}
          </div>
          <div class="col-6" style="text-align: right">
              ${d.date}
          </div>
      </div>
      `).join('');
}

export function handleNewsFilter(data){
    document.getElementById('news').addEventListener('input', (event)=>{filterNews(event.target.value, data)});
}

function filterNews(string, data){
    var newsFiltered = [];
    var x = 0;
    var i;
    for (i = 0; i < data.news.length; i++) { 
        if ( (data.news[i].title.toUpperCase().includes(string.toUpperCase())) ||
             (data.news[i].date.toUpperCase().includes(string.toUpperCase())) ) 
        {
            x = newsFiltered.push(data.news[i]);
        }
    }
    document.querySelector('.news-list').innerHTML = `${renderNewsItems(newsFiltered)}`;
  }