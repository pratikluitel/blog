import React from 'react';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import {Helmet} from 'react-helmet';

function About(){
    return(
        <>
        <Helmet>
          <title>About -- Pratik Luitel</title>
        </Helmet>
        <Navigation/>
        <section class="About">
            <div id="main" class="container" style={{marginTop:80+'px'}}>
                <div class="row">
                    <div class="col-10 col-sm-8 offset-1 offset-sm-2">
                        <div class="row row-header" id="title"
                         style={{
                            marginTop: 30+'px',
                            marginBottom: 20+'px',
                            paddingBottom: 0+'px'
                         }}
                         >
                            <div class="col-8 offset-2">
                                <h1><strong>About</strong></h1>
                            </div>
                        </div>
                        <div class="row row-content justify-content-center">
                            <div class="author-pic"></div>
                        </div>
                        <div class="row row-content" style={{marginTop: 30+'px'}}>
                            <div class="text-content">
                                <p><span style={{fontSize: 'x-large', color:'#22a39f'}}><strong>Hello</strong></span></p>
                                <p>I have no idea how you stumbled across this secluded corner of the internet, my friend, but now that you have, let me indulge you for a couple of minutes.</p>
                                <p>What you have before you is my humble abode. Somewhat untidy, I know, but hey - that's where we all start off, right?</p>
                                <p>This is a blog I started in a desperate attempt to end my long writing hiatus. You probably already know <a href="./index.html#main">how it panned out</a>, since you've made it into the ABOUT SECTION.</p>
                                <p>If those semi incoherent ramblings and outlandish tales did not bore you, then well.., my friend... and I shudder to tell you tell you this, but I'm afraid you have a terrible case of "a lost cause syndrome", as I like to call it. I send my regards, wherever you are in the world.</p>
                                <p> Hope you stick around.</p>
                                <br/>
                                <p><span style={{fontSize: 'x-large', color:'#22a39f'}}><strong>In Real Life</strong></span></p>
                                <p> I am an Electronics and Communication Engineering student at <a href="https://pcampus.edu.np">IOE, Pulchowk Campus</a>, with interest in Data Science and Machine Learning.</p> 
                                    <p>As of late, I have also
                                found myself growing increasingly fond of web development.</p>
                                <p>In my spare time, I love listening to music and playing video games, among a thousand other of my ever-expanding interests. Stick around the blog, and you'll know about all of them :p.</p>
                                <p>I also love to <a href="https://www.goodreads.com/user/show/54605032-pratik-luitel">read</a> in my spare time (and sometimes when I have more important things to do).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default About;