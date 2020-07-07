import React, {Component} from 'react';

class PostList extends Component{

    render(){
        return(
            <section className="Blog"  id="main">
                <div className="text-center" id="bloghead">
                    <h1><strong>Posts</strong></h1>
                    <br />
                    <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4" id="blognav">
                        <div className="row align-self-center">
                            <div className="col-4">
                                <a href="/stories" className="stretched-link">Stories</a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="/essays" className="stretched-link">Essays</a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="/poems" className="stretched-link">Poems</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 offset-sm-2">
                    <div className="row">
                        {/* {% for post in site.posts%}
                        {% if post.featured == true%}
                        <div className="col-md-12">
                        {% else %} */}
                        <div className="col-md-6">
                        {/* {% endif %} */}
                            <div className="card hoverable">
                                <div className="card-body">
                                    <div className="imgcont">
                                        {/* {% if post.image != nil %} */}
                                            <img className="card-img-top" src="" alt=""/>
                                        {/* {% endif %} */}
                                        <div id="date">
                                            Date
                                        </div>
                                    </div>
                                        <div className="card-title">
                                            <p href="{{ post.url }}" style={{fontSize: 'xx-large'}}>Title</p>
                                        </div>
                                        <div className="card-content">
                                            <p>Highlight</p>
                                        </div>  
                                        <div className="card-content" style={{color:'grey', fontSize: 'small'}}>
                                            <p>Read time</p>
                                        </div>
                                        <a href="url" className="stretched-link"> </a>
                                    </div>
                                </div>
                            </div>
                        {/* {%endfor %} */}
                    </div>
                </div>
            </section>
        );
    }
}

export default PostList;