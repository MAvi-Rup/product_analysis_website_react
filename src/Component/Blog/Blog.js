import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <blockquote>Question No -1</blockquote>
            <h1>What is Context API ?</h1>
            <p><span className='fw-bold'>Answer :</span>React Context Api is a effective way to pass the variable globally to the react project. By using this we can stop using the props drilling method which we have every time pass the value by the props to the child component. By using context api we can declare the context in the parrent element and we can easily recive it from the anywhere in the child component. And for this we ned not pass any varible by the props. So react context api makes oue life easier.</p>
            <blockquote>Question No -2</blockquote>
            <h1>What is Semantic Tag ?</h1>
            <p><span className='fw-bold'>Answer :</span>Sematic tag is what that introduce the meaning to the web page rather than the presentation. Adding sementic tag in our web page we can adding more detailed information about our website. Semantic tag is also help us to make our website more accessible. And also it is good for the search engine that you used sematic tag in your website. Sematic tag help browser to get the more detailed information about the browser. Some of the sematic tags are - abbr, blockquote, dfn, h1-h6,code etc</p>
        </div>
    );
};

export default Blog;