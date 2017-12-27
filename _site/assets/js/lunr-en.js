var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Sample Page",
      excerpt: "This is an example page. It’s different from a blog post because it will stay in one place and will...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Baz Boom Identity",
      excerpt: "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "This is my own",
      excerpt: "I love writng\n\nthis is awsome stuff\n",
      categories: [],
      tags: [],
      id: 2
    });
    
  

  
  

  
  

  
  
    idx.add({
      title: "Layout: Comments Enabled",
      excerpt: "This post should display comments.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["comments","layout"],
      id: 3
    });
    
  

  
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Sample Page",
        "url": "http://localhost:4000/blog/sample-page/",
        "excerpt": "This is an example page. It’s different from a blog post because it will stay in one place and will...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Baz Boom Identity",
        "url": "http://localhost:4000/blog/baz-boom-identity/",
        "excerpt": "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "This is my own",
        "url": "http://localhost:4000/blog/myown/",
        "excerpt": "I love writng\n\nthis is awsome stuff\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
  
    
    
    
  
    
    
    
      
      {
        "title": "Layout: Comments Enabled",
        "url": "http://localhost:4000/layout/uncategorized/layout-comments/",
        "excerpt": "This post should display comments.\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
