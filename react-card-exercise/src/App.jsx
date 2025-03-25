import Post from './components/Main/Post/post';
import icy_mount from './assets/icy_mount.png';
import './App.css';

function App(){

        const post = {
            image: icy_mount,
            title: 'Post One',
            content: 'lorem ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet',
            read: 102,
            views: 5132,
            comments: 30,
            relativetime: '1 hour ago'
        }

    return(
        <div className="main-container">
            <Post post={post}/>
            <Post post={post}/>
            <Post post={post}/>
            <Post post={post}/>
        </div>
    )



}

export default  App ;