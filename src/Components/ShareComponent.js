import React, {Component} from 'react'
import $ from 'jquery'

class Share extends Component{

    componentDidMount(){
        (function(){
            
            var documentl = $(document),
                sharelink = $('.dropdown'),
                contactPos = $('.Contact').position().top;

                sharelink.hide();
                documentl.on('scroll', function(){
                var currentScrollPos = documentl.scrollTop()+300;

                if (currentScrollPos>=contactPos-200 || currentScrollPos<=600){
                    console.log('exceed');
                    sharelink.hide(500)
                }
                else{
                    sharelink.show(500)
                }
            });
        
        })();
    }

    render(){
        return(
            <>
            <div className="d-none d-md-block" style={{top: 32+'%', left: 7+'%',position:'fixed'}}>
                <div className="dropdown" id="#sharing">
                    
                    <button data-toggle="dropdown" style={{fontSize:'30px'}}>
                        <span className="fa fa-share-alt"></span>
                    </button>
                    <hr style={{height:'0.5px'}}/>

                    <div className="dropdown-menu" style={{border: 'none',fontSize:'27px',minWidth:0+'px', backgroundColor:'rgba(1,1,1,0)', paddingTop:'20px'}}>
                        <div className="con" style={{padding:15+'px'}}>
                            <div className="row">
                                <a href={`http://www.facebook.com/sharer.php?u=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-facebook"></span></a>
                            </div>
                            <div className="row">
                                <a href={`https://twitter.com/share?u=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-twitter"></span></a>
                            </div>
                            <div className="row">
                                <a href={`https://www.reddit.com/submit?url=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-reddit"></span></a>
                            </div>
                            <div className="row">
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-linkedin"></span></a>
                            </div>
                            
                        </div>
                    </div>
                </div> 
            </div>
            <div className="d-block d-md-none">
                <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3" >
                        <div className="row" style={{fontSize:'24px', justifyContent:'right'}}>
                            <div style={{textAlign:'right'}}>
                                <span style={{fontSize:'18px', color:'#22a39f'}}><strong>Share:</strong></span>
                            </div>
                            <div className="col-1">
                                <a href={`http://www.facebook.com/sharer.php?u=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-facebook"></span></a>
                            </div>
                            <div className="col-1">
                                <a href={`https://twitter.com/share?u=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"> <span className="fa fa-twitter"></span></a>
                            </div>
                            <div className="col-1" style={{marginLeft:5+'px'}}>
                                <a href={`https://www.reddit.com/submit?url=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"> <span className="fa fa-reddit"></span></a>
                            </div>
                            <div className="col-1" style={{marginLeft:5+'px'}}>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://pratikl.com.np${this.props.slug}`} target="_blank" rel="noreferrer" aria-label="share"><span className="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                </div>
            </div>
            </>
        )
    }
}
export default Share;