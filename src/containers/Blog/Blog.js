import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts : [],
        selectedPostId : null,
        error: false
    }
    componentDidMount = () => (
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(posts =>
            {
                return {
                    ...posts,
                    author:'Sahil'
                }
            });
            this.setState({posts:updatePosts});
            console.log(response);
        })
        .catch(error=>
        {
            this.setState({error:true})
        })
    )
    onPostClickedHandler=(id)=>(
        this.setState({selectedPostId:id})
    ) 
    render () {
        let posts = <p style={{textAlign:'center'}}>Something Went Wrong</p>
        if(!this.state.error){
                posts = this.state.posts.map(posts =>{
                return(<Post key = {posts.id} title={posts.title} author={posts.author} clicked={()=>this.onPostClickedHandler(posts.id)}/>)
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;