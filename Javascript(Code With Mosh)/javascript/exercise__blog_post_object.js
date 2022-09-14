
const post = {
    title  : 'a',
    body   : 'b',
    author : 'c',
    views  : 120,
    comments   : [
        {author: 'ew',body: 'sdsa'},
        {author: 'ew',body: 'sdsa'}
    ],
    isLive : true  
};

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

}

const blog = new Post('a', 'b', 'c');
console.log(blog);